import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Form,Row,Col,Button } from 'react-bootstrap'
import './ContactForm.css'


const ContactForm = () => {
    const { t } = useTranslation();
    return (
        <div className='ContactForm d-flex justify-content-center '>
           <Form>
               <div className='mb-4 '>
               <h2>{t('home.section1.contactform.title')}</h2>
               </div>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                {t('home.section1.contactform.name')}
                </Form.Label>
                <Col lg={10} md={12} className="pl-5">
                <Form.Control type="String" placeholder="Nombre"  />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                {t('home.section1.contactform.phone')}
                </Form.Label>
                <Col lg={10} className="pl-5">
                <Form.Control type="String" placeholder={t('home.section1.contactform.phone')} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                <Form.Label column sm={2}>{t('home.section1.contactform.timetable')}</Form.Label>
                <Col lg={10} className="pl-5">
                    <Form.Control as="select">
                    <option>{t('home.section1.contactform.option1')}</option>
                    <option>{t('home.section1.contactform.option2')}</option>
                    <option>{t('home.section1.contactform.option3')}</option>
                    <option>{t('home.section1.contactform.option4')}</option>
                    </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalCheck">
                <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label={t('home.section1.contactform.checkbox')} />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">{t('home.section1.contactform.button')}</Button>
                </Col>
            </Form.Group>
            </Form> 
        </div>
    );
};

export default function App() {
    return (
      <Suspense fallback="loading">
        <ContactForm />
      </Suspense>
    );
  } ;