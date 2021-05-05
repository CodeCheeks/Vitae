import React, { Suspense } from 'react';
import { NavLink } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Animacion.css'

const Animacion = () => {
    const { t } = useTranslation();
    return (
        <div className="container">
            <div className="row justify-content-center grey__container">
                <div className="row mb-5">
                    <div className="col-12">
                        <h1>{t('animation.title1')}</h1>
                    </div>
                </div>
                <div className="row mx-5">
                    <div className="col">
                        <p>{t('animation.paragraph1')}</p>
                        <p>{t('animation.paragraph2')}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <NavLink className='link__style logo__wrapper'to="#">
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620238538/Vitae/imagenes/Servicios/Animaci%C3%B3n/estimulacion-con-animales_keqsyp.jpg" className="m-4 aid__img" alt={t('therapy.types.avd.title')}/>
                            <h4 className="custom__style text-center">{t('animation.types.title1')}</h4>
                        </NavLink>
                        <NavLink className='link__style logo__wrapper'to="#">
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620238523/Vitae/imagenes/Servicios/Animaci%C3%B3n/arte-terapia_rytqdm.jpg" className="m-4 aid__img" alt={t('therapy.types.sensorial.title')}/>
                            <h4 className="custom__style text-center">{t('animation.types.title2')}</h4>
                        </NavLink>
                    </div>
                    <div className="col">
                        <NavLink className='link__style logo__wrapper'to="#">
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620238555/Vitae/imagenes/Servicios/Animaci%C3%B3n/excuriones-culturales_i5dekm.jpg" className="m-4 aid__img" alt={t('therapy.types.psyco.title')}/>
                            <h4 className="custom__style text-center">{t('animation.types.title3')}</h4>
                        </NavLink>
                        <NavLink className='link__style logo__wrapper'to="#">
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620238572/Vitae/imagenes/Servicios/Animaci%C3%B3n/relajacion_dawke1.jpg" className="m-4 aid__img" alt={t('therapy.types.labor.title')}/>
                            <h4 className="custom__style text-center">{t('animation.types.title4')}</h4>
                        </NavLink>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default function App() {
    return (
        <Suspense fallback="loading">
        <Animacion />
      </Suspense>
    );
}

