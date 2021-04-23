import React, { Suspense } from 'react';

import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import './Servicios.css'

const Servicios = () => {
    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col text-center proyect__container">
                <NavLink className='link__style logo__wrapper'to="/servicios/terapias">
                    <img src="" className="m-4 aid__img proyect__container" alt="/servicios/terapias"/>
                    <h1 className="custom__style" >{t('navbar.services.terapeutics.title')}</h1>
                </NavLink>
                </div>
                <div className="col text-center">
                <NavLink className='link__style logo__wrapper'to="/servicios/asistenciales">
                    <img src="" className="m-4 aid__img" alt="/servicios/asistenciales"/>
                    <h1 className="custom__style">{t('navbar.services.assistance.title')}</h1>
                </NavLink>
                </div>
            </div>
            
        </div>
    );
};

export default function App() {
    return (
      <Suspense fallback="loading">
        <Servicios />
      </Suspense>
    );
  }