import React, { Suspense, useContext , useState} from 'react'

import {Link} from 'react-router-dom'

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
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState(false);

  const changeLang = ()=>{
    language ? i18n.changeLanguage('es') : i18n.changeLanguage('en')
    setLanguage(!language);
  }
   const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }

    const [show2, setShow2] = useState(false);
    const showDropdown2 = (e)=>{
        setShow2(!show2);
    }
    const hideDropdown2 = e => {
        setShow2(false);
    }

    /* const [show3, setShow3] = useState(false);
    const showDropdown3 = (e)=>{
        setShow3(!show3);
    }
    const hideDropdown3 = e => {
        setShow3(false);
    } */

    const [show4, setShow4] = useState(false);
    const showDropdown4 = (e)=>{
        setShow4(!show4);
    }
    const hideDropdown4 = e => {
        setShow4(false);
    }
      
    return (
      <Navbar bg="light" expand="lg" fixed="top" >
          <Navbar.Brand>
            <NavLink className='link__style logo__wrapper'to="/">
              <img src="https://pics.freeicons.io/uploads/icons/png/18081978721600459989-512.png" width="70" height="70" className="d-inline-block align-top mx-3" alt="vitae-logo"/>
              
              <h4 className='text__style brand__logo__text link__style'>Vitae</h4>
            </NavLink>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto container d-flex justify-content-center">
          
            <NavDropdown className='link__style text__style'  title={<span className=" text__style">{t('navbar.services.title')}</span>} id="servicios" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
                <NavDropdown drop='right'title={<span className="link__style text__style__sm ">{t('navbar.services.terapeutics.title')}</span>} id="terapeuticos" className='dropdown__content' show={show2} onMouseEnter={showDropdown2} onMouseLeave={hideDropdown2}>
                  <NavDropdown.Item><NavLink to="/servicios/terapias/fisioterapia" className='link__style link__style__sm' activeClassName="selected">{t('navbar.services.terapeutics.physiotherapy')}</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/terapias/psicologia" className='link__style link__style__sm' activeClassName="selected">{t('navbar.services.terapeutics.psychology')}</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/terapias/terapia-ocupacional" className='link__style link__style__sm' activeClassName="selected">{t('navbar.services.terapeutics.ot')}</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/terapias/animacion" className='link__style link__style__sm' activeClassName="selected">{t('navbar.services.terapeutics.recreation')}</NavLink></NavDropdown.Item>
                </NavDropdown>
                {/* <NavDropdown drop='right' className='link__style' title={<span className=" link__style text__style__sm ">{t('navbar.services.assistance.title')}</span>} id="asistenciales" show={show3} onMouseEnter={showDropdown3} onMouseLeave={hideDropdown3}>
                  <NavDropdown.Item><NavLink to="/servicios/asistenciales/medicina-enfermeria" className='link__style link__style__sm' activeClassName="selected">{t('navbar.services.assistance.medicine')}</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/asistenciales/ayuda-domicilio" className='link__style link__style__sm' activeClassName="selected">{t('navbar.services.assistance.home')}</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/asistenciales/transporte" className='link__style link__style__sm' activeClassName="selected">{t('navbar.services.assistance.transport')}</NavLink></NavDropdown.Item>
                  <NavDropdown.Item><NavLink to="/servicios/asistenciales/comedor" className='link__style link__style__sm' activeClassName="selected">{t('navbar.services.assistance.catering')}</NavLink></NavDropdown.Item>
                </NavDropdown> */}
            </NavDropdown>

            <NavDropdown title={<span className="link__style text__style">{t('navbar.specialities.title')}</span>}  className='link__style text__style' id="collasible-nav-dropdown" show={show4} onMouseEnter={showDropdown4} onMouseLeave={hideDropdown4}>
              <NavDropdown.Item><NavLink to="/especialidades/ictus" className='link__style text__style__sm' activeClassName="selected">{t('navbar.specialities.ictus')}</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/especialidades/fracturas" className='link__style text__style__sm' activeClassName="selected">{t('navbar.specialities.fractures')}</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/especialidades/alzheimer" className='link__style text__style__sm' activeClassName="selected">{t('navbar.specialities.alzheimer')}</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/especialidades/parkinson" className='link__style text__style__sm' activeClassName="selected">{t('navbar.specialities.parkinson')}</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/especialidades/demencias" className='link__style text__style__sm' activeClassName="selected">{t('navbar.specialities.dementia')}</NavLink></NavDropdown.Item>
              <NavDropdown.Item><NavLink to="/especialidades/depresion" className='link__style text__style__sm' activeClassName="selected">{t('navbar.specialities.depression')}</NavLink></NavDropdown.Item>
            </NavDropdown>

        
            <NavLink to="/ayudas/cheque-servicio" className='link__style text__style' activeClassName="selected">{t('navbar.aids.title')}</NavLink>
            <NavLink to="/preguntas-frecuentes" className='link__style text__style' activeClassName="selected">{t('navbar.faq')}</NavLink>
            <NavLink to="/sobre-nosotros" className='link__style text__style' activeClassName="selected">{t('navbar.about')}</NavLink>
            <NavLink to="/empleo" className='link__style text__style' activeClassName="selected">{t('navbar.jobs')}</NavLink>
            

          </Nav>
            <div className='right__nav__block'>
              {language  ? <Link to="#" onClick={ changeLang} className=" link__style text__style  ">EN</Link> : <Link to="#" onClick={changeLang} className=" link__style text__style ">ES</Link>}
            </div>
            <div className='right__nav__block'>
              {user && (<NavLink to="/area-personal" className='link__style text__style ml-4 d-block'>{t('navbar.area')}</NavLink>)}
            </div>
          
          {!user ? 
          
            (<NavLink to="/iniciar-sesion" activeClassName="selected" className='link__style text__style custom__width'>{t('navbar.login')}</NavLink>)
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