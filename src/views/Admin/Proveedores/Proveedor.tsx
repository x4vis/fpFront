import React from 'react';
import { Button } from 'antd';

import Proptypes from "prop-types";

const Proveedor = ({ prov }) => (
    <tr>
        <td>{prov.nombre}</td>
        <td>{prov.nombreComercial}</td>
        <td>{prov.tipoPersona}</td>
        <td>{prov.telefono === null ? "N/A" : prov.telefono}</td>
        <td>{prov.correo === null ? "N/A" : prov.correo}</td>
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

Proveedor.propTypes = {
    prov: Proptypes.object.isRequired
}

export default Proveedor;