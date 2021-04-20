import React from 'react';
import './PersonalArea.css'

import { NavLink } from 'react-router-dom';

const PersonalArea = () => {

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6 col-md-4 text-center my-3">
                <NavLink className='link__style logo__wrapper'to="/area-personal/perfil">
                    <img src="http://via.placeholder.com/1280x720" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                    <div>Mi cuenta</div>
                </NavLink>
                </div>
                <div className="col-6 col-md-4 text-center my-3">
                <NavLink className='link__style logo__wrapper'to="/area-personal/familiar">
                    <img src="http://via.placeholder.com/1280x720" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                    <div>Familiar</div>
                </NavLink>
                </div>
                <div className="col-6 col-md-4 text-center my-3">
                <NavLink className='link__style logo__wrapper'to="/area-personal/profesionales">
                    <img src="http://via.placeholder.com/1280x720" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                    <div>Profesionales</div>
                </NavLink>
                </div>
                <div className="col-6 col-md-4 text-center my-3">
                <NavLink className='link__style logo__wrapper'to="/area-personal/actividades">
                    <img src="http://via.placeholder.com/1280x720" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                    <div>Actividades</div>
                </NavLink>
                </div>
                <div className="col-6 col-md-4 text-center my-3">
                <NavLink className='link__style logo__wrapper'to="/area-personal/informes">
                    <img src="http://via.placeholder.com/1280x720" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                    <div>Informes</div>
                </NavLink>
                </div>
                <div className="col-6 col-md-4 text-center my-3">
                <NavLink className='link__style logo__wrapper'to="/area-personal/horario">
                    <img src="http://via.placeholder.com/1280x720" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                    <div>Horario</div>
                </NavLink>
                </div>
            </div>
        </div>
    );
};

export default PersonalArea;



