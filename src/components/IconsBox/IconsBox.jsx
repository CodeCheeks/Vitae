
import './IconsBox.css'
import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const IconsBox = () => {
    const { t } = useTranslation();
    return (
        <div>
            <div className="container boxes__wrapper">
                <div className="row my-5">
                    <div className="col-12 col-md-4">
                        <div className='d-flex flex-column align-items-center box__item'>
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619981849/Vitae/iconos/thinking_dvftic.png"  width='60' alt="icon"/>
                            <h5 className='title__color'>{t('home.section3.box1t')}</h5>
                            <p>{t('home.section3.box1p')}</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className='d-flex flex-column align-items-center box__item'>
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619979140/Vitae/iconos/speech-bubble_ap782m.png" width='55' alt="icon"/>
                            <h5 className='title__color'>{t('home.section3.box2t')}</h5>
                            <p>{t('home.section3.box2p')}</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className='d-flex flex-column align-items-center box__item'>
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978855/Vitae/iconos/clock_hmnyih.png" width='60' alt="icon"/>
                            <h5 className='title__color'>{t('home.section3.box3t')}</h5>
                            <p>{t('home.section3.box3p')}</p>
                        </div>
                    </div>
                </div>
                
                <div className="row my-5">
                    <div className="col-12 col-md-4">
                        <div className='d-flex flex-column align-items-center box__item'>
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978670/Vitae/iconos/musculo_dnwgla.png" width='60' alt="icon"/>
                            <h5 className='title__color'>{t('home.section3.box4t')}</h5>
                            <p>{t('home.section3.box4p')}</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className='d-flex flex-column align-items-center box__item'>
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978858/Vitae/iconos/confusion_xd44kr.png" width='60' alt="icon"/>
                            <h5 className='title__color'>{t('home.section3.box5t')}</h5>
                            <p>{t('home.section3.box5p')}</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className='d-flex flex-column align-items-center box__item'>
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619979199/Vitae/iconos/hueso_w5gn8b.png" width='60' alt="icon"/>
                            <h5 className='title__color'>{t('home.section3.box6t')}</h5>
                            <p>{t('home.section3.box6p')}</p>
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
        <IconsBox />
      </Suspense>
    );
  };