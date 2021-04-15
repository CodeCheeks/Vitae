import React, { Suspense } from 'react';
import './Fracturas.css'

import { useTranslation } from 'react-i18next';

const Fracturas = () => {

    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="row  mx-2">
                <div className="row  m-2">
                    <h2>{t('specialities.fractures.definition.title')}</h2>
                    <p>{t('specialities.fractures.definition.paragraph')}</p>
                </div>
                <div className="row">
                    <div className="col d-none d-sm-none d-md-block">
                        <img src="http://via.placeholder.com/1280x720" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                    </div>
                    <div className="col">
                        <h2>{t('specialities.fractures.types.title')}</h2>

                        <h4>{t('specialities.fractures.types.complete.title')}</h4>
                        <p>{t('specialities.fractures.types.complete.paragraph')}</p>

                        <h4>{t('specialities.fractures.types.simple.title')}</h4>
                        <p>{t('specialities.fractures.types.simple.paragraph')}</p>

                        <h4>{t('specialities.fractures.types.comminuted.title')}</h4>
                        <p>{t('specialities.fractures.types.comminuted.paragraph')}</p>

                        <h4>{t('specialities.fractures.types.open.title')}</h4>
                        <p>{t('specialities.fractures.types.open.paragraph')}</p>

                        <h4>{t('specialities.fractures.types.closed.title')}</h4>
                        <p>{t('specialities.fractures.types.closed.paragraph')}</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="row container-fluid">
                        <h2>{t('specialities.fractures.symptoms.title')}</h2>
                    </div>
                    <div className="row  m-2">
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.fractures.symptoms.damage')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.fractures.symptoms.tingling')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                <h5>{t('specialities.fractures.symptoms.limited')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                <h5>{t('specialities.fractures.symptoms.deformation')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.fractures.symptoms.fever')}</h5>
                                </div>
                            </div>
                
                        </div>
                    </div>
                    
                </div>
                <div className="row m-2">
                    <h2>{t('specialities.fractures.therapies.title')}</h2> 
                    <p>{t('specialities.fractures.therapies.paragraph')}</p>
                </div>
            </div>
        </div>
    );
};

export default function App() {
    return (
      <Suspense fallback="loading">
        <Fracturas />
      </Suspense>
    );
  }

