import React, { Suspense } from 'react';
import './About.css'

import { useTranslation } from 'react-i18next';
import Carousel from '../../Carousel/Carousel'


const About = () => {
    const { t } = useTranslation();

    return (
        <div className="container grey__container">
            <div className="row mb-3">
                <div className="col">
                <h2 className="mb-3" >  <p>{t('about.title1')}</p></h2>
                    <p>{t('about.paragraph1')}</p>
                    <p>{t('about.paragraph2')}</p>
                    <p>{t('about.paragraph3')}</p>
                    <p>{t('about.paragraph4')}</p>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <h2 className="mb-3" >  <p>{t('about.title3')}</p></h2>
                    <p>{t('about.paragraph5')}</p>
                </div>
            </div>
            <div className="row m-4">
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619177042/Vitae/iconos/bullet_ifblsu.png" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('about.values.Vocation')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619177042/Vitae/iconos/bullet_ifblsu.png" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('about.values.Motivation')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619177042/Vitae/iconos/bullet_ifblsu.png" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                <h5>{t('about.values.Passion')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619177042/Vitae/iconos/bullet_ifblsu.png" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                <h5>{t('about.values.Responsibility')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619177042/Vitae/iconos/bullet_ifblsu.png" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('about.values.Training')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619177042/Vitae/iconos/bullet_ifblsu.png" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('about.values.Sensitivity')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619177042/Vitae/iconos/bullet_ifblsu.png" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('about.values.Responsiveness')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619177042/Vitae/iconos/bullet_ifblsu.png" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('about.values.Proactivity')}</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619177042/Vitae/iconos/bullet_ifblsu.png" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('about.values.Companionship')}</h5>
                                </div>
                            </div>
                            <div className="row d-flex align-items-center">
                                <div className="col-3">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619177042/Vitae/iconos/bullet_ifblsu.png" className="figure-img img-fluid rounded d-inline" alt="A generic square placeholder."/>
                                </div>
                                <div className="col-9">
                                    <h5>{t('about.values.Integrity')}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
            <div className="row mb-3">
                <div className="col">
                <h2 className="mb-3" >  <p>{t('about.title4')}</p></h2>
                    <p>{t('about.paragraph6')}</p>
                </div>
            </div>
            
            <h2 className="mb-5" >  <p>{t('about.title2')}</p></h2>
            <Carousel/>
        </div>
    );
};

export default function App() {
    return (
      <Suspense fallback="loading">
        <About />
      </Suspense>
    );
  }