import React from 'react'
import { Button, Tooltip } from 'antd';

import Proptypes from "prop-types";

const BtnBorrarBusqueda = ({ setBusqueda, setvalueSearch }) => {
    return (
        <Tooltip title="borrar búsqueda">
            <Button shape="circle" 
                    style={{ minWidth: "26px", height: "26px" }}
                    onClick={() => { setBusqueda(""); setvalueSearch("") }}>
                <i className="fa fa-times blue d-flex align-items-center justify-content-center"></i>
            </Button>
        </Tooltip>
    )
}

BtnBorrarBusqueda.propTypes = {
    setBusqueda: Proptypes.func.isRequired,
    setvalueSearch: Proptypes.func.isRequired
}

export default BtnBorrarBusqueda;