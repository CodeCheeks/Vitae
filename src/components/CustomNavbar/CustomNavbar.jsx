import React from 'react'
import './CustomNavbar.css'
//components
import {NavLink} from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const CustomNavbar = () => {
    return (
      <Navbar bg="light" expand="lg" >
         <Navbar.Brand>
            <NavLink to="/">
              <img src="https://www.flaticon.es/svg/vstatic/svg/375/375183.svg?token=exp=1618228619~hmac=0d7081ff838125ef7bd7414fd31b6450" width="60" height="60" className="d-inline-block align-top mx-3" alt="vitae-logo"/>
              <h4>Vitae</h4>
            </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto container d-flex justify-content-center">
          
            <NavDropdown title="Servicios" id="Servicios">
                <NavDropdown title="Terapéuticos" id="terapeuticos">
                  <NavDropdown.Item><NavLink to="/servicios/terapias/Fisioterapia" activeClassName="selected">Fisioterapia</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/terapias/psicologia" activeClassName="selected">Psicología</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/terapias/terapia-ocupacional" activeClassName="selected">Terapia Ocupacional</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/terapias/animacion" activeClassName="selected">Animación</NavLink></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Asistenciales" id="asistenciales">
                  <NavDropdown.Item><NavLink to="/servicios/asistenciales/medicina-enfermeria" activeClassName="selected">Medicina y enfermería</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/asistenciales/ayuda-domicilio" activeClassName="selected">Ayuda a domicilio</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/asistenciales/transporte" activeClassName="selected">Transporte</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/asistenciales/comedor" activeClassName="selected">Comedor</NavLink></NavDropdown.Item>
                </NavDropdown>
            </NavDropdown>

            <NavDropdown title="Especialidades" id="Especialidades">
              <NavDropdown.Item><NavLink to="/especialidades/ictus" activeClassName="selected">Ictus</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/especialidades/fracturas" activeClassName="selected">Fracturas</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/especialidades/alzheimer" activeClassName="selected">Alzheimer</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/especialidades/parkinson" activeClassName="selected">Parkinson</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/especialidades/demencias" activeClassName="selected">Demencias</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/especialidades/depresion" activeClassName="selected">Depresión</NavLink></NavDropdown.Item>
            </NavDropdown>

            <Nav.Link><NavLink to="/ayudas" activeClassName="selected">Ayudas</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/preguntas-frecuentes" activeClassName="selected">FAQs</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/sobre-nosotros" activeClassName="selected">Sobre Nosotros</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/empleo" activeClassName="selected">Empleo</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/contacto" activeClassName="selected">Contacto</NavLink></Nav.Link>

          </Nav>
          <Nav.Link><NavLink to="/area-personal" activeClassName="selected">Area Personal</NavLink></Nav.Link>

        </Navbar.Collapse>
      </Navbar>
    )
        
};

export default CustomNavbar;