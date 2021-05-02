import React from 'react';
import Carousel from '../../Carousel/Carousel';
import ContactForm from '../../Forms/ContactForm/ContactForm';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="container-fluid ">
                <div className="row home__sec__1 d-flex align-items-center justify-content-center">
                    <div className=" col-5 home__title">
                        <h1>Vitae </h1>
                        <h6>Tu centro de día de confianza</h6>
                    </div>
                    <div className=" col-4 contact__form">
                        <ContactForm/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 home__subsec__1">
                        
                    </div>
                    <div className="col-6 px-5 py-5">
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptatibus dignissimos officiis tempora consequatur laborum delectus adipisci, rem quae provident quisquam cumque facilis esse, ipsum error? Mollitia cumque magni aperiam! </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptatibus dignissimos officiis tempora consequatur laborum delectus adipisci, rem quae provident quisquam cumque facilis esse, ipsum error? Mollitia cumque magni aperiam! </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, voluptatibus dignissimos officiis tempora consequatur laborum delectus adipisci, rem quae provident quisquam cumque facilis esse, ipsum error? Mollitia cumque magni aperiam! </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;