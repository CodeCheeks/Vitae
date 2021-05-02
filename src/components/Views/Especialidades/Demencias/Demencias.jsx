import React, { Suspense } from 'react';
import './Demencias.css'



import { useTranslation } from 'react-i18next';

const Demencia = () => {

    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="row grey__container m-2">
                <div className="row">
                    <div className="col">
                    <h2>{t('specialities.dementia.definition.title')}</h2>
                    <p>{t('specialities.dementia.definition.paragraph1')}</p>
                    <p>{t('specialities.dementia.definition.paragraph2')}</p>
                    </div>
                    <div className="col d-none d-sm-none d-md-block">
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619948580/Vitae/imagenes/Home%20Pictures/pexels-sam-lin-4566528_f2lf91.jpg" className="figure-img img-fluid rounded" widht='1280' alt="A generic square placeholder."/>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h2>{t('specialities.dementia.types.title')}</h2>
                        <h3>{t('specialities.dementia.types.alzheimer.title')}</h3>
                        <p>{t('specialities.dementia.types.alzheimer.paragraph')}</p>
                        <h3>{t('specialities.dementia.types.vascular.title')}</h3>
                        <p>{t('specialities.dementia.types.vascular.paragraph')}</p>
                        <h3>{t('specialities.dementia.types.lewy.title')}</h3>
                        <p>{t('specialities.dementia.types.lewy.paragraph')}</p>
                        <h3>{t('specialities.dementia.types.tempront.title')}</h3>
                        <p>{t('specialities.dementia.types.tempront.paragraph')}</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="row container-fluid">
                        <h2>{t('specialities.dementia.symptoms.title')}</h2>
                    </div>
                    <div className="row m-2">
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978858/Vitae/iconos/confusion_xd44kr.png" className="figure-img img-fluid rounded d-inline" width='50' alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.dementia.symptoms.disorientation')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978857/Vitae/iconos/view_onsvks.png" className="figure-img img-fluid rounded d-inline" width='50' alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.dementia.symptoms.memory')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978855/Vitae/iconos/clock_hmnyih.png" className="figure-img img-fluid rounded d-inline" width='50' alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                <h5>{t('specialities.dementia.symptoms.attention')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978932/Vitae/iconos/speech-bubble_xb2z91.png" className="figure-img img-fluid rounded d-inline" width='50' alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                <h5>{t('specialities.dementia.symptoms.language')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978757/Vitae/iconos/walk_x0kfec.png" className="figure-img img-fluid rounded d-inline" width='50' alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.dementia.symptoms.apraxias')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978131/Vitae/iconos/mesasge_cpbni4.png" className="figure-img img-fluid rounded d-inline" width='50' alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.dementia.symptoms.agnosia')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619979145/Vitae/iconos/thermometer_brinh8.png" className="figure-img img-fluid rounded d-inline" width='50' alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.dementia.symptoms.behaviour')}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col">
                        <h2>{t('specialities.dementia.therapies.title')}</h2>
                        <p>{t('specialities.dementia.therapies.paragraph')}</p>
                        <ul className="ml-2 ul__dementia">
                            <li className="m-1">{t('specialities.dementia.therapies.prevention.activity')}</li>
                            <li className="m-1">{t('specialities.dementia.therapies.prevention.active')}</li>
                            <li className="m-1">{t('specialities.dementia.therapies.prevention.smoke')}</li>
                            <li className="m-1">{t('specialities.dementia.therapies.prevention.vitam')}</li>
                            <li className="m-1">{t('specialities.dementia.therapies.prevention.cardio')}</li>
                            <li className="m-1">{t('specialities.dementia.therapies.prevention.eat')}</li>
                            <li className="m-1">{t('specialities.dementia.therapies.prevention.sleep')}</li>


                        </ul> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function App() {
    return (
      <Suspense fallback="loading">
        <Demencia />
      </Suspense>
    );
  }

