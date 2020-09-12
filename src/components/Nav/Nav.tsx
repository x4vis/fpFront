import React, { useState } from 'react';

import Admin from '../../routes/Admin'

import { Link } from "react-router-dom";

import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import "./Nav.scss";

const Nav = () => {

    const [collapsed, setCollapsed] = useState<boolean>(false);

    const { SubMenu: SubMenu } = Menu;
    const { Header, Content, Sider, Footer } = Layout;
    const year = new Date().getFullYear();

    const toggle = (): void => {
        setCollapsed(!collapsed);
    }

    return (
        <Layout className="layout">
            {/* SIDE */}
            <Sider trigger={null}
                   collapsible
                   collapsed={collapsed}
                   className="sider" >
                <div className="logo" />
                <Menu mode="inline"
                      defaultSelectedKeys={['1']}
                      className="menu"
                      theme="dark" >
                    
                    <SubMenu key="sub1" 
                            icon={<UserOutlined />} 
                            title="subnav 1"
                            className="hover-menu">
                        
                        <Menu.Item key="1">option1</Menu.Item>
                        <Menu.Item key="2">option2</Menu.Item>
                        <Menu.Item key="3">option3</Menu.Item>
                        <Menu.Item key="4">option4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" 
                            icon={<UserOutlined />} 
                            title="subnav 2"
                            className="hover-menu">
                        <Menu.Item key="5">option5</Menu.Item>
                        <Menu.Item key="6">option6</Menu.Item>
                        <Menu.Item key="7">option7</Menu.Item>
                        <Menu.Item key="8">option8</Menu.Item>
                    </SubMenu>

                    <Menu.Item key="9" icon={<UserOutlined />}>
                        <Link to="/admin/crear-usuario">
                            {collapsed ? '' : 'Crear usuario'}
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="10" icon={<UserOutlined />}>
                        <Link to="/admin/editar-usuario">
                            {collapsed ? '' : 'Editar usuario'}
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            
            <Layout className="site-layout">
                {/* NAV */}
                <Header className="site-layout-background header">
                    <button className="trigger" onClick={toggle}>
                        <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
                    </button>
                </Header>

                <Content id="content" className="site-layout-background content">
                    <Admin />
                </Content>

                <Footer className="text-center bw-text tiny-text">
                    Materiales Presitas ©{year}
                </Footer>
            </Layout>
        </Layout>
    )
}

export default Nav;