
import React, { useState, Suspense } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useUser } from '../../../hooks/useUser';
import { login } from '../../../services/AuthService';
import { setAccessToken } from '../../../store/AccessTokenStore';
import './Login.css'

const Employment = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { t } = useTranslation();
    const { push } = useHistory();
    const { getUser: doLogin } = useUser();
    const [authError, setAuthError] = useState(null)


    const onSubmit = (data) => {
        setAuthError(null)
        login(data)
        .then((response) => {
            setAccessToken(response.access_token);
            doLogin().then(() => push("/area-personal"));
        })
        .catch((error) => { 
            error.response.status === 401 ? setAuthError("activation") : setAuthError("auth")
        })
    }
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-5 col-sm-6 col-8">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className={(errors.email || authError) && "is-invalid"} type="email" placeholder={t('employ.email.placeholder')} {...register("email", { required: true })}/>
                            {errors.email && <div className="invalid-feedback">{t('login.email.error.required')}</div>}
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>{t('login.pass.title')}</Form.Label>
                            <Form.Control className={(errors.password || authError) && "is-invalid"} type="password" placeholder={t('login.pass.title')}
                            {...register("password", { required: true })}/>

                            {errors.password && <div className="invalid-feedback">{t('login.pass.error.required')}</div>}
                            {authError==="auth" && !errors.password && <div className="invalid-feedback">{t('login.autherror')}</div>}
                            {authError==="activation" && !errors.password && <div className="invalid-feedback">{t('login.email.error.activate')}</div>}
                            <Form.Text className="text-muted my-2 ">
                                <Link to='/recuperar-contraseña' className='link__style '>{t('login.pass.forgot')}</Link>
                            </Form.Text>
                        </Form.Group>
                        
                        <Button variant="info" type="submit">Submit</Button>
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