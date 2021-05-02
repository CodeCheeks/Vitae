import React, { Suspense } from 'react';
import './Parkinson.css'



import { useTranslation } from 'react-i18next';

const Parkinson = () => {

    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="row grey__container mx-2">
                <div className="row m-2">
                    <h2 className="">{t('specialities.parkinson.definition.title')}</h2>
                    <p>{t('specialities.parkinson.definition.paragraph1')}</p>
                    <div className="row justify-content-center">
                        <div className="col-8 d-none d-sm-none d-md-block m-3">
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619948579/Vitae/imagenes/Home%20Pictures/pexels-matthias-zomer-339619_wtkewl.jpg" className="figure-img img-fluid rounded" width='1280' alt="A generic square placeholder."/>
                        </div>
                    </div>
                    <p>{t('specialities.parkinson.definition.paragraph2')}</p>
                </div>

                <div className="row justify-content-center">
                    <div className="row container-fluid">
                        <h2>{t('specialities.parkinson.symptoms.title')}</h2>
                    </div>
                    <div className="row  m-2">
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619979332/Vitae/iconos/arm_lxxs9d.png" className="figure-img img-fluid rounded d-inline" widht='50' alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.parkinson.symptoms.trembling')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978131/Vitae/iconos/mesasge_cpbni4.png" className="figure-img img-fluid rounded d-inline" widht='50' alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.parkinson.symptoms.small')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978858/Vitae/iconos/confusion_xd44kr.png" className="figure-img img-fluid rounded d-inline" widht='50' alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.parkinson.symptoms.dizziness')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619979143/Vitae/iconos/blood-drop_i6vwuo.png" className="figure-img img-fluid rounded d-inline" widht='50' alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                <h5>{t('specialities.parkinson.symptoms.smell')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978855/Vitae/iconos/clock_hmnyih.png" className="figure-img img-fluid rounded d-inline" widht='50' alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                <h5>{t('specialities.parkinson.symptoms.sleep')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978757/Vitae/iconos/walk_x0kfec.png" className="figure-img img-fluid rounded d-inline" widht='50' alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.parkinson.symptoms.move')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619979140/Vitae/iconos/speech-bubble_ap782m.png" className="figure-img img-fluid rounded d-inline" widht='50' alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.parkinson.symptoms.low')}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                

                <div className="row m-2">
                    <div className="row">
                        <h2>{t('specialities.alzheimer.phases.title')}</h2> 
                    </div>
                    <div className="row container-fluid">
                        <h3>{t('specialities.parkinson.phases.phases.1.title')}</h3>
                        <p>{t('specialities.parkinson.phases.phases.1.paragraph')}</p>
                    </div>
                    <div className="row container-fluid">
                        <h3>{t('specialities.parkinson.phases.phases.2.title')}</h3>
                        <p>{t('specialities.parkinson.phases.phases.2.paragraph')}</p>
                    </div>
                    <div className="row container-fluid">
                        <h3>{t('specialities.parkinson.phases.phases.3.title')}</h3>
                        <p>{t('specialities.parkinson.phases.phases.3.paragraph')}</p>
                    </div>
                    <div className="row container-fluid">
                        <h3>{t('specialities.parkinson.phases.phases.4.title')}</h3>
                        <p>{t('specialities.parkinson.phases.phases.4.paragraph')}</p>
                    </div>
                    <div className="row container-fluid">
                        <h3>{t('specialities.parkinson.phases.phases.5.title')}</h3>
                        <p>{t('specialities.parkinson.phases.phases.5.paragraph')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function App() {
    return (
      <Suspense fallback="loading">
        <Parkinson />
      </Suspense>
    );
  }

