import React from 'react';
import { Button } from 'antd';
import { ProvidersType } from "../../../interfaces/Admin/ProvidersType";

import Proptypes from "prop-types";

const Provider: React.FC<{ prov: ProvidersType }> = ({ prov }) => {
    return ( 
        <tr>
            <td>{prov.name}</td>
            <td>{prov.comercialName}</td>
            <td>{prov.personType}</td>
            <td>{prov.phoneNumber === null ? "N/A" : prov.phoneNumber}</td>
            <td>{prov.email === null ? "N/A" : prov.email}</td>
            <td className="d-flex">
                <Button type="primary" ghost className="mx-2 px-3">
                    <i className="fa fa-pencil" aria-hidden="true"></i>
                </Button>
                <Button danger className="px-3">
                    <i className="fa fa-trash"></i>
                </Button>
            </td>
        </tr> 
    )
}

Provider.propTypes = {
    prov: Proptypes.object.isRequired
}

export default Provider;