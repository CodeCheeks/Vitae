import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import './Psicologia.css'

const Psicologia = () => {
    const { t } = useTranslation();
    return (
        <div className="container">
            <div className="row">
                <h1>{t('psychology.title1')}</h1>
            </div>
            <div className="row align-items-center">
                <div className="col">
                    <p>{t('psychology.paragraph1')}</p>
                    <p>{t('psychology.paragraph2')}</p>
                    <p>{t('psychology.paragraph3')}</p>
                </div>
                <div className="col">
                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619193404/Vitae/imagenes/Servicios/Psicolog%C3%ADa/psicologo-tercera-edad_k3gvds.jpg" className="rounded" alt="psychology"/>
                </div>

            </div>
            <div className="row">
                <h1>{t('psychology.title2')}</h1>
                <p>{t('psychology.paragraph4')}</p>
            </div>
            <div className="row">
                <div className="col">
                        <ul>
                            <li>{t('psychology.types.depression')}</li>
                            <li>{t('psychology.types.anxiety')}</li>
                            <li>{t('psychology.types.grief')}</li>
                            <li>{t('psychology.types.disorder')}</li>
                            <li>{t('psychology.types.cognitive')}</li>
                            <li>{t('psychology.types.support')}</li>
                        </ul>
                </div>
            </div>
            <div className="row">
                <h1>{t('psychology.title3')}</h1>
                <p>{t('psychology.paragraph5')}</p>
                <p>{t('psychology.paragraph6')}</p>
            </div>
        </div>
    );
};


export default function App() {
    return (
      <Suspense fallback="loading">
        <Psicologia />
      </Suspense>
    );
  }