import React, { Fragment } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";

import "./PaginaPrincipal.scss";

const PaginaPrincipal = () => {

    const { Header } = Layout;

    const LogOut =  () => {

    }

    return (
        <Fragment>
            <Layout className="layout">
                <Header>
                    <Menu className="d-flex justify-content-end" 
                          theme="dark" 
                          mode="horizontal" 
                          defaultSelectedKeys={['1']}>
                        <Menu.Item className="d-flex align-items-center" 
                                   key="1"
                                   onClick={LogOut}>
                            Salir
                            <i className="fa fa-sign-out ml-3 small-text"></i>
                        </Menu.Item>
                    </Menu>
                </Header>
            </Layout>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Link to="/admin">
                            <div className="main-card">
                                <p className="bw-text small-text blue">ADMINISTRACIÓN</p>
                            </div>
                        </Link>
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

export default PaginaPrincipal;