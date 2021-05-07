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
                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620408443/Vitae/avatares/Profesionales/avataaars_17_big76a.png" className="figure-img img-fluid rounded" width='320' alt="A generic square placeholder."/>
                <h4 className="text-center" >Olaya del Castillo</h4>
                <h5 className="text-center">Directora General</h5>
              </div>
            </div>
            <div className="container">
              <div className="col custom__border">
                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620408238/Vitae/avatares/Profesionales/avataaars_12_mvvhtq.png" className="figure-img img-fluid rounded" width='320' alt="A generic square placeholder."/>
                <h4 className="text-center">Triana Barba</h4>
                <h5 className="text-center">Dirección de Centros y Terapeuta Ocupacional</h5>
              </div>
            </div>
            <div className="container">
              <div className="col custom__border">
                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620408238/Vitae/avatares/Profesionales/avataaars_13_oi7eja.png" className="figure-img img-fluid rounded" width='320' alt="A generic square placeholder."/>
                <h4 className="text-center">Patricio Fariña</h4>
                <h5 className="text-center">Médico</h5>
              </div>
            </div>
            <div className="container">
              <div className="col custom__border">
                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620408238/Vitae/avatares/Profesionales/avataaars_16_bk9w56.png" className="figure-img img-fluid rounded" width='320' alt="A generic square placeholder."/>
                <h4 className="text-center">Maravillas Belda</h4>
                <h5 className="text-center">Trabajador social y Técnico en cuidados auxiliares de enfermería</h5>
              </div>
            </div>
            <div className="container">
              <div className="col custom__border">
                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620408238/Vitae/avatares/Profesionales/avataaars_15_fhi6iy.png" className="figure-img img-fluid rounded" width='320' alt="A generic square placeholder."/>
                <h4 className="text-center">Poncio Pilates</h4>
                <h5 className="text-center">Neuropsicólogo</h5>
              </div>
            </div>
            <div className="container">
              <div className="col custom__border">
                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620408237/Vitae/avatares/Profesionales/avataaars_7_czzjip.png" className="figure-img img-fluid rounded" width='320' alt="A generic square placeholder."/>
                <h4 className="text-center">Cintia Arribas</h4>
                <h5 className="text-center">Neuropsicóloga</h5>
              </div>
            </div>
            <div className="container">
              <div className="col custom__border">
                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620408237/Vitae/avatares/Profesionales/avataaars_6_lklwg1.png" className="figure-img img-fluid rounded" width='320' alt="A generic square placeholder."/>
                <h4 className="text-center">Irene Requena</h4>
                <h5 className="text-center">Terapeuta Ocupacional</h5>
              </div>
            </div>
            <div className="container">
              <div className="col custom__border">
                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620408237/Vitae/avatares/Profesionales/avataaars_8_ucpkre.png" className="figure-img img-fluid rounded"  width='320'alt="A generic square placeholder."/>
                <h4 className="text-center">Sabina Antunez</h4>
                <h5 className="text-center">Fisioterapeuta</h5>
              </div>
            </div>
            <div className="container">
              <div className="col custom__border">
                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620408237/Vitae/avatares/Profesionales/avataaars_14_gcbe24.png" className="figure-img img-fluid rounded" width='320' alt="A generic square placeholder."/>
                <h4 className="text-center">Sarik Taboada</h4>
                <h5 className="text-center">Fisioterapeuta</h5>
              </div>
            </div>
            <div className="container">
              <div className="col custom__border">
                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620408237/Vitae/avatares/Profesionales/avataaars_10_my3aj9.png" className="figure-img img-fluid rounded" width='320' alt="A generic square placeholder."/>
                <h4 className="text-center">Isabel Mohamed</h4>
                <h5 className="text-center">Auxiliar de Enfermería</h5>
              </div>
            </div>
            <div className="container">
              <div className="col custom__border">
                <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620408237/Vitae/avatares/Profesionales/avataaars_11_l3y3jl.png" className="figure-img img-fluid rounded" width='320' alt="A generic square placeholder."/>
                <h4 className="text-center">Diana Infante</h4>
                <h5 className="text-center">Auxiliar de Enfermería</h5>
              </div>
            </div>
        </Slider>
    );
  }
}
