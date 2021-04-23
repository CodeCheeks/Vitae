import React, { Suspense } from 'react';
import './About.css'

import { useTranslation } from 'react-i18next';


const About = () => {
    const { t } = useTranslation();

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <p>{t('about.paragraph1')}</p>
                </div>
            </div>
            
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