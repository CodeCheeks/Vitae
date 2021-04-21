
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
                        <Form.Control  className={errors.firstName && "is-invalid"} type="string" placeholder="First name" {...register("firstName", { required: true })} />
                        {errors.firstName && <div className="invalid-feedback">First name is required</div>}
                    </Form.Group>
                    <Form.Group as={Col} controlId="lastname">
                        <Form.Label>Lastname</Form.Label>
                        <Form.Control className={errors.lastName && "is-invalid"} type="string" placeholder="Last name" {...register("lastName", { required: true })} />
                        {errors.lastName && <div className="invalid-feedback">Last name is required</div>}
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className={errors.email && "is-invalid"} type="email" placeholder="Enter email" {...register("email", { required: true })}/>
                        {errors.email && <div className="invalid-feedback">Email is required</div>}
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control className={errors.phoneNumber && "is-invalid"} 
                            type="string" 
                            placeholder="Teléfono" 
                            {...register("phoneNumber", {
                                required: true ,
                                validate: {
                                  numberLength: (value) => value.length === 9,
                                }
                              })}/>
                        {errors.phoneNumber && errors.phoneNumber.type !=="numberLength" && <div className="invalid-feedback">Phone number is required</div>}
                        {errors.phoneNumber && errors.phoneNumber.type ==="numberLength" && <div className="invalid-feedback">Introduce un número de teléfono válido</div>}
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="street">
                        <Form.Label>Street</Form.Label>
                        <Form.Control className={errors.street && "is-invalid"} type="string" placeholder="Street" {...register("street", { required: true })}/>
                        {errors.street && <div className="invalid-feedback">Street is required</div>}
                    </Form.Group>

                    <Form.Group as={Col} controlId="city">
                        <Form.Label>City</Form.Label>
                        <Form.Control className={errors.city && "is-invalid"} type="string" placeholder="city" {...register("city", { required: true })}/>
                        {errors.city && <div className="invalid-feedback">City is required</div>}
                    </Form.Group>
                    <Form.Group as={Col} controlId="zip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control className={errors.zip && "is-invalid"} type="string" placeholder="zip" {...register("zip", { required: true })}/>
                        {errors.zip && <div className="invalid-feedback">Zip code is required</div>}
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                <Form.Group as={Col} controlId="vacancy">
                    <Form.Label>Vacancy</Form.Label>
                    <Form.Control className={errors.vacancy && "is-invalid"} as="select" {...register("vacancy", { required: true })}>
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
                    {errors.vacancy && <div className="invalid-feedback">Vacancy is required</div>}
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
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        />
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