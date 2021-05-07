import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import {Link} from 'react-router-dom'
import Maps from '../Maps/Maps';


import './CustomFooter.css'
  
  const CustomFooter = () => {

    const { t } = useTranslation();

    return (
        <div className="container-fluid footer__container">
            <div className='container'> 
                <div className="row mb-2 ">
                    <div className="col border-right d-flex justify-content-center">
                        <div className='mb-5 d-flex flex-column justify-content-center align-items-center'>
                            <h5 className="text-light mt-3">{t('navbar.contact')}</h5>
                            <h6 className="text-light footer__text__1 my-2">Vitae@example.com</h6>
                            <h6 className="text-light footer__text__1 my-2">📞 91 217 65 942</h6>
                        </div>
                        
                    </div>
                    <div className="col border-right d-flex flex-column align-items-center justify-content-center">
                        <div className='d-flex justify-content-around flex-wrap'>
                            <a href='https://www.facebook.com/' target="_blank" rel="noreferrer"><img className='media__icon' src='https://res.cloudinary.com/dv4pkbmin/image/upload/v1618498664/Icon/facebook_ljni9y.png' alt='Facebook' width='50' height='50'/></a>
                            <a href='https://www.facebook.com/' target="_blank" rel="noreferrer"><img className='media__icon' src='https://res.cloudinary.com/dv4pkbmin/image/upload/v1618498683/Icon/gorjeo_ntdnvn.png' alt='Twitter' width='50' height='50'/></a>
                            <a href='https://www.facebook.com/' target="_blank" rel="noreferrer"><img className='media__icon' src='https://res.cloudinary.com/dv4pkbmin/image/upload/v1618498698/Icon/instagram_uud769.png' alt='Instagram' width='50' height='50'/></a>
                            <a href='https://www.facebook.com/' target="_blank" rel="noreferrer"><img className='media__icon' src='https://res.cloudinary.com/dv4pkbmin/image/upload/v1618498641/Icon/youtube_izfmni.png' alt='Youtube' width='50' height='50'/></a>
                        </div> 
                    </div>
                    
                    <div className=" justify-content-center align-items-center col mt-4 footer__list">
                        <Link to="/ayudas/cheque-servicio" className="text-light h5 mx-2">{t('navbar.aids.title')}</Link>
                        <Link to="/preguntas-frecuentes" className="text-light h5 mx-2">{t('navbar.faq')}</Link>
                        <Link to="/sobre-nosotros" className="text-light h5 mx-2">{t('navbar.about')}</Link>
                        <Link to="/empleo" className="text-light h5 mx-2">{t('navbar.jobs')}</Link>
                    </div>
                    <div className="col border-left d-none d-sm-none d-lg-block">
                        <div className="row d-flex align-items-center">
                            <div className="col">
                                <Maps/>
                            </div>
                            <div className="col mt-1">
                                <h6 className="text-light">Paseo de la Chopera Nº14</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center row justify-content-between pt-4 second__footer">
                    <div className="col">
                        <h6 className="text-light">{t('navbar.footer.madeby')}</h6>
                    </div>
                    <div className="col">
                        <h6 className="text-light" >{t('navbar.footer.academics')}</h6>
                    </div>
                </div>
            </div>
        </div>
      );
  };
  


  export default function App() {
    return (
      <Suspense fallback="loading">
        <CustomFooter />
      </Suspense>
    );
  }
