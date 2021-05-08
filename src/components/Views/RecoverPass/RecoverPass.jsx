import React, { Suspense, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { recoverPass } from '../../../services/AuthService';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import { Spinner } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './RecoverPass.css'


const RecoverPass = () => {

    const { push } = useHistory();
    const { t } = useTranslation();
    const [authError, setAuthError] = useState(null)
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: { email: "" } });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    //const handleShow = () => setShow(true);

    const onSubmit = (data) => {
        setAuthError(false)
        recoverPass(data)
        .then(res => {
            setShow(true)
            reset({email:""})
            setTimeout(() => push('/iniciar-sesion') , 3000)
        })
        .catch(error => {
            error.response.status === 404 ? setAuthError(true) : setAuthError(false)
        })
    }

    return (
        <div className="container">
            <Modal  show={show} onHide={handleClose}>
                <Modal.Header className="modal__header" closeButton>
                    <Modal.Title>Cambio de contraseña</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row">
                            <p>Para proseguir con el cambio de contraseña revise su correo electrónico.</p>
                        </div>
                        <div className="row">
                            <p>Atentamente, equipo Vitae</p>
                        </div>
                        <div className="row">
                            <p>Redirigiendo</p>
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
                <div className="col-8 col-sm-6 col-md-5 col-lg-4">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control className={(errors.email || authError)  && "is-invalid"} type="email" placeholder={t('login.email.error.required')} {...register("email", { required: true })}/>
                            {errors.email && <div className="invalid-feedback">{t('login.email.error.required')}</div>}
                            {authError && !errors.email && <div className="invalid-feedback">Email incorrecto</div>}
                        </Form.Group>
                        <Button variant="info" type="submit">{t('login.submit')}</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};


export default function App() {
    return (
        <Suspense fallback="loading">
        <RecoverPass />
      </Suspense>
    );
}



