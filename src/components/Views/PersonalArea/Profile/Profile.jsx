import React, { useContext } from 'react';
import './Profile.css'
import { UserContext } from "../../../../contexts/UserContext";

const Profile = () => {

    const { user } = useContext(UserContext);
    const {firstname, lastname, phonenumber, address, email} = user

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1 className='text-center main__title '>
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620034755/Vitae/iconos/account_vxpriy.png" className='mx-2  ' alt="reports" width='80'/>
                        Datos Personales
                    </h1>
                </div>
            </div>
            <div className="row  justify-content-center">
                
                <div className="col-5 text-center border personal__box color__1">
                    <h1>Mis datos Personales</h1>
                    <div className='my-4 px-5'>
                        <div><p><b>Nombre:</b> {firstname}</p></div>
                        <div><p><b>Apellidos:</b> {lastname}</p></div>
                        <div><p><b>Teléfono de contacto:</b> {phonenumber}</p></div>
                        <div><p><b>Dirección:</b> {address}</p></div>
                        <div><p><b>Email:</b> {email}</p></div>
                    </div>
                </div>
                <div className="col-5 text-center border personal__box color__2">
                    <h1>Datos del usuario</h1>
                    <div className='my-4 px-5'>
                        <div><p><b>Nombre:</b>{user.elder.firstname}</p></div>
                        <div><p><b>Apellidos:</b> {user.elder.lastname}</p></div>
                        <div><p><b>Género:</b> {user.elder.gender}</p></div>
                        <div><p><b>Edad:</b> {user.elder.age}</p></div>
                        <div><p><b>Fecha de nacimiento:</b> {user.elder.dateOfBirth}</p></div>
                        <div><p><b>DNI:</b> {user.elder.dni}</p></div>
                        <div><p><b>Dieta:</b> {user.elder.diet}</p></div>
                    </div>
                </div>

                <p className='px-5 main__title'>Si existe algún error en los datos personales, póngase en contacto con el centro de día para su modificación.</p>
            </div> 
        </div>
    );
};

export default Profile;



