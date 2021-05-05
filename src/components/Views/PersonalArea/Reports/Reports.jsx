import React, { useEffect, useContext, useState } from 'react';
import './Reports.css'
import { UserContext } from "../../../../contexts/UserContext";
import { getReports } from "../../../../services/ElderService";
import {  Spinner } from 'react-bootstrap'

const Reports = () => {

    const { user } = useContext(UserContext);
    const {elder} = user

    const [reports, setReports] = useState(null);

    useEffect(() => {
        getReports(elder.id)
        .then(res => setReports(res))
        .catch(error => console.log(error))
    }, [elder.id]);


    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className='text-center main__title'>
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620034340/Vitae/iconos/document_f08uxb.png" className='mx-2  ' alt="reports" width='80'/>
                        Informes de {elder.firstname} {elder.lastname}
                    </h1>
                </div>
            </div>
            
            {
                reports ? 
                
                (reports.sort(function(a,b){return new Date(b.createdAt) - new Date(a.createdAt);}).map(report => {
                    return(
                        
                        <div key={report.id} className="container grey__container my-5">
                            <div className="row ">
                                <div className="col">
                                    <h3>{report.title}</h3>
                                </div>
                                <div className="col-12 col-lg-4">
                                    { <h6><b>Profesional:</b> {report.professional.firstname} {report.professional.lastname}, {report.professional.occupation}</h6> }
                                    {<h6><b>Fecha:</b> {report.createdAt.split('T').join(' a las ').split('.',1)}</h6>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <p>{report.description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })) 
                : (<Spinner className="m-5" animation="border" role="status" variant="info">
                    <span className="sr-only">Loading...</span>
                    </Spinner>)
            }
        </div>
    );
};

export default Reports;







