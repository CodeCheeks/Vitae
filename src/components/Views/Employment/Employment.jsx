
import React, { Suspense, useState } from 'react';
import { Col, Form, Button, Modal } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Employment.css'
import '../RecoverPass/RecoverPass.css'
import { employ } from '../../../services/UserService';
import { useTranslation } from 'react-i18next';



    


const Employment = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: {  firstName:"", lastName:"", email:"", phoneNumber:"", street:"", city:"", zip:"", vacancy:"", cv:"", comments:"" } });
    const { t } = useTranslation();
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);


    const onSubmit = (data) => {
        data.cv = data.cv[0]
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
          });
        
        employ(formData).then((response) => {
            setShow(true)
            reset({firstName:"", lastName:"", email:"", phoneNumber:"", street:"", city:"", zip:"", vacancy:"", cv:"", comments:""})
        });
    }
    
    return (
        <div className="container grey__container">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="modal__header" closeButton>
                    <Modal.Title>Candidatura enviada</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row">
                            <p>Su candidatura ha sido enviada con éxito. Nos pondremos en contacto con usted para próximas ampliaciones de plantilla</p>
                        </div>
                        <div className="row">
                            <p>Atentamente, equipo Vitae</p>
                        </div>
                    </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="info" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="row  justify-content-center">
                <div className="col my-2">
                    <h1 className="col mb-4">{t('employ.intro.title')}</h1>
                    <h4 className="col mb-4">{t('employ.intro.phrase')}</h4>
                    <p className="col mb-3">{t('employ.intro.paragraph1')}</p>
                    <p className="col mb-5">{t('employ.intro.paragraph2')}</p>
                </div>
            </div>

            <h1 className="col mb-4 text-center">{t('employ.intro.title2')}</h1>
            <div className="row  justify-content-center mt-5">
                
                <div className="col-lg-8 mt-5">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="firstname">
                            <Form.Label>{t('employ.firstName.tag')}</Form.Label>
                            <Form.Control  className={errors.firstName && "is-invalid"} type="string" placeholder={t('employ.firstName.placeholder')} {...register("firstName", { required: true })} />
                            {errors.firstName && <div className="invalid-feedback">{t('employ.firstName.error')}</div>}
                        </Form.Group>
                        <Form.Group as={Col} controlId="lastname">
                            <Form.Label>{t('employ.lastName.tag')}</Form.Label>
                            <Form.Control className={errors.lastName && "is-invalid"} type="string" placeholder={t('employ.lastName.placeholder')} {...register("lastName", { required: true })} />
                            {errors.lastName && <div className="invalid-feedback">{t('employ.lastName.error')}</div>}
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="email">
                            <Form.Label>{t('employ.email.tag')}</Form.Label>
                            <Form.Control className={errors.email && "is-invalid"} type="email" placeholder={t('employ.email.placeholder')} {...register("email", { required: true })}/>
                            {errors.email && <div className="invalid-feedback">{t('employ.email.error')}</div>}
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>{t('employ.phoneNumber.tag')}</Form.Label>
                            <Form.Control className={errors.phoneNumber && "is-invalid"} 
                                type="string" 
                                placeholder={t('employ.phoneNumber.placeholder')}
                                {...register("phoneNumber", {
                                    required: true ,
                                    validate: {
                                        numberLength: (value) => value.length === 9,
                                    }
                                })}/>
                            {errors.phoneNumber && errors.phoneNumber.type !=="numberLength" && <div className="invalid-feedback">{t('employ.phoneNumber.error')}</div>}
                            {errors.phoneNumber && errors.phoneNumber.type ==="numberLength" && <div className="invalid-feedback">{t('employ.phoneNumber.error2')}</div>}
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="street">
                            <Form.Label>{t('employ.street.tag')}</Form.Label>
                            <Form.Control className={errors.street && "is-invalid"} type="string" placeholder={t('employ.street.placeholder')} {...register("street", { required: true })}/>
                            {errors.street && <div className="invalid-feedback">{t('employ.street.error')}</div>}
                        </Form.Group>

                        <Form.Group as={Col} controlId="city">
                            <Form.Label>{t('employ.city.tag')}</Form.Label>
                            <Form.Control className={errors.city && "is-invalid"} type="string" placeholder={t('employ.city.placeholder')} {...register("city", { required: true })}/>
                            {errors.city && <div className="invalid-feedback">{t('employ.city.error')}</div>}
                        </Form.Group>
                        <Form.Group as={Col} controlId="zip">
                            <Form.Label>{t('employ.zip.tag')}</Form.Label>
                            <Form.Control className={errors.zip && "is-invalid"} type="string" placeholder={t('employ.zip.placeholder')} {...register("zip", { required: true })}/>
                            {errors.zip && <div className="invalid-feedback">{t('employ.zip.error')}</div>}
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                    <Form.Group as={Col} controlId="vacancy">
                        <Form.Label>{t('employ.vacancy.tag')}</Form.Label>
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
                        {errors.vacancy && <div className="invalid-feedback">{t('employ.vacancy.error')}</div>}
                    </Form.Group>


                    <Form.Group as={Col} controlId="cv">
                        <Form.File id="cv" label="Curriculum Vitae" {...register("cv", { required: true })}/>
                        {errors.vacancy && <div className="invalid-feedback">{t('employ.cv.error')}</div>}
                    </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Label>{t('employ.comments.tag')}</Form.Label>
                        <Form.Control as="textarea" rows={3} {...register("comments")}/>
                    </Form.Row>


                    <Form.Group id="formGridCheckbox">
                        <Form.Check
                            required
                            label={t('employ.checkBox.tag')}
                            feedback={t('employ.checkBox.error')}
                            />
                    </Form.Group>

                    <Button variant="info" type="submit">
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