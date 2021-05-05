import React, { Suspense } from 'react';
import { NavLink } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './Animacion.css'

const Animacion = () => {
    const { t } = useTranslation();
    return (
        <div className="container">
            <div className="row grey__container">
                <div className="row">
                    <div className="col-12">
                        <h1>¿Qué son y para qué sirven las terapias lúdicas?</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Son actividades recreativas que los mayores realizan durante su tiempo de ocio. Favorecen su integración y participación en actividades tanto dentro como fuera de su entorno, y les ayuda a mejorar las habilidades sociales, autoestima y autonomía.</p>
                        <p>En algunas de las actividades lúdicas se utiliza el juego como herramienta terapéutica. Conociendo los intereses de los mayores, se crean talleres enfocados a ellos, trabajando con ello diferentes aspectos cognitivos, funcionales y sociales. </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col">
                        <NavLink className='link__style logo__wrapper'to="#">
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620238538/Vitae/imagenes/Servicios/Animaci%C3%B3n/estimulacion-con-animales_keqsyp.jpg" className="m-4 aid__img" alt={t('therapy.types.avd.title')}/>
                            <h4 className="custom__style text-center">Estimulación con animales</h4>
                        </NavLink>
                        <NavLink className='link__style logo__wrapper'to="#">
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620238523/Vitae/imagenes/Servicios/Animaci%C3%B3n/arte-terapia_rytqdm.jpg" className="m-4 aid__img" alt={t('therapy.types.sensorial.title')}/>
                            <h4 className="custom__style text-center">Arterapia</h4>
                        </NavLink>
                    </div>
                    <div className="col">
                        <NavLink className='link__style logo__wrapper'to="#">
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620238555/Vitae/imagenes/Servicios/Animaci%C3%B3n/excuriones-culturales_i5dekm.jpg" className="m-4 aid__img" alt={t('therapy.types.psyco.title')}/>
                            <h4 className="custom__style text-center">Excursiones culturales</h4>
                        </NavLink>
                        <NavLink className='link__style logo__wrapper'to="#">
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620238572/Vitae/imagenes/Servicios/Animaci%C3%B3n/relajacion_dawke1.jpg" className="m-4 aid__img" alt={t('therapy.types.labor.title')}/>
                            <h4 className="custom__style text-center">Relajación</h4>
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

