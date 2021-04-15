import React, { Suspense } from 'react';
import './Ictus.css'

import { useTranslation } from 'react-i18next';

const Ictus = () => {

    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="row  mx-2">
                <div className="row  m-2">
                    <h2>{t('specialities.ictus.definition.title')}</h2>
                    <p>{t('specialities.ictus.definition.paragraph')}</p>
                </div>
                <div className="row">
                    <div className="col d-none d-sm-none d-md-block">
                        <img src="http://via.placeholder.com/1280x720" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                    </div>
                    <div className="col">
                        <h2>{t('specialities.ictus.types.title')}</h2>
                        <h3>{t('specialities.ictus.types.ischemic.title')}</h3>
                        <p>{t('specialities.ictus.types.ischemic.paragraph')}</p>
                        <h3>{t('specialities.ictus.types.hemorrhagic.title')}</h3>
                        <p>{t('specialities.ictus.types.hemorrhagic.paragraph')}</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="row container-fluid">
                        <h2>{t('specialities.ictus.symptoms.title')}</h2>
                    </div>
                    <div className="row  m-2">
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.ictus.symptoms.strength')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.ictus.symptoms.confusion')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                <h5>{t('specialities.ictus.symptoms.walking')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                <h5>{t('specialities.ictus.symptoms.speech')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.ictus.symptoms.numbness')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.ictus.symptoms.vision')}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row m-2">
                    <h2>{t('specialities.ictus.therapies.title')}</h2> 
                    <p>{t('specialities.ictus.therapies.paragraph')}</p>
                </div>
            </div>
        </div>
    );
};

export default function App() {
    return (
      <Suspense fallback="loading">
        <Ictus />
      </Suspense>
    );
  }

