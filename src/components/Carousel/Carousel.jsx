import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class Carousel extends Component {
  render() {
    var settings = {
      autoplay:true,
      autoplaySpeed: 10000,
      dots: true,
      focusOnSelect:true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            accessibility:true,
          }
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };
    return (
        <Slider {...settings}>
            <div className="container">
                    <div className="col">
                        <img src="http://via.placeholder.com/320x250" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                        <h5>Directora</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
            </div>
            <div className="container ">
                    <div className="col">
                        <img src="http://via.placeholder.com/320x250" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                        <h5>Médico</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
            </div>
            <div className="container">
                    <div className="col">
                        <img src="http://via.placeholder.com/320x250" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                        <h5>Coordinador</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
            </div>
            <div className="container">
                    <div className="col">
                        <img src="http://via.placeholder.com/320x250" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                        <h5>Enfermera</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
            </div>
            <div className="container">
                    <div className="col">
                        <img src="http://via.placeholder.com/320x250" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                        <h5>Psicóloga</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
            </div>
            <div className="container">
                    <div className="col">
                        <img src="http://via.placeholder.com/320x250" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                        <h5>Fisioterapeuta</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
            </div>
            <div className="container">
                    <div className="col">
                        <img src="http://via.placeholder.com/320x250" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                        <h5>Auxiliar</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
            </div>
            <div className="container">
                    <div className="col">
                        <img src="http://via.placeholder.com/320x250" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                        <h5>Auxiliar</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
            </div>
        </Slider>
    );
  }
}
