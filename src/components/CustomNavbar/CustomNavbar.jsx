import React from 'react'
import './CustomNavbar.css'
//components
import {NavLink} from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


const CustomNavbar = () => { 

      
    return (
      <Navbar bg="light" expand="lg" >
         <Navbar.Brand>
            <NavLink className='link__style'to="/">
              <img src="https://pics.freeicons.io/uploads/icons/png/18081978721600459989-512.png" width="70" height="70" className="d-inline-block align-top mx-3" alt="vitae-logo"/>
              {/* <div>Iconos diseñados por <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div> */}
              <h4 className='text__style brand__logo__text link__style'>Vitae</h4>
            </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto container d-flex justify-content-center">
          
            <NavDropdown className='link__style text__style' title={<span className=" text__style">Servicios</span>} id="Servicios" className='link__style text__style' >
                <NavDropdown title={<span className="link__style text__style__sm ">Terapéuticos</span>} id="terapeuticos" className='dropdown__content'>
                  <NavDropdown.Item><NavLink to="/servicios/terapias/Fisioterapia" className='link__style__sm' activeClassName="selected">Fisioterapia</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/terapias/psicologia" className='link__style__sm' activeClassName="selected">Psicología</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/terapias/terapia-ocupacional" className='link__style__sm' activeClassName="selected">Terapia Ocupacional</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/terapias/animacion" className='link__style__sm' activeClassName="selected">Animación</NavLink></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className='link__style' title={<span className=" text__style__sm ">Asistenciales</span>} id="asistenciales">
                  <NavDropdown.Item><NavLink to="/servicios/asistenciales/medicina-enfermeria" className='link__style__sm' activeClassName="selected">Medicina y enfermería</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/asistenciales/ayuda-domicilio" className='link__style__sm' activeClassName="selected">Ayuda a domicilio</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/asistenciales/transporte" className='link__style__sm' activeClassName="selected">Transporte</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/asistenciales/comedor" className='link__style__sm' activeClassName="selected">Comedor</NavLink></NavDropdown.Item>
                </NavDropdown>
            </NavDropdown>

            <NavDropdown title={<span className="link__style text__style">Especialidades</span>} id="Especialidades" className='link__style text__style'>
              <NavDropdown.Item><NavLink to="/especialidades/ictus" className='link__style text__style__sm' activeClassName="selected">Ictus</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/especialidades/fracturas" className='link__style text__style__sm' activeClassName="selected">Fracturas</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/especialidades/alzheimer" className='link__style text__style__sm' activeClassName="selected">Alzheimer</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/especialidades/parkinson" className='link__style text__style__sm' activeClassName="selected">Parkinson</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/especialidades/demencias" className='link__style text__style__sm' activeClassName="selected">Demencias</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/especialidades/depresion" className='link__style text__style__sm' activeClassName="selected">Depresión</NavLink></NavDropdown.Item>
            </NavDropdown>

            <Nav.Link><NavLink to="/ayudas" className='link__style text__style' activeClassName="selected">Ayudas</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/preguntas-frecuentes" className='link__style text__style' activeClassName="selected">FAQs</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/sobre-nosotros" className='link__style text__style' activeClassName="selected">Sobre Nosotros</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/empleo" className='link__style text__style' activeClassName="selected">Empleo</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/contacto" className='link__style text__style' activeClassName="selected">Contacto</NavLink></Nav.Link>

          </Nav>
          <Nav.Link><NavLink to="/area-personal" activeClassName="selected" className='link__style text__style'>Area Personal</NavLink></Nav.Link>

        </Navbar.Collapse>
      </Navbar>
    )
        
};

export default CustomNavbar;