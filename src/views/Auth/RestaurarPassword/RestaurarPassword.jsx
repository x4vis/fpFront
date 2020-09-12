import React from 'react'
import { Form, Input, Button } from 'antd';
import { minLenght, required } from "../../../helpers/ValidationsForm";

import { Link } from "react-router-dom";

import "./RestaurarPassword.scss";

const RestaurarPassword = () => {

    const [form] = Form.useForm();

    const restaurarPass = () => {
        console.log('entra')
    }

    return(
        <div className="container d-flex justify-content-center align-items-center animated fadeInRight">
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
                          name="resturar" 
                          layout="vertical"
                          size="large" 
                          onFinish={restaurarPass}>
                        <Form.Item className="mw-text"
                                   name="contrasena"
                                   label="Contraseña"
                                   hasFeedback
                                   rules={[minLenght(8), required('contraseña')]}>
                            <Input.Password className="border-r" 
                                            placeholder="Ingresa tu contraseña" 
                                            prefix={<i className="fa fa-lock"></i>} />
                        </Form.Item>

                        <Form.Item className="mw-text"
                                   name="contrasena-confirm"
                                   label="Confirmar contraseña"
                                   hasFeedback
                                   rules={[minLenght(8), required('confirmar contraseña')]}>
                            <Input.Password className="border-r" 
                                            placeholder="Confirma tu contraseña" 
                                            prefix={<i className="fa fa-lock"></i>} />
                        </Form.Item>

                        <div className="row align-items-center flex-column-reverse flex-sm-row">
                            <div className="col-12 col-sm-6 text-center">
                                <Link to="/login">
                                    <i className="fa fa-arrow-left mr-3"></i>
                                    Regresar al acceso
                                </Link>
                            </div>
                            <div className="col-12 col-sm-6">
                            <Form.Item className="mt-3 mt-sm-5">
                                <Button className="fullWidth border-r"
                                        type="primary"
                                        htmlType="submit"
                                        size="large">
                                    <p className="bw-text">
                                        <i className="fa fa-paper-plane-o mr-3"></i>
                                        Guardar
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

export default RestaurarPassword;