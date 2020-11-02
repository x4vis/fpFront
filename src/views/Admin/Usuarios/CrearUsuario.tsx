import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import { maxLenght, minLenght, required, type_email, pattern } from "../../../helpers/ValidationsForm";
import { PatternText, PatternNumber } from "../../../helpers/Patterns";

const CrearUsuario = () => {

    const [form] = Form.useForm();

    const handleSubmit = () => {
        
    }

    return (
        <div className="container-fluid">
            <h1 className="blue bw-text big-text">Crear Usuario</h1>

            <div className="main-card mt-5 p-4">
                <Form form={form}
                    name="crear-usuario"
                    layout="vertical"
                    size="large"
                    onFinish={handleSubmit} >
                    <div className="row">
                    
                        <div className="col-12 mt-4">
                            <h2 className="blue">Datos personales</h2>
                        </div>

                        {/* Seleccion de rol */}
                        <div className="col-12 col-md-4">
                            <Form.Item className="mw-text"
                                        name="fk_rol"
                                        label="Rol / Puesto"
                                        hasFeedback
                                        rules={[required('rol / puesto')]}>
                                <Select placeholder="Seleccione">
                                    <Select.Option value="1">Gerente</Select.Option>
                                    <Select.Option value="2">Supervisor</Select.Option>
                                    <Select.Option value="3">Vendedor</Select.Option>
                                </Select>
                            </Form.Item>
                        </div>
                        {/* Input nombre */}
                        <div className="col-12 col-md-4">
                            <Form.Item className="mw-text"
                                        name="nombre"
                                        label="Nombre"
                                        hasFeedback
                                        rules={[ required('nombre'), maxLenght(150), pattern(PatternText) ]}>
                                <Input className="border-r" 
                                    placeholder="Ingresa nombre"
                                    prefix={<i className="fa fa-user"></i>}
                                    autoComplete="off" />
                            </Form.Item>
                        </div>
                        {/* Input apellido paterno */}
                        <div className="col-12 col-md-4">
                            <Form.Item className="mw-text"
                                    name="apellido_paterno"
                                    label="Apellido paterno"
                                    hasFeedback
                                    rules={[ required('apellido paterno'), maxLenght(100), pattern(PatternText) ]}>
                                <Input className="border-r" 
                                    placeholder="Ingresa apellido paterno"
                                    prefix={<i className="fa fa-user"></i>}
                                    autoComplete="off" />
                            </Form.Item>
                        </div>
                        {/* Input apellido materno */}
                        <div className="col-12 col-md-4">
                            <Form.Item className="mw-text"
                                    name="apellido_materno"
                                    label="Apellido materno"
                                    hasFeedback
                                    rules={[ required('apellido materno'), maxLenght(100), pattern(PatternText) ]}>
                                <Input className="border-r" 
                                    placeholder="Ingresa apellido materno"
                                    prefix={<i className="fa fa-user"></i>}
                                    autoComplete="off" />
                            </Form.Item>
                        </div>

                        {/* Input telefono */}
                        <div className="col-12 col-md-4">
                            <Form.Item className="mw-text"
                                    name="telefono"
                                    label="Teléfono"
                                    hasFeedback
                                    rules={[ maxLenght(15), pattern(PatternNumber) ]}>
                                <Input className="border-r" 
                                    placeholder="Ingresa teléfono" 
                                    prefix={<i className="fa fa-phone"></i>} />
                            </Form.Item>
                        </div>

                        <div className="col-12 mt-4">
                            <h2 className="blue">Datos de dirección</h2>
                        </div>

                        {/* Input calle */}
                        <div className="col-12 col-md-4">
                            <Form.Item className="mw-text"
                                    name="calle"
                                    label="Calle"
                                    hasFeedback
                                    rules={[ maxLenght(150) ]}>
                                <Input className="border-r" 
                                    placeholder="Ingresa calle" 
                                    prefix={<i className="fa fa-address-card"></i>} />
                            </Form.Item>
                        </div>
                        {/* Input numero exterior */}
                        <div className="col-12 col-md-4">
                            <Form.Item className="mw-text"
                                    name="num_ext"
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
                                    name="num_int"
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
                                    name="colonia"
                                    label="Colonia"
                                    hasFeedback
                                    rules={[ maxLenght(150) ]}>
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
                                    rules={[ maxLenght(7), pattern(PatternNumber) ]}>
                                <Input className="border-r" 
                                    placeholder="Ingresa teléfono" 
                                    prefix={<i className="fa fa-address-card"></i>} />
                            </Form.Item>
                        </div>
                        <div className="col-12 mt-4">
                            <h2 className="blue">Datos de cuenta</h2>
                        </div>
                        {/* Input correo */}
                        <div className="col-12 col-md-4">
                            <Form.Item className="mw-text"
                                    name="correo"
                                    label="Correo"
                                    hasFeedback
                                    rules={[ type_email(), required('correo'), maxLenght(100) ]}>
                                <Input className="border-r" 
                                    placeholder="Ingresa correo" 
                                    prefix={<i className="fa fa-at"></i>} />
                            </Form.Item>
                        </div>
                        {/* Input contraseña */}
                        <div className="col-12 col-md-4">
                            <Form.Item className="mw-text"
                                    name="contrasena"
                                    label="Contraseña"
                                    hasFeedback
                                    rules={[minLenght(8), required('contraseña')]}>
                                <Input.Password className="border-r" 
                                                placeholder="Ingresa contraseña" 
                                                prefix={<i className="fa fa-lock"></i>} />
                            </Form.Item>
                        </div>
                    </div>

                    <div className="row align-items-center flex-column-reverse flex-sm-row mt-4">
                        {/* <div className="col-12 col-sm-6 text-center">
                            <Link to="/recuperar-contrasena">¿Olvidaste tu contraseña?</Link>
                        </div> */}
                        <div className="col-12 col-sm-6">
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
 
export default CrearUsuario;