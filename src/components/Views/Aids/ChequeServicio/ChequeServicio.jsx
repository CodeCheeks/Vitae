import './ChequeServicio.css'

import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import { Table } from 'react-bootstrap';

const ChequeServicio = () => {
    
    const { t } = useTranslation();
    return (
        <div className="container">
            <div className="row ">
                <div className="col">
                    <div className="h1">{t('aids.service.what.title')}</div>
                    <p>{t('aids.service.what.paragraph')}</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="h1">{t('aids.service.requirements.title')}</div>
                <div className="col">
                    <ul>
                        <li>{t('aids.service.requirements.1')}</li>
                        <li>{t('aids.service.requirements.2')}</li>
                        <li>{t('aids.service.requirements.3')}</li>
                        <li>{t('aids.service.requirements.4')}</li>
                    </ul>
                </div>
                <div className="col d-none d-sm-none d-lg-block">
                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1618920455/Vitae/imagenes/ayudas/cheque-dependencia_fhks4g.png" className="" alt="cheque-dependencia"/>
                </div>
            </div>
            <div className="row">
                    <h1>{t('aids.service.how.title')}</h1>
                    <p>{t('aids.service.how.paragraph')}</p>
                    <div className="row">
                        <div className="col-lg-4 d-none d-sm-none d-lg-block">
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1618993968/Vitae/imagenes/ayudas/documentation-aids_wmv3em.png" alt="documentation"/>
                        </div>
                        <div className="col-12 col-lg-8">
                            <ul>
                                <li>{t('aids.service.how.documentation.1')}</li>
                                <li>{t('aids.service.how.documentation.2')}</li>
                                <li>{t('aids.service.how.documentation.3')}</li>
                                <li>{t('aids.service.how.documentation.4')}</li>
                                <li>{t('aids.service.how.documentation.5')}</li>     
                                <li>{t('aids.service.how.documentation.6')}</li>
                                <li>{t('aids.service.how.documentation.7')}</li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="h1">{t('aids.service.valuation.title')}</div>
                    <p>{t('aids.service.valuation.paragraph')}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <ul>
                        <li><b>{t('aids.service.grades.1.title')}</b> {t('aids.service.grades.1.paragraph')}</li>
                        <li><b>{t('aids.service.grades.2.title')}</b> {t('aids.service.grades.2.paragraph')}</li>
                        <li><b>{t('aids.service.grades.3.title')}</b> {t('aids.service.grades.3.paragraph')}</li>
                    </ul>
                </div>
                <div className="col d-none d-sm-none d-lg-block">
                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1618993553/Vitae/imagenes/ayudas/dependance_vvvdsr.jpg" alt="grades"/>
                </div>
            </div>
            <div className="row">
                <h1>{t('aids.service.attention.title')}</h1>
                <ul>
                    <li>{t('aids.service.attention.1')}</li>
                    <li>{t('aids.service.attention.2')}</li>
                    <li>{t('aids.service.attention.3')}</li>
                    <li>{t('aids.service.attention.4')}</li>
                    <li>{t('aids.service.attention.5')}</li>
                </ul>   
            </div>
            <div className="row">
                <div className="row">
                    <h1>{t('aids.service.pia.title')}</h1>
                </div>
                <div className="row">
                    <div className="col-4 d-none d-sm-none d-lg-block">
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1618995706/Vitae/imagenes/ayudas/money-aids_oqhukw.jpg" alt="money-aid"/>
                    </div>
                    <div className="col-8">
                        <p>{t('aids.service.pia.paragraph')}</p>
                        <ul>
                            <li>{t('aids.service.money.paragraph1')}</li>
                            <li>{t('aids.service.money.paragraph2')}</li>
                            <li>{t('aids.service.money.paragraph3')}</li>
                        </ul>  
                        <div className="col">
                            <Table striped bordered size="sm">
                                <thead>
                                    <tr>
                                        <th>{t('aids.service.table.row1.col1')}</th>
                                        <th>{t('aids.service.table.row1.col2')}</th>
                                        <th>{t('aids.service.table.row1.col3')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{t('aids.service.table.col1')}</td>
                                        <td>300€</td>
                                        <td>300€</td>
                                    </tr>
                                    <tr>
                                        <td>{t('aids.service.table.col2')}</td>
                                        <td>300€</td>
                                        <td>426.12€</td>
                                    </tr>
                                    <tr>
                                        <td>{t('aids.service.table.col3')}</td>
                                        <td>429.04€</td>
                                        <td>715.07€</td>
                                    </tr>
                                </tbody>
                            </Table>
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
        <ChequeServicio />
      </Suspense>
    );
  }