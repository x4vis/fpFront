import React from 'react'
import { Form, Input, Button } from 'antd';
import { minLenght, required, maxLenght } from "../../helpers/ValidationsForm";
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import "./Login.scss";

function Login() {

    const [form] = Form.useForm();

    form.isFieldsValidating();

    const iniciarSesion = () => {
        
    }

    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="row container-login">
                <div className="col-12 d-flex justify-content-center">
                    <picture>
                        <source media="(min-width:500px)" srcSet={require('../../assets/Logo.png')} />
                        <source media="(min-width:320px)" srcSet={require('../../assets/imgs-small/Logo_small.png')} />
                        <img className="img-fluid mx-auto" src={require('../../assets/Logo.png')} alt="Logo empresa" />
                    </picture>
                </div>
                <div className="col-12">
                    <Form form={form} name="login" layout="vertical">
                        <Form.Item className="mw-text"
                                   name="usuario"
                                   label="Usuario"
                                   rules={[minLenght(5), maxLenght(8), required('usuario')]}>
                            <Input placeholder="Ingresa tu usuario" prefix={<UserOutlined />} />
                        </Form.Item>

                        <Form.Item className="mw-text mt-3"
                                   name="contrasena"
                                   label="Contraseña"
                                   rules={[minLenght(8), required('contraseña')]}>
                            <Input.Password placeholder="Ingresa tu contraseña" prefix={<LockOutlined />} />
                        </Form.Item>

                        <Form.Item className="mt-5">
                            <Button className="fullWidth"
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    onClick={iniciarSesion}>
                                <p className="bw-text">Iniciar Sesión</p>
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login
