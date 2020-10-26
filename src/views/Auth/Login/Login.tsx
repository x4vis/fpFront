import React from 'react'
import { Form, Input, Button } from 'antd';
import { minLenght, required, type_email } from "../../../helpers/ValidationsForm";

import { Link } from "react-router-dom";

import "./Login.scss";

const Login = () => {
    const lksdklf

    const [form] = Form.useForm();

    const iniciarSesion = () => {
        
    }

    return (
        <div className="container d-flex justify-content-center align-items-center animated fadeInLeft">
            <div className="row container-login">
                <div className="col-12 d-flex justify-content-center">
                    <picture>
                        <source media="(min-width:500px)" srcSet={require('../../../assets/Logo.png')} />
                        <source media="(min-width:320px)" srcSet={require('../../../assets/imgs-small/Logo_small.png')} />
                        <img className="img-fluid mx-auto" src={require('../../../assets/Logo.png')} alt="Logo empresa" />
                    </picture>
                </div>
                <div className="col-12">
                    <Form form={form} 
                          name="login" 
                          layout="vertical" 
                          size="large" 
                          onFinish={iniciarSesion}>
                        <Form.Item className="mw-text"
                                   name="correo"
                                   label="Correo"
                                   hasFeedback
                                   rules={[ type_email(), required('correo')]}>
                            <Input className="border-r" 
                                   placeholder="Ingresa tu correo" 
                                   prefix={<i className="fa fa-at"></i>} />
                        </Form.Item>

                        <Form.Item className="mw-text mt-3"
                                   name="contrasena"
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
