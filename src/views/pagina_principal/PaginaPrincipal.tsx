import React, { Fragment } from 'react';
import { Layout, Menu } from 'antd';
import { withRouter } from "react-router-dom";

import "./PaginaPrincipal.scss";

const PaginaPrincipal = (props) => {

    const { Header } = Layout;
    const { history } = props;

    const LogOut =  () => {

    }

    return (
        <Fragment>
            <Layout>
                <Header>
                    <Menu className="d-flex justify-content-end" 
                          theme="dark" 
                          mode="horizontal" 
                          defaultSelectedKeys={['1']}>
                        <Menu.Item className="d-flex align-items-center" 
                                   key="1"
                                   onClick={LogOut}>
                            Cerrar Sesión
                            <i className="fa fa-sign-out ml-3 small-text"></i>
                        </Menu.Item>
                    </Menu>
                </Header>
            </Layout>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <button className="fullWidth" onClick={() => history.push('/admin')}>
                            <div className="main-card">
                                <p className="bw-text small-text blue">ADMINISTRACIÓN</p>
                            </div>
                        </button>
                    </div>
                    <div className="col-12 col-md-6 mt-5 mt-md-0">
                        <div className="main-card">
                            <p className="bw-text small-text blue">PUNTO DE VENTA</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default withRouter(PaginaPrincipal);