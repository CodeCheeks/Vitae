import './Messages.css'
import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from "../../../../contexts/UserContext"; 
import { Spinner, Table, Modal, Button } from 'react-bootstrap';
import { userReceivedMessages, userSentMessages } from "../../../../services/messageService";


const Messages = () => {

    const { user } = useContext(UserContext);

    const [messages, setMessages] = useState(null);
    const [sentmessages, setSentMessages] = useState(null);
    const [messageBody, setMessageBody] = useState(null);
    const [messageTitle, setMessageTitle] = useState(null);

    //modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (e) => {
        setShow(true)
        setMessageBody(e.target.name)
        setMessageTitle(e.target.title)
    
    };

    useEffect(() => {
        userReceivedMessages(user.id)
        .then(res => setMessages(res))
        .catch(error => console.log(error))
    }, [user.id]);

    useEffect(() => {
        userSentMessages(user.id)
        .then(res => setSentMessages(res))
        .catch(error => console.log(error))
    }, [user.id]);

    const getMessages =() => {
        let messagesRow = []
        messages.sort(function(a,b){return new Date(b.createdAt) - new Date(a.createdAt)}).forEach(message => {
            
            messagesRow.push(<tr key={message.id}>
                <td>{message.sender.firstname}</td>
                <td>{message.title}</td>
                <td>{message.createdAt.split('T').join(' a las ').split('.',1)}</td>
                <td><img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978131/Vitae/iconos/mesasge_cpbni4.png" name={message.message} title={message.title} alt="delete" className="mx-3 custom__hover" width="20px" onClick={handleShow}/></td>
    
            </tr>)
            
        })
        return messagesRow
    }

    const getSentMessages =() => {
        let sentMessagesRow = []
        sentmessages.sort(function(a,b){return new Date(b.createdAt) - new Date(a.createdAt)}).forEach(message => {
            
            sentMessagesRow.push(<tr key={message.id}>
                <td>{message.receiver.firstname}, {message.receiver.occupation}</td>
                <td>{message.title}</td>
                <td>{message.createdAt.split('T').join(' a las ').split('.',1)}</td>
                <td><img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978131/Vitae/iconos/mesasge_cpbni4.png"  name={message.message} title={message.title} alt="delete" className="mx-3 custom__hover" width="20px" onClick={handleShow}/></td>
            </tr>)
            
        })
        return sentMessagesRow
    }


    return (
        <div className="container Messages">
             <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{messageTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{messageBody}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
           <div className="row">
                <div className="col-12">
                    <h1 className='text-center main__title'>
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620120426/Vitae/iconos/see-messsage_s7zqrj.svg" className='mx-2  ' alt="reports" width='80'/>
                        Mensajes Recibidos
                    </h1>
                </div>
            </div>
            <div className="row my-5">
                
            { messages ? 
            <div className='container '>
                <div className="row">
                    <Table size="sm" bordered hover >
                        <thead className="custom__style">
                            <tr>
                                <th>Enviado por:</th>
                                <th className='mw-100'>Título</th>
                                <th className='mw-100'>Fecha</th>
                                <th>Ver</th>
                            </tr>
                        </thead>
                        <tbody>
                        {getMessages()}
                        </tbody>
                    </Table>
                </div>
                <div className="row text-center">
                    <div className="col-12">
                        {getMessages().length === 0 && <h6>Todavía no hay mensajes</h6>}
                        
                    </div>
                </div>
            </div>
                : (<Spinner className="m-5 text-center" animation="border" role="status" variant="info">
                        <span className="sr-only">Loading...</span>
                    </Spinner>)
                }
            </div>
            <div className="row my-5">
                <div className="col">
                    <h1 className='main__title text-center'>
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620034723/Vitae/iconos/charla_ufydrz.png" className='mx-2  ' alt="reports" width='80'/>
                            Mensajes Enviados
                    </h1>
                </div>
            { sentmessages ? 
            <div className='container '>
                <div className="row">
                    <Table size="sm" bordered hover >
                        <thead className="custom__style">
                            <tr>
                                <th>Enviado a:</th>
                                <th>Título</th>
                                <th>Fecha</th>
                                <th>Ver</th>
                            </tr>
                        </thead>
                        <tbody>
                        {getSentMessages()}
                        </tbody>
                    </Table>
                </div>
                <div className="row text-center">
                    <div className="col-12">
                        {getSentMessages().length === 0 && <h6>Todavía no hay mensajes</h6>}
                    </div>
                </div>
            </div>
                : (<Spinner className="m-5" animation="border" role="status" variant="info">
                        <span className="sr-only">Loading...</span>
                    </Spinner>)
                }
            </div>
        </div>
    );
};

export default Messages;



