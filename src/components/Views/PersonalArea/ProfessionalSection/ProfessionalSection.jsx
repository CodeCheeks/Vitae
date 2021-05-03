import './ProfessionalSection.css'
import React, { useContext, useEffect, useState } from 'react';
import { Button, Form, Modal, Spinner, Table } from 'react-bootstrap';
import { getProfessionalsInfo } from "../../../../services/ProfessionalService";
import { useForm } from "react-hook-form";
import { addMessage } from '../../../../services/messageService';
import { UserContext } from "../../../../contexts/UserContext";


const ProfessionalSection = (props) => {

    const { user } = useContext(UserContext);
    const [professionals, setProfessionals] = useState(null);

    useEffect(() => {
        getProfessionalsInfo()
        .then(res => setProfessionals(res))
        .catch(error => console.log(error))
    }, []);
   
    const [professionalId, setProfessionalId] = useState(null);
    const [professionalName, setProfessionalName] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    const handleShow = (e) => {
        setShow(true)
        setProfessionalId(e.target.id)
        setProfessionalName(e.target.name)
    };


    const onSubmit = (data) => {
        Object.assign(data, {
            receiver: professionalId,
            sender: user.id
        });

        setShow(false)
        addMessage(professionalId, data)
        .then(mes => console.log("mensaje enviado"))
        .catch(e => console.log(e))
    }


    

    const getProfessionals =() => {
        let professionalsRow = []
        professionals.forEach(prof => {
            
            professionalsRow.push(<tr key={prof.id}>
                <td>{prof.firstname} {prof.lastname}</td>
                <td>{prof.occupation}</td>
                <td>{prof.email}</td>
                <td><img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978131/Vitae/iconos/mesasge_cpbni4.png" id={prof.id} name={`${prof.firstname} ${prof.lastname}`} alt="delete" className="mx-3 custom__hover" width="20px" onClick={handleShow}/></td>
            </tr>)
            
        })
        return professionalsRow
    }

    return (
        
        <div className="container ProfessionalsList">
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Enviar mensaje</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                    
                        <div className="row mt-5">
                            <div className="col mx-3">
                                    <Form.Control type="string" placeholder= {`Destinatario: ${professionalName}`} disabled/>
                                    <Form.Group controlId="formBasictitle">
                                    <Form.Control className={(errors.title) && "is-invalid"} type="title" placeholder="Título" {...register("title", { required: true })}/>
                                    {errors.title && <div className="invalid-feedback">Introduzca Título</div>}
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col mx-3">
                                <Form.Group controlId="formBasicDescription">
                                    <Form.Control as="textarea" className={(errors.message && "is-invalid")} style={{height: "250px"}} type="message" placeholder="message" 
                                    {...register("message", { required: true })}/>
                                    {errors.message && <div className="invalid-feedback">Introduzca el mensaje</div>}
                                </Form.Group>
                            </div>
                        </div>
                        <div className="row justify-content-end">
                            <Button className="mr-2" variant="info" onClick={handleClose}>Close</Button>
                            <Button className="mr-5" variant="danger" type="submit">Enviar</Button>

                        </div>
                    </Form>
            
                </Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>
            { professionals ? 
            (<Table size="sm" bordered hover >
                <thead className="custom__style">
                    <tr>
                        <th>Nombre</th>
                        <th>Departamento</th>
                        <th>Email</th>
                        <th>Contactar</th>
                    </tr>
                </thead>
                <tbody>
                {getProfessionals()}
                </tbody>
            </Table>)
            :
            (<Spinner className="m-5" animation="border" role="status" variant="info">
                <span className="sr-only">Loading...</span>
            </Spinner>)}
        </div>
    );
};

export default ProfessionalSection;

