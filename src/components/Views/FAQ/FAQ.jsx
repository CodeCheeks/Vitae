import React, { Suspense } from 'react';
import './FAQ.css'
import { useTranslation } from 'react-i18next';
import { Accordion, Card } from 'react-bootstrap';


const FAQ = () => {
    const { t } = useTranslation();

    const clickhandler = () => {
        console.log("click")
    }

    const getFaq = () => {
        let faqs = []
        for(let i=1; i<23; i++){
            faqs.push(
                <Accordion className="my-1">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey={i} className="accordion__style" onClick={clickhandler}>
                            <h4 className="text-center title__style">{t(`faq.${i}.ask`)}</h4>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey={i} className="">
                            <Card.Body>
                                <p className="answer__style">{t(`faq.${i}.answer`)}</p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            )
        }
        return faqs
    }

    return (
        <div className="container">
            {getFaq()}
        </div>
    );
};

export default function App() {
    return (
      <Suspense fallback="loading">
        <FAQ />
      </Suspense>
    );
  }
