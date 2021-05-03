import './Messages.css'
import React, { useEffect, useContext, useState } from 'react';
import { UserContext } from "../../../../contexts/UserContext"; 
import { Spinner, Table } from 'react-bootstrap';
import { userReceivedMessages, userSentMessages } from "../../../../services/messageService";

const Messages = () => {

    const { user } = useContext(UserContext);
    const {elder} = user

    const [messages, setMessages] = useState(null);
    const [sentmessages, setSentMessages] = useState(null);

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
        messages.forEach(message => {
            
            messagesRow.push(<tr key={message.id}>
                <td>{message.title}</td>
                <td>{message.message}</td>
                <td>{message.sender.firstname}</td>
    
            </tr>)
            
        })
        return messagesRow
    }

    const getSentMessages =() => {
        let sentMessagesRow = []
        sentmessages.forEach(message => {
            
            sentMessagesRow.push(<tr key={message.id}>
                <td>{message.receiver.firstname}</td>
                <td>{message.title}</td>
                <td>{message.message}</td>
                <td>x</td>
    
            </tr>)
            
        })
        return sentMessagesRow
    }


    return (
        <div className="container Messages">
           <div className="row">
                <div className="col-12">
                    <h1 className='text-center main__title'>
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620034723/Vitae/iconos/charla_ufydrz.png" className='mx-2  ' alt="reports" width='80'/>
                        Mensajes Recibidos
                    </h1>
                </div>
            </div>
            <div className="row my-5">
                
            { messages ? 
                <Table size="sm" bordered hover >
                    <thead className="custom__style">
                        <tr>
                            <th>Enviado por:</th>
                            <th>Título</th>
                            <th>Fecha</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                    {getMessages()}
                    </tbody>
                </Table>
                : (<Spinner className="m-5" animation="border" role="status" variant="info">
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
                <Table size="sm" bordered hover >
                    <thead className="custom__style">
                        <tr>
                    
                            <th>Enviado a:</th>
                            <th>Título</th>
                            <th>Mensaje</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                    {getSentMessages()}
                    </tbody>
                </Table>
                : (<Spinner className="m-5" animation="border" role="status" variant="info">
                        <span className="sr-only">Loading...</span>
                    </Spinner>)
                }
            </div>
        </div>
    );
};

export default Messages;



