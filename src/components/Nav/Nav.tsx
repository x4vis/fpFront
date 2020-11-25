import React, { useState, useEffect, useCallback } from 'react';
import { environment } from '../../environments/environment';
import { Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { MenuItems } from '../../views/MenuItems';
import AdminRoutes from '../../routes/Admin/AdminRoutes';

import "./Nav.scss";

const Nav = () => {

    const [collapsed, setCollapsed] = useState<boolean>(false);

    const { SubMenu } = Menu;
    const { Header, Content, Sider, Footer } = Layout;
    const { project: { fullName } } = environment;
    const year = new Date().getFullYear();

    const toggle = (): void => {
        setCollapsed(!collapsed);
    }

    const handleResize = useCallback(event => {
        let inner_width = window.innerWidth;
        typeof(event) === 'number' ? inner_width = event : inner_width = event.target.innerWidth;
        inner_width > 992 ? setCollapsed(false) : setCollapsed(true);
    }, []); 

    useEffect(() => {
        let inner_width = window.innerWidth;
        handleResize(inner_width);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize])

    return (
        <Layout className="layout">
            {/* SIDE */}
            <Sider trigger={null}
                   collapsible
                   collapsed={collapsed}
                   className="sider" >
                <div className="logo" />
                <Menu mode="inline"
                      className="menu"
                      theme="dark" >
                    
                    {MenuItems.map((menu) => (
                        menu.canExpand ? 
                            <SubMenu key={`sub${menu.key}`}
                                     icon={<menu.icon />}
                                     title={menu.title}
                                     className="hover-menu">
                                {menu.submenu?.map((submenu) => (
                                    <Menu.Item className="d-flex align-items-center" 
                                               key={submenu.key}
                                               icon={<submenu.icon />}>
                                        <Link to={submenu.path}>
                                            {submenu.title}
                                        </Link>
                                    </Menu.Item>
                                ))}
                            </SubMenu>
                            :
                            <Menu.Item className="d-flex align-items-center" 
                                       key={menu.key}
                                       icon={<menu.icon />}>
                                <Link to={menu.path}>
                                    {menu.title}
                                </Link>
                            </Menu.Item>
                    ))}
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
                    {/* Rutas de routes/AdminRoutes */}
                    <AdminRoutes />
                </Content>

                <Footer className="text-center bw-text tiny-text">
                    {fullName} ©{year}
                </Footer>
            </Layout>
        </Layout>
    )
}

export default Nav;