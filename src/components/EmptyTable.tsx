import React from 'react';
import { Informative } from "../enums/Messages";
import Proptypes from "prop-types";

const EmptyTable = ({ colspan }) => (
    <tr>
        <td colSpan={colspan} className="text-center blue mw-text small-text">
            {Informative.EmptyTable}
        </td>
    </tr>
)

EmptyTable.propTypes = {
    colspan: Proptypes.number.isRequired
}

export default EmptyTable;