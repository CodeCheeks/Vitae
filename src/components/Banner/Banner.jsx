import React, { Suspense } from 'react';
import { useLocation } from 'react-router';
import './Banner.css'

import { useTranslation } from 'react-i18next';




const Banner = () => {
    
    const { t } = useTranslation();
    let location = useLocation()
    

    const getBanner = () => {
        let banner={
            image : "",
            title : "",
            active: true
        }

        let view = location.pathname.split("/").splice(1)

        switch(view[view.length-1]) {
            case "":
                banner.active = false
                break;
            case "servicios":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573050/Vitae/imagenes/banner/banner-services_1_jvwidw.jpg)"
                banner.title = 'navbar.services.title'
                break;
            case "terapias":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573050/Vitae/imagenes/banner/banner-services_1_jvwidw.jpg)"
                banner.title = 'navbar.services.terapeutics.title'
                break;
            case "asistenciales":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573050/Vitae/imagenes/banner/banner-services_1_jvwidw.jpg)"
                banner.title = 'navbar.services.assistance.title'
                break;
            case "fisioterapia":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573050/Vitae/imagenes/banner/banner-services_1_jvwidw.jpg)"
                banner.title = "navbar.services.terapeutics.physiotherapy"
                break;
            case "psicologia":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573050/Vitae/imagenes/banner/banner-services_1_jvwidw.jpg)"
                banner.title = 'navbar.services.terapeutics.psychology'
                break;
            case "terapia-ocupacional":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573050/Vitae/imagenes/banner/banner-services_1_jvwidw.jpg)"
                banner.title = "navbar.services.terapeutics.ot"
                break;
            case "animacion":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573050/Vitae/imagenes/banner/banner-services_1_jvwidw.jpg)"
                banner.title = 'navbar.services.terapeutics.recreation'
                break;
            case "medicina-enfermeria":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573050/Vitae/imagenes/banner/banner-services_1_jvwidw.jpg)"
                banner.title = "navbar.services.assistance.medicine"
                break;
            case "ayuda-domicilio":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573050/Vitae/imagenes/banner/banner-services_1_jvwidw.jpg)"
                banner.title = "navbar.services.assistance.home"
                break;
            case "transporte":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573050/Vitae/imagenes/banner/banner-services_1_jvwidw.jpg)"
                banner.title = "navbar.services.assistance.transport"
                break;
            case "comedor":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573050/Vitae/imagenes/banner/banner-services_1_jvwidw.jpg)"
                banner.title = 'navbar.services.assistance.catering'
                break;
            case "especialidades":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573050/Vitae/imagenes/banner/banner-services_1_jvwidw.jpg)"
                banner.title = "navbar.specialities.title"
                break;
            case "ictus":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573050/Vitae/imagenes/banner/banner-services_1_jvwidw.jpg)"
                banner.title = 'navbar.specialities.ictus'
                break;
            case "fracturas":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573050/Vitae/imagenes/banner/banner-services_1_jvwidw.jpg)"
                banner.title = "navbar.specialities.fractures"
                break;
            case "alzheimer":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573050/Vitae/imagenes/banner/banner-services_1_jvwidw.jpg)"
                banner.title = "navbar.specialities.alzheimer"
                break;
            case "parkinson":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573050/Vitae/imagenes/banner/banner-services_1_jvwidw.jpg)"
                banner.title = "navbar.specialities.parkinson"
                break;
            case "demencias":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573050/Vitae/imagenes/banner/banner-services_1_jvwidw.jpg)"
                banner.title = 'navbar.specialities.dementia'
                break;
            case "depresion":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573050/Vitae/imagenes/banner/banner-services_1_jvwidw.jpg)"
                banner.title = "navbar.specialities.depression"
                break;
            case "ayudas":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573050/Vitae/imagenes/banner/banner-services_1_jvwidw.jpg)"
                banner.title = "navbar.aids.title"
                break;
            case "cheque-vitae":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573050/Vitae/imagenes/banner/banner-services_1_jvwidw.jpg)"
                banner.title = "navbar.aids.vitae"
                break;
            case "cheque-servicio":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573050/Vitae/imagenes/banner/banner-services_1_jvwidw.jpg)"
                banner.title = "navbar.aids.dependence"
                break;
            case "preguntas-frecuentes":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618572494/Vitae/imagenes/banner/banner-faq_gubuse.jpg)"
                banner.title = "navbar.faq"
                break;
            case "sobre-nosotros":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573334/Vitae/imagenes/banner/banner-generic_uuugag.jpg)"
                banner.title = 'navbar.about'
                break;
            case "empleo":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618573160/Vitae/imagenes/banner/banner-aboutus_1_pwgo0w.jpg)"
                banner.title = 'navbar.jobs'
                break;
            case "contacto":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618572705/Vitae/imagenes/banner/banner-contact_qypewq.jpg)"
                banner.title = 'navbar.contact'
                break;
            case "iniciar-sesion":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618572633/Vitae/imagenes/banner/banner-aboutus_rx0tsn.jpg)"
                banner.title = 'navbar.login'
                break;
            case "area-personal":
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618572633/Vitae/imagenes/banner/banner-aboutus_rx0tsn.jpg)"
                banner.title = 'navbar.area'
                break;

            default:
                banner.image = "url(https://res.cloudinary.com/dv7hswrot/image/upload/v1618572705/Vitae/imagenes/banner/banner-contact_qypewq.jpg)"
                banner.title = ""
          } 


        return banner
    }

    
    return (
        <div className= {getBanner().active ? "container-fluid banner__style" : "d-none"} style={{backgroundImage: getBanner().image}}>
            <div className="row">
                <div className="col text-center">
                    <h1 className="banner__text">{t(getBanner().title)}</h1>
                </div>
            </div>
        </div>
    );
};



export default function App() {
    return (
      <Suspense fallback="loading">
        <Banner />
      </Suspense>
    );
  }