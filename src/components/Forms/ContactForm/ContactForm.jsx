import React from 'react';
import { Form,Row,Col,Button } from 'react-bootstrap'
import './ContactForm.css'
const ContactForm = () => {
    return (
        <div className='ContactForm container'>
           <Form>
               <h2>Contacta. Te llamamos</h2>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Nombre
                </Form.Label>
                <Col lg={10} md={12}>
                <Form.Control type="email" placeholder="Nombre" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Teléfono
                </Form.Label>
                <Col lg={10}>
                <Form.Control type="String" placeholder="Teléfono" />
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                <Form.Label column sm={2}>Horario</Form.Label>
                <Col lg={10}>
                    <Form.Control as="select">
                    <option>Mañanas 09-14h</option>
                    <option>Tarde 15-20h</option>
                    <option>A cualquier hora</option>
                    <option>En la próxima hora</option>
                    </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalCheck">
                <Col sm={{ span: 10, offset: 2 }}>
                <Form.Check label="Acepto las condiciones de uso y política de privacidad" />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Te llamamos</Button>
                </Col>
            </Form.Group>
            </Form> 
        </div>
    );
};

export default ContactForm;