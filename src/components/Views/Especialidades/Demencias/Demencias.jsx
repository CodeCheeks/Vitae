import React, { Suspense } from 'react';
import './Demencias.css'



import { useTranslation } from 'react-i18next';

const Demencia = () => {

    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="row m-2">
                <div className="row">
                    <div className="col">
                    <h2>{t('specialities.dementia.definition.title')}</h2>
                    <p>{t('specialities.dementia.definition.paragraph1')}</p>
                    <p>{t('specialities.dementia.definition.paragraph2')}</p>
                    </div>
                    <div className="col d-none d-sm-none d-md-block">
                        <img src="http://via.placeholder.com/1280x720" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
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
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.dementia.symptoms.disorientation')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.dementia.symptoms.memory')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                <h5>{t('specialities.dementia.symptoms.attention')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                <h5>{t('specialities.dementia.symptoms.language')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.dementia.symptoms.apraxias')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.dementia.symptoms.agnosia')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
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

