import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from '../../Forms/ContactForm/ContactForm';
import IconsBox from '../../IconsBox/IconsBox';
import InteractiveCard from '../../InteractiveCard/InteractiveCard';
import './Home.css'

//example {t('navbar.aids.vitae')}
const Home = () => {

    const { t } = useTranslation();
    return (
        <div>
            <div className="container-fluid body__background ">
                <div className="container-fluid">
                    <div className="row home__sec__1 ">
                        <div className=" col-12 col-md-5 home__title d-flex align-items-start justify-content-start ml-5 mt-3">
                            <h1>{t('home.section1.title')} </h1>
                            <h6>{t('home.section1.subtitle')}</h6>
                        </div>
                        <div className=" col-12 col-md-6 contact__form d-flex align-items-center justify-content-center">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
                <div className="row home__sec__2">
                    <div className="col-6 d-flex align-items-center home__subsec__1">
                        <div className='container d-none d-xl-block'>
                            <div className='row d-flex  flex-wrap justify-content-around my-5 py-5'>
                                <div className="col ">
                                    <img  src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619974963/Vitae/iconos/kit-de-primeros-auxilios_rq3jqf.png" className='interactive__item' alt="" width='150'/>
                                </div>
                                <div className="col">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619974867/Vitae/iconos/enfermero_danavq.png" className='interactive__item' alt="" width='150'/>
                                </div>
                                <div className="col">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619974867/Vitae/iconos/caminante_uz1aug.png" className='interactive__item' alt="" width='150'/>
                                </div>
                            </div>
                            <div className='row d-flex flex-wrap justify-content-around align-items-center my-5 py-5'>
                                <div className="col">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619974867/Vitae/iconos/piezas-de-ajedrez_ae15hb.png" className='interactive__item' alt="" width='150'/>
                                </div>
                                <div className="col">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619974867/Vitae/iconos/bingo_mibfla.png" className='interactive__item' alt="" width='150'/>
                                </div>
                                <div className="col">
                                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619974963/Vitae/iconos/inodoro_ekjixy.png" className='interactive__item' alt="" width='150'/>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-12 col-lg-6 px-5 py-5 d-flex flex-column justify-content-center align-content-center grey__container">
                        <h3>{t('home.section2.title')}</h3>
                        <div className='mt-3'>
                            <h5>{t('home.section2.subtitle1')} </h5>
                                <p>{t('home.section2.paragraph1')} </p>
                            <h5>{t('home.section2.subtitle2')}</h5>
                                <p>{t('home.section2.paragraph2')} </p>
                            <h5>{t('home.section2.subtitle3')} </h5>
                                <p>{t('home.section2.paragraph3')} </p>
                        </div>
                    </div>
                </div>
                
                <div className="row home__sec__3 py-5">
                    <div className="col-12 d-flex flex-column align-items-center mt-5">
                        <div className="row my-3 px-5">
                            <div className="col ">
                                <h2>{t('home.section3.title')}</h2>
                            </div>
                        </div>
                        <div className="row px-5 justify-content-center">
                            <div className="col-7">
                                <h6>{t('home.section3.subtitle')}</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <IconsBox/>
                            </div>
                        </div>
                    </div> 
                </div>
                
                <div className="row grey__container d-flex flex-column justify-content-center align-items-center home__sec__5 py-5 ">
                    <div className="row">
                        <div className="col text-center ">
                            <h2>{t('home.section4.title')}</h2>
                            <h5>{t('home.section4.subtitle')}</h5>
                        </div>
                    </div>
                    <div className="row covid__gallery">
                        <InteractiveCard/>
                    </div>
                    <div className="row text-center px-5">
                        <div className="col d-none d-sm-block">
                            <button href='/contacto' className='btn-primary p-2'>{t('home.section4.button')}</button>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default function App() {
    return (
      <Suspense fallback="loading">
        <Home />
      </Suspense>
    );
  };