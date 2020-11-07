import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd';

import Proptypes from "prop-types";

const BtnCrearRecurso = ({ recurso }) => (
    <Link to={`/admin/${recurso}/crear`}>
        <Button className="blue-back white fullWidth"
                type="primary"
                size="large"
                shape="round">
            Crear
        </Button>
    </Link>
)

BtnCrearRecurso.propTypes = {
    recurso: Proptypes.string.isRequired
}

export default BtnCrearRecurso;