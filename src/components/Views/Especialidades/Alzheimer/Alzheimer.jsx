import React, { Suspense } from 'react';

import './Alzheimer.css'



import { useTranslation } from 'react-i18next';

const Alzheimer = () => {

    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="row  mx-2">
                <div className="row  m-2">
                    <h2>{t('specialities.alzheimer.definition.title')}</h2>
                    <p>{t('specialities.alzheimer.definition.paragraph')}</p>
                </div>
                <div className="row">
                    <div className="col d-none d-sm-none d-md-block">
                        <img src="http://via.placeholder.com/1280x720" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                    </div>
                    <div className="col">
                        <h2>{t('specialities.alzheimer.types.title')}</h2>
                        <h3>{t('specialities.alzheimer.types.early.title')}</h3>
                        <p>{t('specialities.alzheimer.types.early.paragraph')}</p>
                        <h3>{t('specialities.alzheimer.types.late.title')}</h3>
                        <p>{t('specialities.alzheimer.types.late.paragraph')}</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="row container-fluid">
                        <h2>{t('specialities.alzheimer.symptoms.title')}</h2>
                    </div>
                    <div className="row  m-2">
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.alzheimer.symptoms.memory')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.alzheimer.symptoms.concentrate')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                <h5>{t('specialities.alzheimer.symptoms.hours')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                <h5>{t('specialities.alzheimer.symptoms.task')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="http://via.placeholder.com/50x50" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.alzheimer.symptoms.places')}</h5>
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
                        <h3>{t('specialities.alzheimer.phases.phases.mild.title')}</h3>
                        <p>{t('specialities.alzheimer.phases.phases.mild.paragraph1')}</p>
                        <p>{t('specialities.alzheimer.phases.phases.mild.paragraph2')}</p>
                        <ul className="ml-2 ul__alzheimer">
                            <li className="m-1">{t('specialities.alzheimer.phases.phases.mild.difficulties.finding')}</li>
                            <li className="m-1">{t('specialities.alzheimer.phases.phases.mild.difficulties.remembering')}</li>
                            <li className="m-1">{t('specialities.alzheimer.phases.phases.mild.difficulties.task')}</li>
                            <li className="m-1">{t('specialities.alzheimer.phases.phases.mild.difficulties.forget')}</li>
                            <li className="m-1">{t('specialities.alzheimer.phases.phases.mild.difficulties.losing')}</li>
                            <li className="m-1">{t('specialities.alzheimer.phases.phases.mild.difficulties.organize')}</li>
                        </ul> 
                    </div>

                    <div className="row container-fluid">
                        <h3>{t('specialities.alzheimer.phases.phases.moderate.title')}</h3>
                        <p>{t('specialities.alzheimer.phases.phases.moderate.paragraph1')}</p>
                        <p>{t('specialities.alzheimer.phases.phases.moderate.paragraph2')}</p>
                        <ul className="ml-2 ul__alzheimer">
                            <li className="m-1">{t('specialities.alzheimer.phases.phases.moderate.difficulties.forget')}</li>
                            <li className="m-1">{t('specialities.alzheimer.phases.phases.moderate.difficulties.moody')}</li>
                            <li className="m-1">{t('specialities.alzheimer.phases.phases.moderate.difficulties.remember')}</li>
                            <li className="m-1">{t('specialities.alzheimer.phases.phases.moderate.difficulties.confusion')}</li>
                            <li className="m-1">{t('specialities.alzheimer.phases.phases.moderate.difficulties.clothes')}</li>
                            <li className="m-1">{t('specialities.alzheimer.phases.phases.moderate.difficulties.bath')}</li>
                            <li className="m-1">{t('specialities.alzheimer.phases.phases.moderate.difficulties.night')}</li>
                            <li className="m-1">{t('specialities.alzheimer.phases.phases.moderate.difficulties.lost')}</li>
                            <li className="m-1">{t('specialities.alzheimer.phases.phases.moderate.difficulties.behavior')}</li>
                        </ul> 
                    </div>

                    <div className="row container-fluid">
                        <h3>{t('specialities.alzheimer.phases.phases.severe.title')}</h3>
                        <p>{t('specialities.alzheimer.phases.phases.severe.paragraph1')}</p>
                        
                        <ul class="ml-2 ul__alzheimer">
                            <li className="m-1">{t('specialities.alzheimer.phases.phases.severe.difficulties.assistance')}</li>
                            <li className="m-1">{t('specialities.alzheimer.phases.phases.severe.difficulties.notion')}</li>
                            <li className="m-1">{t('specialities.alzheimer.phases.phases.severe.difficulties.physics')}</li>
                            <li className="m-1">{t('specialities.alzheimer.phases.phases.severe.difficulties.communication')}</li>
                            <li className="m-1">{t('specialities.alzheimer.phases.phases.severe.difficulties.infections')}</li>
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
        <Alzheimer />
      </Suspense>
    );
  }

