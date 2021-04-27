import React, { Suspense, useContext } from 'react'
import './CustomNavbar.css'
//components
import {NavLink} from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { UserContext } from "../../contexts/UserContext";
import { useTranslation } from 'react-i18next';
import { logout } from "../../store/AccessTokenStore";

const CustomNavbar = () => { 
  const { user } = useContext(UserContext);
  const { t } = useTranslation();

      
    return (
      <Navbar bg="light" expand="lg" fixed="top" >
          <Navbar.Brand>
            <NavLink className='link__style logo__wrapper'to="/">
              <img src="https://pics.freeicons.io/uploads/icons/png/18081978721600459989-512.png" width="70" height="70" className="d-inline-block align-top mx-3" alt="vitae-logo"/>
              {/* <div>Iconos diseñados por <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.es/" title="Flaticon">www.flaticon.es</a></div> */}
              <h4 className='text__style brand__logo__text link__style'>Vitae</h4>
            </NavLink>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto container d-flex justify-content-center">
          
            <NavDropdown className='link__style text__style' title={<span className=" text__style">{t('navbar.services.title')}</span>} id="Servicios">
                <NavDropdown title={<span className="link__style text__style__sm ">{t('navbar.services.terapeutics.title')}</span>} id="terapeuticos" className='dropdown__content'>
                  <NavDropdown.Item><NavLink to="/servicios/terapias/fisioterapia" className='link__style__sm' activeClassName="selected">{t('navbar.services.terapeutics.physiotherapy')}</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/terapias/psicologia" className='link__style__sm' activeClassName="selected">{t('navbar.services.terapeutics.psychology')}</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/terapias/terapia-ocupacional" className='link__style__sm' activeClassName="selected">{t('navbar.services.terapeutics.ot')}</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/terapias/animacion" className='link__style__sm' activeClassName="selected">{t('navbar.services.terapeutics.recreation')}</NavLink></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown className='link__style' title={<span className=" text__style__sm ">{t('navbar.services.assistance.title')}</span>} id="asistenciales">
                  <NavDropdown.Item><NavLink to="/servicios/asistenciales/medicina-enfermeria" className='link__style__sm' activeClassName="selected">{t('navbar.services.assistance.medicine')}</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/asistenciales/ayuda-domicilio" className='link__style__sm' activeClassName="selected">{t('navbar.services.assistance.home')}</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/asistenciales/transporte" className='link__style__sm' activeClassName="selected">{t('navbar.services.assistance.transport')}</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/asistenciales/comedor" className='link__style__sm' activeClassName="selected">{t('navbar.services.assistance.catering')}</NavLink></NavDropdown.Item>
                </NavDropdown>
            </NavDropdown>

            <NavDropdown title={<span className="link__style text__style">{t('navbar.specialities.title')}</span>} id="Especialidades" className='link__style text__style'>
              <NavDropdown.Item><NavLink to="/especialidades/ictus" className='link__style text__style__sm' activeClassName="selected">{t('navbar.specialities.ictus')}</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/especialidades/fracturas" className='link__style text__style__sm' activeClassName="selected">{t('navbar.specialities.fractures')}</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/especialidades/alzheimer" className='link__style text__style__sm' activeClassName="selected">{t('navbar.specialities.alzheimer')}</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/especialidades/parkinson" className='link__style text__style__sm' activeClassName="selected">{t('navbar.specialities.parkinson')}</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/especialidades/demencias" className='link__style text__style__sm' activeClassName="selected">{t('navbar.specialities.dementia')}</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/especialidades/depresion" className='link__style text__style__sm' activeClassName="selected">{t('navbar.specialities.depression')}</NavLink></NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<span className="link__style text__style">{t('navbar.aids.title')}</span>} id="Aids" className='link__style text__style'>
              <NavDropdown.Item><NavLink to="/ayudas/cheque-vitae" className='link__style text__style__sm' activeClassName="selected">{t('navbar.aids.vitae')}</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/ayudas/cheque-servicio" className='link__style text__style__sm' activeClassName="selected">{t('navbar.aids.dependence')}</NavLink></NavDropdown.Item>
            </NavDropdown>

            <NavLink to="/preguntas-frecuentes" className='link__style text__style' activeClassName="selected">{t('navbar.faq')}</NavLink>
            <NavLink to="/sobre-nosotros" className='link__style text__style' activeClassName="selected">{t('navbar.about')}</NavLink>
            <NavLink to="/empleo" className='link__style text__style' activeClassName="selected">{t('navbar.jobs')}</NavLink>
            <NavLink to="/contacto" className='link__style text__style' activeClassName="selected">{t('navbar.contact')}</NavLink>

          </Nav>
          {user && (<NavLink to="/area-personal" className='link__style text__style'>{t('navbar.area')}</NavLink>)}
          {!user ? 
            (<NavLink to="/iniciar-sesion" activeClassName="selected" className='link__style text__style'>{t('navbar.login')}</NavLink>)
          :
            (<NavLink to="/" onClick={logout} className='link__style text__style'>{t('navbar.logout')}</NavLink>)
          }
        </Navbar.Collapse>
      </Navbar>
    )
        
};

export default function App() {
  return (
    <Suspense fallback="loading">
      <CustomNavbar />
    </Suspense>
  );
}