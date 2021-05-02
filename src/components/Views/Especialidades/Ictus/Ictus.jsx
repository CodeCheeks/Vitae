import React, { Suspense } from 'react';
import './Ictus.css'

import { useTranslation } from 'react-i18next';

const Ictus = () => {

    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="row  grey__container mx-2">
                <div className="row  m-2">
                    <h2>{t('specialities.ictus.definition.title')}</h2>
                    <p>{t('specialities.ictus.definition.paragraph')}</p>
                </div>
                <div className="row">
                    <div className="col d-none d-sm-none d-md-block">
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619948579/Vitae/imagenes/Home%20Pictures/pexels-matthias-zomer-339620_puzzyr.jpg"  widht='1280' className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
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
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978670/Vitae/iconos/musculo_dnwgla.png" className="figure-img img-fluid rounded d-inline" width='50' alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.ictus.symptoms.strength')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978858/Vitae/iconos/confusion_xd44kr.png" className="figure-img img-fluid rounded d-inline" width='50' alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.ictus.symptoms.confusion')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978757/Vitae/iconos/walk_x0kfec.png" className="figure-img img-fluid rounded d-inline" width='50' alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                <h5>{t('specialities.ictus.symptoms.walking')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978932/Vitae/iconos/speech-bubble_xb2z91.png" className="figure-img img-fluid rounded d-inline" width='50' alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                <h5>{t('specialities.ictus.symptoms.speech')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978855/Vitae/iconos/clock_hmnyih.png" className="figure-img img-fluid rounded d-inline" width='50' alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('specialities.ictus.symptoms.numbness')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978857/Vitae/iconos/view_onsvks.png" className="figure-img img-fluid rounded d-inline" width='50' alt="A generic square placeholder."/>
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

