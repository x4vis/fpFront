import React, { useState } from 'react';
import { environment } from '../../environments/environment';

import { MenuItems } from '../../views/MenuItems';
import Admin from '../../routes/Admin';

import { Layout, Menu } from 'antd';

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
                                     title={menu.submenu?.subtitulo}
                                     className="hover-menu">
                                {menu.submenu?.menu?.map((submenu) => (
                                    <Menu.Item key={submenu.key}
                                               icon={<submenu.icon />}>
                                        {submenu.titulo}
                                    </Menu.Item>
                                ))}
                            </SubMenu>
                            :
                            <Menu.Item key={menu.key}
                                       icon={<menu.icon />}>
                                {menu.titulo}
                            </Menu.Item>
                    ))};
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
                    {fullName} ©{year}
                </Footer>
            </Layout>
        </Layout>
    )
}

export default Nav;