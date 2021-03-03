import React from 'react'
import { Form, Input, Button } from 'antd';
import { minLenght, required, typeEmail } from "../../../helpers/ValidationsForm";
import Logo from "../../../assets/Logo.png";
import Logo_small from "../../../assets/imgs-small/Logo_small.png";

import { Link } from "react-router-dom";

import classes from "./Login.module.scss";

const Login = () => {
	const [form] = Form.useForm();

	const logIn = () => {

	}

	return (
		<div className={`${classes["container"]} container d-flex justify-content-center align-items-center animated fadeInLeft`}>
			<div className={`row ${classes["container-login"]}`}>
				<div className="col-12 d-flex justify-content-center">
					<picture>
						<source media="(min-width:500px)" srcSet={Logo} />
						<source media="(min-width:320px)" srcSet={Logo_small} />
						<img className="img-fluid mx-auto" src={Logo} alt="Logo empresa" />
					</picture>
				</div>
				<div className="col-12">
					<Form form={form}
						name="login"
						layout="vertical"
						size="large"
						onFinish={logIn}>
						<Form.Item className="mw-text"
							name="email"
							label="Correo"
							hasFeedback
							rules={[typeEmail(), required('correo')]}>
							<Input className="border-r"
								placeholder="Ingresa tu correo"
								prefix={<i className="fa fa-at"></i>} />
						</Form.Item>

						<Form.Item className="mw-text mt-3"
							name="psw"
							label="Contraseña"
							hasFeedback
							rules={[minLenght(8), required('contraseña')]}>
							<Input.Password className="border-r"
								placeholder="Ingresa tu contraseña"
								prefix={<i className="fa fa-lock"></i>} />
						</Form.Item>

						<div className="row align-items-center flex-column-reverse flex-sm-row">
							<div className="col-12 col-sm-6 text-center">
								<Link to="/recuperar-contrasena">¿Olvidaste tu contraseña?</Link>
							</div>
							<div className="col-12 col-sm-6">
								<Form.Item className="mt-3 mt-sm-5">
									<Button className="fullWidth border-r"
										type="primary"
										htmlType="submit"
										size="large">
										<p className="bw-text">
											<i className="fa fa-sign-in mr-3"></i>
                       Iniciar Sesión
                    </p>
									</Button>
								</Form.Item>
							</div>
						</div>
					</Form>
				</div>
			</div>
		</div>
	)
}

export default Login;
