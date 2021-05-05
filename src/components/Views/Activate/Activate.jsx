import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { activate, getToken } from '../../../services/AuthService';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';

const Activate = () => {
    const {token} = useParams()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [samePassError, setSamePassError] = useState(false)
    const { push } = useHistory();

    const onSubmit = (data) => {
        setSamePassError(false)
        if(data.password !== data.password2){
            setSamePassError(true)
            console.log("Las contraseñas no coinciden")
        }
        else{
            activate(token, data)
            .then(res => {
                console.log("activación completada, redirigiendo")
                push("/iniciar-sesion")
            })
            .catch(e => console.log(e))
        }
    }

    /* useEffect(() => {
        getToken(token)
        .then(res => {
            console.log(token)
        })
        .catch(e => console.log(e))
    }, []); */
    
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Control className={(errors.password || samePassError) && "is-invalid"} type="password" placeholder="Introduzca su nueva contraseña" {...register("password", { required: true })}/>
                            {errors.password && <div className="invalid-feedback">Rellene este campo</div>}
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword2">
                            <Form.Control className={(errors.password2 || samePassError)&& "is-invalid"} type="password" placeholder="Repita su contraseña" {...register("password2", { required: true })}/>
                            {errors.password2 && <div className="invalid-feedback">Rellene este campo</div>}
                            {samePassError && !errors.password2 && <div className="invalid-feedback">Las contraseñas no coinciden</div>}
                        </Form.Group>
                        <Button variant="primary" type="submit">Activar</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Activate;