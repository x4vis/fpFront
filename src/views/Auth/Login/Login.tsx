import React from 'react'
import { Form, Input, Button } from 'antd';
import { minLenght, required, type_email } from "../../../helpers/ValidationsForm";
import { LockOutlined } from '@ant-design/icons';

import { Link } from "react-router-dom";

import "./Login.scss";

function Login() {

    const [form] = Form.useForm();

    const iniciarSesion = () => {
        
    }

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row container-login">
                <div className="col-12 d-flex justify-content-center">
                    <picture>
                        <source media="(min-width:500px)" srcSet={require('../../../assets/Logo.png')} />
                        <source media="(min-width:320px)" srcSet={require('../../../assets/imgs-small/Logo_small.png')} />
                        <img className="img-fluid mx-auto" src={require('../../../assets/Logo.png')} alt="Logo empresa" />
                    </picture>
                </div>
                <div className="col-12">
                    <Form form={form} name="login" layout="vertical">
                        <Form.Item className="mw-text"
                                   name="correo"
                                   label="Correo"
                                   hasFeedback
                                   rules={[ type_email(), required('usuario')]}>
                            <Input placeholder="Ingresa tu correo" prefix={<i className="fa fa-at"></i>} />
                        </Form.Item>

                        <Form.Item className="mw-text mt-3"
                                   name="contrasena"
                                   label="Contraseña"
                                   hasFeedback
                                   rules={[minLenght(8), required('contraseña')]}>
                            <Input.Password placeholder="Ingresa tu contraseña" prefix={<LockOutlined />} />
                        </Form.Item>

                        <div className="row align-items-center flex-column-reverse flex-sm-row">
                            <div className="col-12 col-sm-6 text-center">
                                <Link to="/recuperar-contrasena">¿Olvidaste tu contraseña?</Link>
                            </div>
                            <div className="col-12 col-sm-6">
                            <Form.Item className="mt-5">
                                <Button className="fullWidth"
                                        type="primary"
                                        htmlType="submit"
                                        size="large"
                                        onClick={iniciarSesion}>
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

export default Login
