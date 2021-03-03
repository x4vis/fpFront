import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import classes from "./MainPage.module.scss";

const MainPage = () => {

	const { Header } = Layout;

	const LogOut = () => {

	}

	return (
		<>
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

			<div className={`container-fluid ${classes["container-fluid"]}`}>
				<div className="row justify-content-center">
					<div className="col-12 col-sm-10 col-md-6 offset-md-0 col-lg-5">
						<Link to={'/admin'}>
							<button className="fullWidth">
								<div className={`main-card ${classes["main-card"]}`}>
									<p className="bw-text small-text blue">ADMINISTRACIÓN</p>
								</div>
							</button>
						</Link>
					</div>
					<div className="col-12 col-sm-10 col-md-6 offset-md-0 col-lg-5 mt-5 mt-md-0">
						<div className={`main-card ${classes["main-card"]}`}>
							<p className="bw-text small-text blue">PUNTO DE VENTA</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default MainPage;