import React from 'react';
import './PersonalArea.css'

import { NavLink } from 'react-router-dom';

const PersonalArea = () => {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6 col-md-4 text-center my-3">
                <NavLink className='link__style logo__wrapper'to="/area-personal/perfil">
                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620034755/Vitae/iconos/account_vxpriy.png" className="figure-img img-fluid rounded icon__img" width="500" alt="A generic square placeholder."/>
                    <div>Mi cuenta</div>
                </NavLink>
                </div>
                <div className="col-6 col-md-4 text-center my-3">
                <NavLink className='link__style logo__wrapper'to="/area-personal/mensajes">
                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620034723/Vitae/iconos/charla_ufydrz.png" className="figure-img img-fluid rounded icon__img"  heigth='720' alt="A generic square placeholder."/>
                    <div>Mis mensajes</div>
                </NavLink>
                </div>
                <div className="col-6 col-md-4 text-center my-3">
                <NavLink className='link__style logo__wrapper'to="/area-personal/profesionales">
                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620034662/Vitae/iconos/consultation_twjwzx.png" className="figure-img img-fluid rounded icon__img" width="1280" alt="A generic square placeholder."/>
                    <div>Profesionales</div>
                </NavLink>
                </div>
                <div className="col-6 col-md-4 text-center my-3">
                <NavLink className='link__style logo__wrapper'to="/area-personal/actividades">
                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620034455/Vitae/iconos/calendario_n7aojk.png" className="figure-img img-fluid rounded icon__img" width="1280" alt="A generic square placeholder."/>
                    <div>Actividades</div>
                </NavLink>
                </div>
                <div className="col-6 col-md-4 text-center my-3">
                <NavLink className='link__style logo__wrapper'to="/area-personal/informes">
                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620034340/Vitae/iconos/document_f08uxb.png" className="figure-img img-fluid rounded icon__img" width="1280" alt="A generic square placeholder."/>
                    <div>Informes</div>
                </NavLink>
                </div>
                <div className="col-6 col-md-4 text-center my-3">
                <NavLink className='link__style logo__wrapper'to="/area-personal/galeria">
                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620039011/Vitae/iconos/gallery_zc9kal.png" className="figure-img img-fluid rounded icon__img" width="1280" alt="A generic square placeholder."/>
                    <div>Galería</div>
                </NavLink>
                </div>
            </div>
        </div>
    );

    
};

export default PersonalArea;



