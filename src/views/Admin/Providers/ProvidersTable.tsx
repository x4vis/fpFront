import React, { useState, useEffect } from 'react'
import { ProvidersType } from "../../../interfaces/Admin/ProvidersType";
import { PaginationType } from "../../../interfaces/Generic/PaginationType";
import Provider from "./Provider";
import EmptyTable from "../../../components/EmptyTable";
import Paginator from "../../../components/Paginator";
import ProvidersService from "../../../services/Admin/ProvidersService";
import Proptypes from "prop-types";

const ProvidersTable = ({search, update}) => {

    const [ providers, setProviders ] = useState<Array<ProvidersType>>([]);
    const [ page, setPage ] = useState<number>(1);
    const [ resourceQty, setResourceQty ] = useState<number>(10);
    const [ pagination, setPagination ] = useState<PaginationType>({
        pageQty: 0,
        totalRecords: 0
    });

    useEffect(() => {
        const getProviders = async () => {
            await ProvidersService.getProviders(true, page, search, resourceQty)
            .then(provs => {
                const { pageQty, totalRecords } = provs.headers;
    
                setPagination({
                    pageQty: Number(pageQty),
                    totalRecords: Number(totalRecords)
                })
    
                setProviders(provs.data);
            })
            .catch(err => console.log('err', err));
        }

        try {
            getProviders();
        } catch (err) {
            console.log('err', err.message)    
        }

    }, [search, update, page, resourceQty])

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
                            providers.length !== 0 ?

                            providers.map(prov => (
                                <Provider key={prov.id} prov={prov}/>
                            )) 
                            :
                            <EmptyTable colspan={6}/>
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

ProvidersTable.propTypes = {
    search: Proptypes.string.isRequired,
    update: Proptypes.bool.isRequired,
}

export default ProvidersTable;