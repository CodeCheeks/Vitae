import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import './Fisioterapia.css'

const Fisioterapia = () => {

    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className="mb-3">{t('physiotherapy.title')}</h1>
                    <p>{t('physiotherapy.paragraph1')}</p>
                    <p>{t('physiotherapy.paragraph2')}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <NavLink className='link__style logo__wrapper'to="/servicios/terapias/fisioterapia">
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619192853/Vitae/imagenes/Servicios/Fisioterapia/reeducation_ni6luy.png" className="m-4 aid__img" alt={t('physiotherapy.types.re-education.title')}/>
                        <h4 className="custom__style">{t('physiotherapy.types.re-education.title')}</h4>
                    </NavLink>
                    <NavLink className='link__style logo__wrapper'to="/servicios/terapias/fisioterapia">
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619192674/Vitae/imagenes/Servicios/Fisioterapia/curso-equilibrio_CROP_vwc2q1.jpg" className="m-4 aid__img" alt={t('physiotherapy.types.neurology.title')}/>
                        <h4 className="custom__style">{t('physiotherapy.types.neurology.title')}</h4>
                    </NavLink>
                </div>
                <div className="col">
                    <NavLink className='link__style logo__wrapper'to="/servicios/terapias/fisioterapia">
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619192499/Vitae/imagenes/Servicios/Fisioterapia/ejercicio-mayores_xlzhd2.jpg" className="m-4 aid__img" alt={t('physiotherapy.types.gymnasia.title')}/>
                        <h4 className="custom__style">{t('physiotherapy.types.gymnasia.title')}</h4>
                    </NavLink>
                    <NavLink className='link__style logo__wrapper'to="/servicios/terapias/fisioterapia">
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619192652/Vitae/imagenes/Servicios/Fisioterapia/curso-geriatria-fisiofocus-2-crop_ry7gb8.jpg" className="m-4 aid__img" alt={t('physiotherapy.types.traumatology.title')}/>
                        <h4 className="custom__style">{t('physiotherapy.types.traumatology.title')}</h4>
                    </NavLink>

                </div>
            </div>
        </div>
    );
};

export default function App() {
    return (
      <Suspense fallback="loading">
        <Fisioterapia />
      </Suspense>
    );
  }