import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { UserContext } from "../../contexts/UserContext";

//views
import Home from '../Views/Home/Home'

import Servicios from '../Views/Servicios/Servicios'
import Terapias from '../Views/Servicios/Terapias/Terapias'
import Fisioterapia from '../Views/Servicios/Terapias/Fisioterapia/Fisioterapia'
import TerapiaOcupacional from '../Views/Servicios/Terapias/TerapiaOcupacional/TerapiaOcupacional'
import Psicologia from '../Views/Servicios/Terapias/Psicologia/Psicologia'
import Animacion from '../Views/Servicios/Terapias/Animacion/Animacion'
import Asistenciales from '../Views/Servicios/Asistenciales/Asistenciales'
import MedicinaEnfermeria from '../Views/Servicios/Asistenciales/MedicinaEnfermeria/MedicinaEnfermeria'
import AyudaDomicilio from '../Views/Servicios/Asistenciales/AyudaDomicilio/AyudaDomicilio'
import Transporte from '../Views/Servicios/Asistenciales/Transporte/Transporte'
import Comedor from '../Views/Servicios/Asistenciales/Comedor/Comedor'

import Especialidades from '../Views/Especialidades/Especialidades'
import Ictus from '../Views/Especialidades/Ictus/Ictus'
import Fracturas from '../Views/Especialidades/Fracturas/Fracturas'
import Alzheimer from '../Views/Especialidades/Alzheimer/Alzheimer'
import Parkinson from '../Views/Especialidades/Parkinson/Parkinson'
import Demencias from '../Views/Especialidades/Demencias/Demencias'
import Depresion from '../Views/Especialidades/Depresion/Depresion'

import Aids from '../Views/Aids/Aids'
import ChequeVitae from '../Views/Aids/ChequeVitae/ChequeVitae'
import ChequeServicio from '../Views/Aids/ChequeServicio/ChequeServicio'

import FAQ from '../Views/FAQ/FAQ'
import Contacto from '../Views/Contacto/Contacto'
import Employment from '../Views/Employment/Employment'
import About from '../Views/About/About'
import Login from '../Views/Login/Login'
import PersonalArea from '../Views/PersonalArea/PersonalArea'
import NotFound from '../Views/NotFound/NotFound'
import Profile from '../Views/PersonalArea/Profile/Profile';
import Messages from '../Views/PersonalArea/Messages/Messages';
import Professionals from '../Views/PersonalArea/Professionals/Professionals';
import Activities from '../Views/PersonalArea/Activities/Activities';
import Reports from '../Views/PersonalArea/Reports/Reports';
import Gallery from '../Views/PersonalArea/Gallery/Gallery';
import Activate from '../Views/Activate/Activate';
import RecoverPass from '../Views/RecoverPass/RecoverPass';
import DoRecoverPass from '../Views/RecoverPass/DoRecoverPass';



const AppRouter = () => {

    const { user } = useContext(UserContext);

    return(
        <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/servicios" component={Servicios} />
            <Route exact path="/servicios/terapias" component={Terapias} />
            <Route exact path="/servicios/terapias/fisioterapia" component={Fisioterapia} />
            <Route exact path="/servicios/terapias/terapia-ocupacional" component={TerapiaOcupacional} />
            <Route exact path="/servicios/terapias/psicologia" component={Psicologia} />
            <Route exact path="/servicios/terapias/animacion" component={Animacion} />
            <Route exact path="/servicios/asistenciales" component={Asistenciales} />
            <Route exact path="/servicios/asistenciales/medicina-enfermeria" component={MedicinaEnfermeria} />
            <Route exact path="/servicios/asistenciales/ayuda-domicilio" component={AyudaDomicilio} />
            <Route exact path="/servicios/asistenciales/transporte" component={Transporte} />
            <Route exact path="/servicios/asistenciales/comedor" component={Comedor} />

            <Route exact path="/especialidades" component={Especialidades} />
            <Route exact path="/especialidades/ictus" component={Ictus} />
            <Route exact path="/especialidades/fracturas" component={Fracturas} />
            <Route exact path="/especialidades/alzheimer" component={Alzheimer} />
            <Route exact path="/especialidades/parkinson" component={Parkinson} />
            <Route exact path="/especialidades/demencias" component={Demencias} />
            <Route exact path="/especialidades/depresion" component={Depresion} />

            <Route exact path="/ayudas" component={Aids} />
            <Route exact path="/ayudas/cheque-vitae" component={ChequeVitae} />
            <Route exact path="/ayudas/cheque-servicio" component={ChequeServicio} />

            <Route exact path="/preguntas-frecuentes" component={FAQ} />
            <Route exact path="/sobre-nosotros" component={About} />
            <Route exact path="/empleo" component={Employment} />
            <Route exact path="/contacto" component={Contacto} />
            <Route exact path="/activate/:token" component={Activate} />
            <Route exact path="/recuperar-contraseña/:token" component={DoRecoverPass} />
            <Route exact path="/recuperar-contraseña" component={RecoverPass} />




            <Route exact path="/iniciar-sesion"  >
                {user ? <Redirect to="/area-personal" /> : <Login/>}
            </Route>
            <Route exact path="/area-personal">
                {!user ? <Redirect to="/iniciar-sesion" /> : <PersonalArea/>}
            </Route>
            <Route exact path="/area-personal/perfil">
                {!user ? <Redirect to="/iniciar-sesion" /> : <Profile/>}
            </Route>
            <Route exact path="/area-personal/mensajes">
                {!user ? <Redirect to="/iniciar-sesion" /> : <Messages/>}
            </Route>
            <Route exact path="/area-personal/profesionales">
                {!user ? <Redirect to="/iniciar-sesion" /> : <Professionals/>}
            </Route>
            <Route exact path="/area-personal/actividades">
                {!user ? <Redirect to="/iniciar-sesion" /> : <Activities/>}
            </Route>
            <Route exact path="/area-personal/informes">
                {!user ? <Redirect to="/iniciar-sesion" /> : <Reports/>}
            </Route>
            <Route exact path="/area-personal/galeria">
                {!user ? <Redirect to="/iniciar-sesion" /> : <Gallery/>}
            </Route>

            <Route component={NotFound} />
        </Switch>
    )
}

export default AppRouter