import React from 'react'
import { Route, Switch } from 'react-router-dom'

//views
import Home from '../Views/Home/Home'

import Servicios from '../Views/Servicios/Servicios'
import Terapias from '../Views/Servicios/Terapias/Terapias'
import Asistenciales from '../Views/Servicios/Asistenciales/Asistenciales'

import Especialidades from '../Views/Especialidades/Especialidades'
import Ictus from '../Views/Especialidades/Ictus/Ictus'
import Fracturas from '../Views/Especialidades/Fracturas/Fracturas'
import Alzheimer from '../Views/Especialidades/Alzheimer/Alzheimer'
import Parkinson from '../Views/Especialidades/Parkinson/Parkinson'
import Demencias from '../Views/Especialidades/Demencias/Demencias'
import Depresion from '../Views/Especialidades/Depresion/Depresion'

import Ayudas from '../Views/Ayudas/Ayudas'
import ChequeVitae from '../Views/Ayudas/ChequeVitae/ChequeVitae'
import ChequeServicio from '../Views/Ayudas/ChequeServicio/ChequeServicio'

import FAQ from '../Views/FAQ/FAQ'
import Contacto from '../Views/Contacto/Contacto'
import Empleo from '../Views/Empleo/Empleo'
import SobreNosotros from '../Views/SobreNosotros/SobreNosotros'
import AreaPersonal from '../Views/AreaPersonal/AreaPersonal'

import NotFound from '../Views/NotFound/NotFound'

const AppRouter = () => {

    return(
        <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/servicios" component={Servicios} />
            <Route exact path="/servicios/terapias" component={Terapias} />
            <Route exact path="/servicios/asistenciales" component={Asistenciales} />

            <Route exact path="/especialidades" component={Especialidades} />
            <Route exact path="/especialidades/ictus" component={Ictus} />
            <Route exact path="/especialidades/fracturas" component={Fracturas} />
            <Route exact path="/especialidades/alzheimer" component={Alzheimer} />
            <Route exact path="/especialidades/parkinson" component={Parkinson} />
            <Route exact path="/especialidades/demencias" component={Demencias} />
            <Route exact path="/especialidades/depresion" component={Depresion} />

            <Route exact path="/ayudas" component={Ayudas} />
            <Route exact path="/ayudas/cheque-vitae" component={ChequeVitae} />
            <Route exact path="/ayudas/cheque-servicio" component={ChequeServicio} />

            <Route exact path="/preguntas-frecuentes" component={FAQ} />
            <Route exact path="/sobre-nosotros" component={SobreNosotros} />
            <Route exact path="/empleo" component={Empleo} />
            <Route exact path="/contacto" component={Contacto} />
            <Route exact path="/area-personal" component={AreaPersonal} />

            <Route component={NotFound} />
        </Switch>
    )
}

export default AppRouter