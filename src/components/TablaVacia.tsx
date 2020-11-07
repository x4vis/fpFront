import React from 'react';

import { Informativos } from "../enums/Mensajes";

import Proptypes from "prop-types";

const TablaVacia = ({ colspan }) => (
    <tr>
        <td colSpan={colspan} className="text-center blue mw-text small-text">
            {Informativos.TablaVacia}
        </td>
    </tr>
)

TablaVacia.propTypes = {
    colspan: Proptypes.number.isRequired
}

export default TablaVacia;