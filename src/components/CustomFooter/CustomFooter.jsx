import React, { Suspense } from 'react';
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next';

import './CustomFooter.css'
  
  const CustomFooter = () => {

    const { i18n } = useTranslation();

    return (
        <div className="container-fluid footer__container">
            <div className="row mb-2 ">
                <div className="col border-right">
                    <div className='mb-5 d-flex flex-column justify-content-between'>
                        <h5 className="text-light mt-3">Contacto</h5>
                        <h6 className="text-light footer__text__1 my-2">exam@vita.com</h6>
                        <h6 className="text-light footer__text__1 my-2">📞 9121765942</h6>
                    </div>
                    <div className='d-flex justify-content-around flex-wrap'>
                        <a href='https://www.facebook.com/' target="_blank" rel="noreferrer"><img src='https://res.cloudinary.com/dv4pkbmin/image/upload/v1618498664/Icon/facebook_ljni9y.png' alt='Facebook' width='50' height='50'/></a>
                        <a href='https://www.facebook.com/' target="_blank" rel="noreferrer"><img src='https://res.cloudinary.com/dv4pkbmin/image/upload/v1618498683/Icon/gorjeo_ntdnvn.png' alt='Twitter' width='50' height='50'/></a>
                        <a href='https://www.facebook.com/' target="_blank" rel="noreferrer"><img src='https://res.cloudinary.com/dv4pkbmin/image/upload/v1618498698/Icon/instagram_uud769.png' alt='Instagram' width='50' height='50'/></a>
                        <a href='https://www.facebook.com/' target="_blank" rel="noreferrer"><img src='https://res.cloudinary.com/dv4pkbmin/image/upload/v1618498641/Icon/youtube_izfmni.png' alt='Youtube' width='50' height='50'/></a>
                    </div>
                </div>
                <div className="col border-right">
                    <h5 className="text-light">Especialidades</h5>
                    <ul className="list-group list-group-flush">
                        <li className=""><Link to="/especialidades/ictus" className="text-light">» Ictus</Link></li>
                        <li className=""><Link to="/especialidades/fracturas" className="text-light">» Fracturas</Link></li>
                        <li className=""><Link to="/especialidades/alzheimer" className="text-light">» Alzheimer</Link></li>
                        <li className=""><Link to="/especialidades/parkinson" className="text-light">» Parkinson</Link></li>
                        <li className=""><Link to="/especialidades/demencias" className="text-light">» Demencias</Link></li>
                        <li className=""><Link to="/especialidades/depresion" className="text-light">» Depresión</Link></li>
                    </ul>
                </div>
                <div className="d-flex flex-column col">
                    <Link to="/ayudas" className="text-light h5">Ayudas</Link>
                    <Link to="/preguntas-frecuentes" className="text-light h5">FAQs</Link>
                    <Link to="/sobre-nosotros" className="text-light h5">Nosotros</Link>
                    <Link to="/empleo" className="text-light h5">Empleo</Link>
                    <Link onClick={() => i18n.changeLanguage('en')} className="text-light h5">EN</Link>
                    <Link onClick={() => i18n.changeLanguage('es')} className="text-light h5">ES</Link>
                </div>
                <div className="col border-left d-none d-sm-none d-md-block">
                    <div className="row d-flex align-items-center">
                        <div className="col">
                            <img className="footer__img" src="../../../media/images/fake_map.png" alt="fake-map"/>
                        </div>
                        <div className="col">
                            <h6 className="text-light">Avenida de las Castañas</h6>
                            <h6 className="text-light">Nº46   28056</h6>
                            <h6 className="text-light">Madrid</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center row justify-content-between pt-4 second__footer ">
                <div className="col">
                    <h6 className="text-light">Proyecto realizado por Alicia Parra Serrano y Diego Cerratos Bravo</h6>
                </div>
                <div className="col">
                    <h6 className="text-light" >Copyright © 2021 | Proyecto realizado con fines académicos.</h6>
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
