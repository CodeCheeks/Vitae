import React from 'react';
import Carousel from '../../Carousel/Carousel';
import ContactForm from '../../Forms/ContactForm/ContactForm';
import IconsBox from '../../IconsBox/IconsBox';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="container-fluid ">
                <div className="row home__sec__1 ">
                    <div className=" col-5 home__title d-flex align-items-start justify-content-start ml-5 mt-3">
                        <h1>Vitae </h1>
                        <h6>Tu centro de día de confianza</h6>
                    </div>
                    <div className=" col-6 contact__form d-flex align-items-center justify-content-center">
                        <ContactForm/>
                    </div>
                </div>
                <div className="row home__sec__2">
                    <div className="col-6 d-flex align-items-center home__subsec__1">
                        <div className='container'>
                            <div className='row d-flex flex-wrap justify-content-around my-5 py-5'>
                                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619974963/Vitae/iconos/kit-de-primeros-auxilios_rq3jqf.png" alt="" width='150'/>
                                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619974867/Vitae/iconos/enfermero_danavq.png" alt="" width='150'/>
                                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619974867/Vitae/iconos/caminante_uz1aug.png" alt="" width='150'/>
                            </div>
                            <div className='row d-flex flex-wrap justify-content-around align-items-center my-5 py-5'>
                                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619974867/Vitae/iconos/piezas-de-ajedrez_ae15hb.png" alt="" width='150'/>
                                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619974867/Vitae/iconos/bingo_mibfla.png" alt="" width='150'/>
                                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1619974963/Vitae/iconos/inodoro_ekjixy.png" alt="" width='150'/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-6 px-5 py-5 d-flex flex-column justify-content-center align-content-center">
                        <h3>Contamos con un equipo multidisciplinar</h3>
                        <div className='mt-3'>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptatibus dignissimos officiis tempora consequatur laborum delectus adipisci, rem quae provident quisquam cumque facilis esse, ipsum error? Mollitia cumque magni aperiam! </p>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptatibus dignissimos officiis tempora consequatur laborum delectus adipisci, rem quae provident quisquam cumque facilis esse, ipsum error? Mollitia cumque magni aperiam! </p>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptatibus dignissimos officiis tempora consequatur laborum delectus adipisci, rem quae provident quisquam cumque facilis esse, ipsum error? Mollitia cumque magni aperiam! </p>
                        </div>
                    </div>
                </div>
                <div className="row home__sec__3 py-5">
                    <div className="col-12 d-flex flex-column align-items-center mt-5">
                        <div className="row my-3">
                            <h2>Por qué elegir vitae</h2>
                        </div>
                        <div className="row">
                            <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus voluptatem distinctio at molestiae exercitationem vel sint vero iste praesentium officia consectetur blanditiis ipsam nemo laboriosam, earum culpa amet dolore nobis!</h6>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <IconsBox/>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className='container my-5'>
                    <div className="row d-flex justify-content-center home__sec__4">
                        <h2 className='my-5'>Nuestro equipo </h2>
                    </div>
                    <Carousel/>
                </div>
                <div className="row home__sec__5 py-5 ">
                    <div className="col-10 col-lg-4 ">
                        <h4>Preguntas frecuentes</h4>
                    </div>
                    <div className="col-10 col-lg-4 ">
                        <h4>Consulta el programa de ayudas municipales</h4>
                    </div>
                    <div className="col-10 col-lg-4 ">
                        <h4>Conoce más sobre nosotros</h4>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Home;