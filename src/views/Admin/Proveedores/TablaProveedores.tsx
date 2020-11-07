import React, { useState, useEffect } from 'react'
import { ProveedoresType } from "../../../interfaces/Admin/ProveedoresType";
import { PaginationType } from "../../../interfaces/Generic/PaginationType";
import Proveedor from "./Proveedor";
import TablaVacia from "../../../components/TablaVacia";
import Paginator from "../../../components/Paginator";
import ProveedoresService from "../../../services/Admin/ProveedoresService";
import Proptypes from "prop-types";

const TablaProveedores = ({busqueda, actualizar}) => {

    const [ proveedores, setProveedores ] = useState<Array<ProveedoresType>>([]);
    const [ page, setPage ] = useState<number>(1);
    const [ resourceQty, setResourceQty ] = useState<number>(10);
    const [ pagination, setPagination ] = useState<PaginationType>({
        cantPag: 0,
        totalRegistros: 0
    });

    const obtenerProveedores = async () => {
        await ProveedoresService.getProveedores(true, page, busqueda, resourceQty)
        .then(provs => {
            const { cantidadpaginas, totalregistros } = provs.headers;

            setPagination({
                cantPag: Number(cantidadpaginas),
                totalRegistros: Number(totalregistros)
            })

            setProveedores(provs.data);
        })
        .catch(err => console.log('err', err));
    }

    useEffect(() => {
        try {
            obtenerProveedores();
        } catch (err) {
            console.log('err', err.message)    
        }

    }, [busqueda, actualizar, page, resourceQty])

    return (
        <div>
            <div className="table-responsive mt-5">
                <table className="table table-striped">
                        <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Nombre Comercial</th>
                            <th scope="col">Tipo de Persona</th>
                            <th scope="col">Teléfono</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            proveedores.length !== 0 ?

                            proveedores.map(prov => (
                                <Proveedor key={prov.id} prov={prov}/>
                            )) 
                            :
                            <TablaVacia colspan={6}/>
                        }
                    </tbody>
                </table>
            </div>

            <div className="row justify-content-end">
                <div className="col-12 col-md-6">
                    <Paginator pagination={pagination} 
                               page={page} 
                               setPage={setPage}
                               resourceQty={resourceQty} 
                               setResourceQty={setResourceQty} />
                </div>
            </div>
        </div>
    )
}

TablaProveedores.propTypes = {
    busqueda: Proptypes.string.isRequired,
    actualizar: Proptypes.bool.isRequired,
}

export default TablaProveedores;