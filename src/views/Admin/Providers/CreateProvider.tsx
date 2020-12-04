import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { Form, Input, Button, Select, notification } from 'antd';
import { maxLenght, required, typeEmail, pattern } from "../../../helpers/ValidationsForm";
import { PatternText, PatternNumber, PatternPersonaFisica, PatternPersonaMoral } from "../../../helpers/Patterns";
import { addedResource } from "../../../helpers/Messages"; 

import ProvidersService from "../../../services/Admin/ProvidersService";

const CreateProvider = ({ history }) => {
    const [ form ] = Form.useForm();
    const [ personType, setPersonType ] = useState<string>('');

    const handleSubmit = async () => {
        const cp = form.getFieldsValue().cp;

        form.setFieldsValue({
            cp: cp ? Number(cp) : cp
        });

        await ProvidersService.createProvider(form.getFieldsValue())
        .then(() => { 
            notification.success({
                message: addedResource('proveedor')
            });

            form.resetFields();
        })
        .catch(err => { console.log('err', err) });
    }

    return (
        <div className="container-fluid">
            <h1 className="blue bw-text big-text">Crear Proveedor</h1>

            <div className="main-card mt-5 p-4">
                <Form form={form}
                      name="crear-proveedor"
                      layout="vertical"
                      size="large"
                      onFinish={handleSubmit} >
                    <div className="row">
                        <div className="col-12">
                            <h2 className="blue mw-text medium-text">Datos generales</h2>
                        </div>

                        {/* Input nombre */}
                        <div className="col-12 col-md-4">
                            <Form.Item className="mw-text"
                                        name="name"
                                        label="Nombre"
                                        hasFeedback
                                        rules={[ required('nombre'), maxLenght(255), pattern(PatternText) ]}>
                                <Input className="border-r" 
                                       placeholder="Ingresa nombre"
                                       prefix={<i className="fa fa-user"></i>}
                                       autoComplete="off" />
                            </Form.Item>
                        </div>
                        {/* Input nombre comercial*/}
                        <div className="col-12 col-md-4">
                            <Form.Item className="mw-text"
                                        name="comercialName"
                                        label="Nombre comercial"
                                        hasFeedback
                                        rules={[ required('nombre comercial'), maxLenght(255) ]}>
                                <Input className="border-r" 
                                       placeholder="Ingresa nombre comercial"
                                       prefix={<i className="fa fa-user"></i>}
                                       autoComplete="off" />
                            </Form.Item>
                        </div>
                        {/* Seleccion de tipo de persona */}
                        <div className="col-12 col-md-4">
                            <Form.Item className="mw-text"
                                        name="personType"
                                        label="Tipo de persona"
                                        hasFeedback
                                        rules={[required('tipo de persona')]}>
                                <Select placeholder="Seleccione"
                                        onChange={val => { setPersonType(`${val}`) }}>
                                    <Select.Option value="Fisica">Fisica</Select.Option>
                                    <Select.Option value="Moral">Moral</Select.Option>
                                </Select>
                            </Form.Item>
                        </div>
                        {/* Input rfc*/}
                        <div className="col-12 col-md-4">
                            <Form.Item className="mw-text"
                                       name="rfc"
                                       label="RFC"
                                       hasFeedback
                                       rules={[ 
                                            required('RFC'), 
                                            maxLenght(255), 
                                            pattern(personType === 'Fisica' ? PatternPersonaFisica : PatternPersonaMoral) 
                                       ]} >

                                <Input className="border-r"
                                       placeholder="Ingresa RFC"
                                       disabled={personType === ''}
                                       prefix={<i className="fa fa-user"></i>}
                                       autoComplete="off" />

                            </Form.Item>
                        </div>

                        {/* Input correo */}
                        <div className="col-12 col-md-4">
                            <Form.Item className="mw-text"
                                       name="email"
                                       label="Correo"
                                       hasFeedback
                                       rules={[ typeEmail(), required('correo'), maxLenght(128) ]}>
                                <Input className="border-r" 
                                       placeholder="Ingresa correo" 
                                       prefix={<i className="fa fa-at"></i>} />
                            </Form.Item>
                        </div>
                        {/* Input telefono */}
                        <div className="col-12 col-md-4">
                            <Form.Item className="mw-text"
                                       name="phoneNumber"
                                       label="Teléfono"
                                       hasFeedback
                                       rules={[ maxLenght(15), pattern(PatternNumber) ]}>
                                <Input className="border-r" 
                                       placeholder="Ingresa teléfono" 
                                       prefix={<i className="fa fa-phone"></i>} />
                            </Form.Item>
                        </div>

                        <div className="col-12">
                            <h2 className="blue mw-text medium-text">Datos dirección</h2>
                        </div>

                        {/* Input calle */}
                        <div className="col-12 col-md-4">
                            <Form.Item className="mw-text"
                                       name="street"
                                       label="Calle"
                                       hasFeedback
                                       rules={[ maxLenght(150), pattern(PatternText) ]}>
                                <Input className="border-r" 
                                       placeholder="Ingresa calle" 
                                       prefix={<i className="fa fa-address-card"></i>} />
                            </Form.Item>
                        </div>
                        {/* Input numero exterior */}
                        <div className="col-12 col-md-4">
                            <Form.Item className="mw-text"
                                       name="extNum"
                                       label="Número exterior"
                                       hasFeedback
                                       rules={[ maxLenght(7) ]}>
                                <Input className="border-r" 
                                       placeholder="Ingresa número exterior" 
                                       prefix={<i className="fa fa-address-card"></i>} />
                            </Form.Item>
                        </div>
                        {/* Input numero interior */}
                        <div className="col-12 col-md-4">
                            <Form.Item className="mw-text"
                                       name="intNum"
                                       label="Número interior"
                                       hasFeedback
                                       rules={[ maxLenght(7) ]}>
                                <Input className="border-r" 
                                       placeholder="Ingresa número interior" 
                                       prefix={<i className="fa fa-address-card"></i>} />
                            </Form.Item>
                        </div>
                        {/* Input colonia */}
                        <div className="col-12 col-md-4">
                            <Form.Item className="mw-text"
                                       name="neighborhood"
                                       label="Colonia"
                                       hasFeedback
                                       rules={[ maxLenght(150), pattern(PatternText) ]}>
                                <Input className="border-r" 
                                       placeholder="Ingresa colonia" 
                                       prefix={<i className="fa fa-address-card"></i>} />
                            </Form.Item>
                        </div>
                        {/* Input codigo postal */}
                        <div className="col-12 col-md-4">
                            <Form.Item className="mw-text"
                                       name="cp"
                                       label="Código Postal"
                                       hasFeedback
                                       rules={[ maxLenght(5), pattern(PatternNumber) ]}>
                                <Input className="border-r" 
                                       placeholder="Ingresa teléfono" 
                                       prefix={<i className="fa fa-address-card"></i>} />
                            </Form.Item>
                        </div>
                    </div>

                    <div className="row align-items-center flex-column-reverse flex-sm-row mt-4">
                        <div className="col-12 col-sm-4">
                            <Form.Item className="mt-3 mt-sm-5">
                                <Button className="fullWidth border-r"
                                        htmlType="button"
                                        size="large"
                                        onClick={() => history.push('/admin/proveedores')}>
                                    <p className="bw-text blue">
                                        <i className="fa fa-arrow-left mr-3"></i>
                                        Regresar a listado
                                    </p>
                                </Button>
                            </Form.Item>  
                        </div>
                        <div className="col-12 col-sm-4">
                            <Form.Item className="mt-3 mt-sm-5">
                                <Button className="fullWidth border-r blue-back"
                                        type="primary"
                                        htmlType="submit"
                                        size="large">
                                    <p className="bw-text">
                                        <i className="fa fa-check mr-3"></i>
                                        Guardar
                                    </p>
                                </Button>
                            </Form.Item>  
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default withRouter(CreateProvider);