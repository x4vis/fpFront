import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'antd';

import Proptypes from "prop-types";

const BtnCrearRecurso = ({ history, recurso }) => {
    return (
        <Button className="blue-back white fullWidth"
                type="primary"
                size="large"
                shape="round"
                onClick={() => { history.push(`/admin/${recurso}/crear`) }} >
            Crear
        </Button>
    )
}

BtnCrearRecurso.propTypes = {
    recurso: Proptypes.string.isRequired
}

export default withRouter(BtnCrearRecurso);