import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import './InteractiveCard.css'

const InteractiveCard = () => {
    const { t } = useTranslation();
    return (
    <div className='InteractiveCard'>
            
                <div className="d-flex justify-content-center cards__wrapper">
                    <div className=" i__card ">
                        <img src='https://res.cloudinary.com/dv7hswrot/image/upload/v1619948578/Vitae/imagenes/Home%20Pictures/pexels-karolina-grabowska-4197564_syh89z.jpg' alt='masks' width='300'/>
                        <h6 className='my-3 text-center'>{t('home.section4.box1')}</h6>  
                    </div>
                    <div className="i__card ">
                        <img src='https://res.cloudinary.com/dv7hswrot/image/upload/v1619948578/Vitae/imagenes/Home%20Pictures/kelly-sikkema-WIYtZU3PxsI-unsplash_aos2fz.jpg' alt='masks' width='300'/>
                        <h6 className='my-3 text-center'>{t('home.section4.box2')}</h6> 
                    </div>
                    <div className="i__card ">
                        <img src='https://res.cloudinary.com/dv7hswrot/image/upload/v1619948580/Vitae/imagenes/Home%20Pictures/pexels-pixabay-40568_ugv97a.jpg' alt='masks' width='300'/>
                        <h6 className='my-3 text-center'>{t('home.section4.box3')}</h6> 
                    </div>
                </div>
            
        
    </div>
    );
};


export default function App() {
    return (
      <Suspense fallback="loading">
        <InteractiveCard />
      </Suspense>
    );
  };