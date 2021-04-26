import React, { useEffect, useContext, useState } from 'react';
import './Reports.css'
import { UserContext } from "../../../../contexts/UserContext";
import { getReports } from "../../../../services/ElderService";


const Reports = () => {

    const { user } = useContext(UserContext);
    const {elder} = user

    const [reports, setReports] = useState(null);

    useEffect(() => {
        getReports(elder.id)
        .then(res => setReports(res))
        .catch(error => console.log(error))
    }, []);


    return (
        <div className="container">
            <h1>Informes</h1>
            {
                reports ? 
                (reports.map(report => {
                    return(
                        <div key={report.id} className="container my-5">
                            <div className="row">
                                <div className="col-8">
                                    <h3>{report.title}</h3>
                                </div>
                                <div className="col-4">
                                    <h5>{report.professional}</h5>
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
                : "loading..."
            }
        </div>
    );
};

export default Reports;







