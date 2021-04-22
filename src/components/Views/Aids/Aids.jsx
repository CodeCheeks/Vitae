import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import './Aids.css'

const Aids = () => {

    const { t } = useTranslation();
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col text-center proyect__container">
                <NavLink className='link__style logo__wrapper'to="/ayudas/cheque-vitae">
                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619111462/Vitae/imagenes/ayudas/cheque-vitae_cxe9q1.jpg" className="m-4 aid__img proyect__container" alt="aid-vitae"/>
                    <h1 className="custom__style" >{t('navbar.aids.vitae')}</h1>
                </NavLink>
                </div>
                <div className="col text-center">
                <NavLink className='link__style logo__wrapper'to="/ayudas/cheque-servicio">
                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1618920455/Vitae/imagenes/ayudas/cheque-dependencia_fhks4g.png" className="m-4 aid__img" alt="aid-dependence"/>
                    <h1 className="custom__style">{t('navbar.aids.dependence')}</h1>
                </NavLink>
                </div>
            </div>
            
        </div>
    );
};



export default function App() {
    return (
      <Suspense fallback="loading">
        <Aids />
      </Suspense>
    );
  }