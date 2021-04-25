
import React, { useState, Suspense } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { useUser } from '../../../hooks/useUser';
import { login } from '../../../services/AuthService';
import { setAccessToken } from '../../../store/AccessTokenStore';


const Employment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { t } = useTranslation();
    const { push } = useHistory();
    const { getUser: doLogin } = useUser();


    const onSubmit = (data) => {
        login(data)
        .then((response) => {
          setAccessToken(response.access_token);
          doLogin().then(() => push("/area-personal"));
        })
        .catch(error => {
          console.log("-------- Auth ERROR --------")
          //TODO GENERATE ERROR
        })
    }
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className={errors.email && "is-invalid"} type="email" placeholder={t('employ.email.placeholder')} {...register("email", { required: true })}/>
                            {errors.email && <div className="invalid-feedback">{t('employ.email.error')}</div>}
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className={errors.password && "is-invalid"} type="password" placeholder="Password" 
                            {...register("password", { 
                                required: true,
                                validate: {
                                    checkPass: () => true
                                }
                            })}/>
                            {errors.password && <div className="invalid-feedback">Introduzca la contraseña</div>}
                            {errors.password && errors.password.type ==="checkPass" && <div className="invalid-feedback">Contraseña o correo incorrectos</div>}
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
       
    );
};



export default function App() {
    return (
        <Suspense fallback="loading">
        <Employment />
      </Suspense>
    );
}