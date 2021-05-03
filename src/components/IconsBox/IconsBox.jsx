import React from 'react';
import './IconsBox.css'
const IconsBox = () => {
    return (
        <div>
            <div className="container">
                <div className="row my-5">
                    <div className="col-12 col-md-4">
                        <div className='d-flex flex-column align-items-center box__item'>
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619981849/Vitae/iconos/thinking_dvftic.png"  width='60' alt="icon"/>
                            <h5>Entrenamiento cognitivo</h5>
                            <p>Retrasa el deterioro coginitivo y favorece la memoria.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className='d-flex flex-column align-items-center box__item'>
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619979140/Vitae/iconos/speech-bubble_ap782m.png" width='60' alt="icon"/>
                            <h5>Comunicación social</h5>
                            <p>Fvorece la socialización en la comunidad.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className='d-flex flex-column align-items-center box__item'>
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978855/Vitae/iconos/clock_hmnyih.png" width='60' alt="icon"/>
                            <h5>Establecimiento de rutinas</h5>
                            <p>Mejora el descanso y la concentración durante el día.</p>
                        </div>
                    </div>
                </div>
                
                <div className="row my-5">
                    <div className="col-12 col-md-4">
                        <div className='d-flex flex-column align-items-center box__item'>
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978670/Vitae/iconos/musculo_dnwgla.png" width='60' alt="icon"/>
                            <h5>Actividad física diaria</h5>
                            <p>Disminuye el riesgo de caídas y lesiones y favorece la autonomía.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className='d-flex flex-column align-items-center box__item'>
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619978858/Vitae/iconos/confusion_xd44kr.png" width='60' alt="icon"/>
                            <h5>Atención psicológica</h5>
                            <p>Apoya la resolución de conflictos personales e interpersonales.</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className='d-flex flex-column align-items-center box__item'>
                            <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619979199/Vitae/iconos/hueso_w5gn8b.png" width='60' alt="icon"/>
                            <h5>Cuidado de la salud</h5>
                            <p>Garantiza un buen uso de la medicación y un control de salud.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IconsBox;