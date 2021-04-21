
import React, { Suspense } from 'react';
import { Col, Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Employment.css'


import { useTranslation } from 'react-i18next';

const Employment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { t } = useTranslation();



    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="container">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Row>
                    <Form.Group as={Col} controlId="firstname">
                        <Form.Label>Firstname</Form.Label>
                        <Form.Control type="string" placeholder="First name" {...register("firstName", { required: true })} />
                        {errors.firstName && "First name is required"}
                    </Form.Group>
                    <Form.Group as={Col} controlId="lastname">
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control type="string" placeholder="Last name" {...register("lastName", { required: true })} />
                        {errors.firstName && "Last name is required"}
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" {...register("email")}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control type="string" placeholder="Teléfono" {...register("phonenumber")}/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="street">
                        <Form.Label>Street</Form.Label>
                        <Form.Control type="string" placeholder="Street" {...register("street")}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="string" placeholder="city" {...register("city")}/>
                    </Form.Group>
                    <Form.Group as={Col} controlId="zip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="string" placeholder="zip" {...register("zip")}/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                <Form.Group as={Col} controlId="vacancy">
                    <Form.Label>Vacancy</Form.Label>
                    <Form.Control as="select" {...register("vacancy")}>
                        <option></option>
                        <option>{t('navbar.services.terapeutics.physiotherapy')}</option>
                        <option>{t('navbar.services.terapeutics.psychology')}</option>
                        <option>{t('navbar.services.terapeutics.ot')}</option>
                        <option>{t('navbar.services.terapeutics.recreation')}</option>
                        <option>{t('navbar.services.assistance.medicine')}</option>
                        <option>{t('navbar.services.assistance.home')}</option>
                        <option>{t('navbar.services.assistance.transport')}</option>
                        <option>{t('navbar.services.assistance.catering')}</option>
                    </Form.Control>
                </Form.Group>


                <Form.Group as={Col} controlId="cv">
                    <Form.File id="cv" label="Curriculum Vitae" {...register("cv")}/>
                </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Label>Comentarios</Form.Label>
                    <Form.Control as="textarea" rows={3} {...register("comments")}/>
                </Form.Row>


                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Acepto los términos y condiciones" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            
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