import React, { useContext } from 'react';
import './Profile.css'
import { UserContext } from "../../../../contexts/UserContext";

const Profile = () => {

    const { user } = useContext(UserContext);
    const {firstname, lastname, phonenumber, address, email} = user

    return (
        <div className="container">
            <div className="row">
                <div className="col-5 border personal__box color__1">
                    <h1>Mis datos Personales</h1>
                    <div className='my-4 mx-3'>
                        <div><p>Nombre: {firstname}</p></div>
                        <div><p>Apellidos: {lastname}</p></div>
                        <div><p>Teléfono de contacto: {phonenumber}</p></div>
                        <div><p>Dirección: {address}</p></div>
                        <div><p>Email: {email}</p></div>
                    </div>
                </div>
                <div className="col-5 border personal__box color__2">
                    <h1>Datos del usuario</h1>
                    <div className='my-4 mx-3'>
                        <div><p>Nombre: {user.elder.firstname}</p></div>
                        <div><p>Apellidos: {user.elder.lastname}</p></div>
                        <div><p>Género: {user.elder.gender}</p></div>
                        <div><p>Edad: {user.elder.age}</p></div>
                        <div><p>Fecha de nacimiento: {user.elder.dateOfBirth}</p></div>
                        <div><p>DNI: {user.elder.dni}</p></div>
                        <div><p>Dieta: {user.elder.diet}</p></div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Profile;



