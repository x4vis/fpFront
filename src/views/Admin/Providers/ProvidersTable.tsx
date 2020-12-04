import React, { useState, useEffect } from 'react'
import ProvidersService from "../../../services/Admin/ProvidersService";
import Proptypes from "prop-types";

import Provider from "./Provider";
import EmptyTable from "../../../components/EmptyTable";
import Paginator from "../../../components/Paginator";

import { ProvidersType } from "../../../interfaces/Admin/ProvidersType";
import { PaginationType } from "../../../interfaces/Generic/PaginationType";

const ProvidersTable = ({search, update}) => {

    const [ providers, setProviders ] = useState<Array<ProvidersType>>([]);
    const [ pagination, setPagination ] = useState<PaginationType>({
        totalRecords: 0,
        resourceQty: 10,
        page: 1
    });

    const { page, resourceQty } = pagination;

    useEffect(() => {
        const getProviders = async () => { 
            await ProvidersService.getProviders(true, page, search, resourceQty)
            .then(provs => {
                setPagination({
                    totalRecords: provs.headers.totalrecords,
                    resourceQty,
                    page
                })
                setProviders(provs.data);
            })
            .catch(err => { 
                console.log('err', err)
            });
        }
        getProviders();
    }, [search, update, page, resourceQty])

    return (
        <>
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
                <div className="col-12 col-md-8">
                    <Paginator pagination={pagination} 
                               setPagination={setPagination} />
                </div>
            </div>
        </>
    )
}

ProvidersTable.propTypes = {
    search: Proptypes.string.isRequired,
    update: Proptypes.bool.isRequired,
}

export default ProvidersTable;