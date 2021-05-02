import React, { Component } from "react";
import Slider from "react-slick";

import './Carousel.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class Carousel extends Component {


  getProfessionals(){
    
  }

  render() {
    var settings = {
      autoplay:true,
      autoplaySpeed: 10000,
      dots: false,
      focusOnSelect:true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1400,
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
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };
    return (
        <Slider {...settings}>
            <div className="container ">
              <div className="col custom__border">
                <img src="http://via.placeholder.com/320x250" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                <h4 className="text-center" >Olaya del Castillo</h4>
                <h5 className="text-center">Directora General</h5>
              </div>
            </div>
            <div className="container">
              <div className="col custom__border">
                <img src="http://via.placeholder.com/320x250" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                <h4 className="text-center">Triana Barba</h4>
                <h5 className="text-center">Dirección de Centros y Terapeuta Ocupacional</h5>
              </div>
            </div>
            <div className="container">
              <div className="col custom__border">
                <img src="http://via.placeholder.com/320x250" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                <h4 className="text-center">Patricio Fariña</h4>
                <h5 className="text-center">Médico</h5>
              </div>
            </div>
            <div className="container">
              <div className="col custom__border">
                <img src="http://via.placeholder.com/320x250" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                <h4 className="text-center">Maravillas Belda</h4>
                <h5 className="text-center">Trabajador social y Técnico en cuidados auxiliares de enfermería</h5>
              </div>
            </div>
            <div className="container">
              <div className="col custom__border">
                <img src="http://via.placeholder.com/320x250" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                <h4 className="text-center">Poncio Pilates</h4>
                <h5 className="text-center">Neuropsicólogo</h5>
              </div>
            </div>
            <div className="container">
              <div className="col custom__border">
                <img src="http://via.placeholder.com/320x250" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                <h4 className="text-center">Cintia Arribas</h4>
                <h5 className="text-center">Neuropsicóloga</h5>
              </div>
            </div>
            <div className="container">
              <div className="col custom__border">
                <img src="http://via.placeholder.com/320x250" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                <h4 className="text-center">Irene Requena</h4>
                <h5 className="text-center">Terapeuta Ocupacional</h5>
              </div>
            </div>
            <div className="container">
              <div className="col custom__border">
                <img src="http://via.placeholder.com/320x250" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                <h4 className="text-center">Sabina Antunez</h4>
                <h5 className="text-center">Fisioterapeuta</h5>
              </div>
            </div>
            <div className="container">
              <div className="col custom__border">
                <img src="http://via.placeholder.com/320x250" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                <h4 className="text-center">César Taboada</h4>
                <h5 className="text-center">Fisioterapeuta</h5>
              </div>
            </div>
            <div className="container">
              <div className="col custom__border">
                <img src="http://via.placeholder.com/320x250" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                <h4 className="text-center">Isabel Mohamed</h4>
                <h5 className="text-center">Auxiliar de Enfermería</h5>
              </div>
            </div>
            <div className="container">
              <div className="col custom__border">
                <img src="http://via.placeholder.com/320x250" className="figure-img img-fluid rounded" alt="A generic square placeholder."/>
                <h4 className="text-center">Domingo Infante</h4>
                <h5 className="text-center">Auxiliar de Enfermería</h5>
              </div>
            </div>
        </Slider>
    );
  }
}
