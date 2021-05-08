import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { doRecoverPass } from '../../../services/AuthService';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import { PASSWORD_PATTERN } from '../../../constants/regex'
import './RecoverPass.css'
import { Spinner } from 'react-bootstrap';

const Activate = () => {
    const { push } = useHistory();
    const {token} = useParams()
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: { password: "", password2:"" } });
    const [samePassError, setSamePassError] = useState(false)


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);

    const onSubmit = (data) => {
        setSamePassError(false)
        if(data.password !== data.password2){
            setSamePassError(true)
        }
        else{
            doRecoverPass(token, data)
            .then(res => {
                setShow(true)
                reset({password: "", password2:""} )
                setTimeout(() => push('/iniciar-sesion') , 2000)
            })
            .catch(e => console.log(e))
        }
    }

    return (
        <div className="container">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal__header" closeButton>
                    <Modal.Title>Contraseña Modificada</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row">
                            <p>Su contraseña ha sido modificada con éxito. Redirigiendo. </p>
                        </div>
                        <div className="row">
                            <p>Atentamente, equipo Vitae</p>
                        </div>
                        <div className="row">
                        <Spinner animation="grow" variant="info" />
                        </div>
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="info" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="row justify-content-center">
                <div className="col-4">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control className={(errors.password || samePassError) && "is-invalid"} type="password" placeholder="Introduzca su nueva contraseña" 
                            {...register("password", { 
                                required: true, 
                                validate: {
                                    checkPass: (value) => value.match(PASSWORD_PATTERN) ? true : false,
                                }  
                                })}/>
                            {errors.password && errors.password.type !=="checkPass" && <div className="invalid-feedback">Rellene este campo</div>}
                            {errors.password && errors.password.type ==="checkPass" && <div className="invalid-feedback">La contraseña debe de incluir al menos 1 número, 1 mayúscula, 1 minúscula y 8 caractéres</div>}
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword2">
                            <Form.Control className={(errors.password2 || samePassError)&& "is-invalid"} type="password" placeholder="Repita su contraseña" {...register("password2", { required: true })}/>
                            {errors.password2 && <div className="invalid-feedback">Rellene este campo</div>}
                            {samePassError && !errors.password2 && <div className="invalid-feedback">Las contraseñas no coinciden</div>}
                        </Form.Group>
                        <Button variant="info" type="submit">Enviar</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Activate;