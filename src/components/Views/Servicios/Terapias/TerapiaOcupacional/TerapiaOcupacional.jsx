import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import './TerapiaOcupacional.css'

const TerapiaOcupacional = () => {
    const { t } = useTranslation();
    return (
        <div className="container">
            <div className="row grey__container">
                <h1>{t('therapy.title1')}</h1>
                <p>{t('therapy.paragraph1')}</p>
                <p>{t('therapy.paragraph1')}</p>
                <p>{t('therapy.paragraph1')}</p>
            </div>
            <div className="row">
                <div className="col">
                    <NavLink className='link__style logo__wrapper'to="#">
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619197350/Vitae/imagenes/Servicios/Terapia/actividad-vida-diaria_lyrwez.jpg" className="m-4 aid__img" alt={t('therapy.types.avd.title')}/>
                        <h4 className="custom__style">{t('therapy.types.avd.title')}</h4>
                    </NavLink>
                    <NavLink className='link__style logo__wrapper'to="#">
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619197146/Vitae/imagenes/Servicios/Terapia/estimulacion-sensorial_k50xvp.jpg" className="m-4 aid__img" alt={t('therapy.types.sensorial.title')}/>
                        <h4 className="custom__style">{t('therapy.types.sensorial.title')}</h4>
                    </NavLink>
                </div>
                <div className="col">
                    <NavLink className='link__style logo__wrapper'to="#">
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619197350/Vitae/imagenes/Servicios/Terapia/psicomotricidad_fhu4qa.jpg" className="m-4 aid__img" alt={t('therapy.types.psyco.title')}/>
                        <h4 className="custom__style">{t('therapy.types.psyco.title')}</h4>
                    </NavLink>
                    <NavLink className='link__style logo__wrapper'to="#">
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619197146/Vitae/imagenes/Servicios/Terapia/laborterapia_vc1lrg.jpg" className="m-4 aid__img" alt={t('therapy.types.labor.title')}/>
                        <h4 className="custom__style">{t('therapy.types.labor.title')}</h4>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};


export default function App() {
    return (
      <Suspense fallback="loading">
        <TerapiaOcupacional />
      </Suspense>
    );
  }