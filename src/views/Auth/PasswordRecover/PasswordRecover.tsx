import React from 'react'
import { Form, Input, Button } from 'antd';
import { required, typeEmail } from "../../../helpers/ValidationsForm";
import Logo from "../../../assets/Logo.png";
import Logo_small from "../../../assets/imgs-small/Logo_small.png";

import { Link } from "react-router-dom";

import classes from "./PasswordRecover.module.scss";

const PasswordRecover = () => {

    const [form] = Form.useForm();

    const sendEmail = () => {
        
    }

    return (
        <div className={`${classes["container"]} container d-flex justify-content-center align-items-center animated fadeInRight`}>
            <div className={`row ${classes["container-recuperar"]}`}>
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
                          onFinish={sendEmail}>
                        <Form.Item className="mw-text"
                                   name="email"
                                   label="Correo"
                                   hasFeedback
                                   rules={[ typeEmail(), required('correo')]}>
                            <Input className="border-r"
                                   placeholder="Ingresa tu correo" 
                                   prefix={<i className="fa fa-at"></i>} />
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
                                        Enviar correo
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

export default PasswordRecover;
