import React, { Suspense } from 'react';
import './Depresion.css'



import { useTranslation } from 'react-i18next';

const Depresion = () => {

    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="row grey__container m-2">
                <div className="row">
                    <div className="col">
                        <h2>{t('specialities.depression.definition.title')}</h2>
                        <p>{t('specialities.depression.definition.paragraph1')}</p>
                        <p>{t('specialities.depression.definition.paragraph2')}</p>
                    </div>
                </div>
                <div className="row">
                <div className="col d-none d-sm-none d-md-block">
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619948579/Vitae/imagenes/Home%20Pictures/pexels-matthias-zomer-618158_stutqq.jpg" className="figure-img img-fluid rounded" width='1280' alt="A generic square placeholder."/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>{t('specialities.depression.types.title')}</h2>
                        <h3>{t('specialities.depression.types.severe.title')}</h3>
                        <p>{t('specialities.depression.types.severe.paragraph')}</p>
                        <h3>{t('specialities.depression.types.persistant.title')}</h3>
                        <p>{t('specialities.depression.types.persistant.paragraph')}</p>
                        <h3>{t('specialities.depression.types.minor.title')}</h3>
                        <p>{t('specialities.depression.types.minor.paragraph')}</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="row container-fluid">
                        <h2>{t('specialities.depression.symptoms.title')}</h2>
                    </div>
                    <div className="row m-2">
                        <div className="col"> 
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978855/Vitae/iconos/clock_hmnyih.png" className="figure-img img-fluid rounded d-inline" width='50' alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.depression.symptoms.low')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col"> 
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619981849/Vitae/iconos/thinking_dvftic.png" className="figure-img img-fluid rounded d-inline" width='50' alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                <h5>{t('specialities.depression.symptoms.pessimism')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978857/Vitae/iconos/view_onsvks.png" className="figure-img img-fluid rounded d-inline" width='50' alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.depression.symptoms.interest')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619979142/Vitae/iconos/muscle_fd5ahc.png" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                <h5>{t('specialities.depression.symptoms.fatigue')}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col">
                        <h2>{t('specialities.depression.therapies.title')}</h2>
                        <p>{t('specialities.depression.therapies.paragraph')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function App() {
    return (
      <Suspense fallback="loading">
        <Depresion />
      </Suspense>
    );
  }

