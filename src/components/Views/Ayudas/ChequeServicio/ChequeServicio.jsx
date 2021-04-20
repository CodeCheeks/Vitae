import {  Accordion, Button, Card } from 'react-bootstrap';

import './ChequeServicio.css'



const ChequeServicio = () => {

    return (
        <div className="container">
            <div className="row ">
                <div className="col">
                    <div className="h1">¿Qué es la dependencia?</div>
                    <p>La dependencia es el estado de carácter permanente en que se encuentran las personas que, por razones derivadas de la edad, la enfermedad o la discapacidad, precisan de la atención de otra persona o ayudas importantes para realizar las actividades básicas de la vida diaria.La Ley de Promoción de la Autonomía Personal y Atención a las personas en situación de Dependencia reconoce a los ciudadanos el derecho a la promoción de la autonomía personal y la atención a las personas dependientes.</p>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="h1">Requisitos para ser reconocido en situación de dependencia</div>
                <div className="col">
                    <ul>
                        <li>Necesitar de la atención de otra u otras personas o ayudas importantes para realizar las actividades básicas de la vida diaria.</li>
                        <li>Residir legalmente en territorio español y haberlo hecho durante cinco años, de los cuales dos deberán ser inmediatamente anteriores a la fecha de presentación de la solicitud ( a excepción de los emigrantes retornados). Para los menores de cinco años el periodo de residencia se exigirá a quien ejerza su guarda y custodia.</li>
                        <li>Residir en la Comunidad de Madrid en la fecha en que presenten la solicitud de reconocimiento de la situación de dependencia.</li>
                        <li>Las personas que carezcan de nacionalidad española se regirán por lo establecido en la Ley Orgánica 4/2000, de 11 de enero, en los tratados internacionales y en los convenios que se establezcan con el país de origen. En el caso de tratarse de menores se estará a lo dispuesto en las leyes del Menor.</li>
                    </ul>
                </div>
                <div className="col">
                    <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1618920455/Vitae/imagenes/ayudas/cheque-dependencia_fhks4g.png" alt="cheque-dependencia"/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="h1">¿Cómo solicito la dependencia?</div>
                    <p>El procedimiento se inicia a instancia del interesado a través de los Servicios Sociales del ayuntamiento en el que esté empadronado. Tras cumplimentar la solicitud y aportar la documentación necesaria, la Dirección General de Atención al Mayor y la Dependencia se pondrá en contacto con el interesado para fijar el día y la hora de la valoración.</p>
                    <Accordion defaultActiveKey="0" className="container-fluid">
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">Documentación necesaria</Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <ul>
                                        <li>Copia del DNI/NIE del solicitante o autorización para su consulta.</li>
                                        <li>En su caso, copia del DNI/NIE del representante o autorización para su consulta.</li>
                                        <li>Documento/s emitido/s por los ayuntamientos correspondientes que acrediten la residencia en territorio español durante cinco años, de los cuales, dos deberán ser inmediatamente anteriores a la fecha de presentación de la solicitud, así como el empadronamiento en un municipio de la Comunidad de Madrid en la fecha de presentación la solicitud.</li>
                                        <li>Los residentes no comunitarios que carezcan de la nacionalidad española deberán presentar certificado emitido por el Ministerio del Interior que acredite la residencia legal en España por los mismos períodos, así como el empadronamiento en un municipio de la Comunidad de Madrid en la fecha de la presentación de la solicitud.</li>
                                        <li>Informe de salud, que deberá estar elaborado en modelo normalizado y suscrito por un médico colegiado. Dicho informe, en el que se recogerá la patología principal que ocasiona la dependencia, no podrá tener una antigüedad superior a tres meses respecto a la fecha de presentación la solicitud.</li>     
                                        <li>En su caso, copia de la resolución de reconocimiento del complemento de gran invalidez u otro documento que acredite que el solicitante sea pensionista de gran invalidez. Asimismo, si procede, copia de la resolución de reconocimiento del grado de discapacidad. Declaración responsable sobre la capacidad económica y patrimonial del solicitante.</li>
                                        <li>Autorización de comprobación, por parte de las administraciones públicas competentes, de los datos necesarios para la determinación de la capacidad económica y el reconocimiento del derecho a los servicios o prestaciones o, en su defecto, copia de la declaración del Impuesto sobre la Renta de las Personas Físicas.</li>
                                    </ul>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="h1">¿Cómo se realiza la valoración?</div>
                    <p>Para conocer si una persona se encuentra en situación de dependencia se procede a la valoración del solicitante, que es realizada por un valorador/a profesional con perfil sociosanitario y formación específica en la aplicación del Baremo de Valoración de la Situación de Dependencia (BVD). La valoración se lleva a cabo en el domicilio habitual del solicitante y se realiza teniendo en cuenta los informes de salud, el entorno en el que vive, y, si las hubiese, las ayudas técnicas, órtesis y prótesis prescritas. Los solicitantes menores de 3 años son valorados por personal médico en el Centro Regional de Coordinación y Valoración Infantil (CRECOVI), utilizando la Escala de Valoración Específica (EVE).</p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="h1">Grados de dependencia</div>
                    <p>
                        Dependencia moderada (Grado I): si necesita apoyo al menos una vez al día o tiene necesidades de apoyo intermitente o limitado para su autonomía personalnecesita apoyo al menos una vez al día o tiene necesidades de apoyo intermitente o limitado para su autonomía personal.
                        Dependencia severa (Grado II): si necesita apoyo al menos una vez al día o tiene necesidades de apoyo intermitente o limitado para su autonomía personal.
                        Gran dependencia (Grado III): si necesita ayuda varias veces al día o cuando por su pérdida total de autonomía precisa el apoyo contínuo de otra persona.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="h1">Servicios de atención</div>
                <ul>
                    <li>Servicios de prevención de las situaciones de dependencia y los de promoción de la autonomía personal. Son programas preventivos y de rehabilitación desempeñados por los servicios sociales y los sanitarios.</li>
                    <li>Servicios de ayuda a domicilio adquieren una importancia crucial. Atendiendo a las necesidades diarias del dependiente en su propia vivienda, desde cuidados del hogar hasta cuidados personales.</li>
                    <li>Servicios de teleasistencia; es un servicio de atención telefónica y presencial de forma instantánea y urgente que el mayor solicita a través de un dispositivo portátil de aviso inmediato a través de su línea telefónica. Si la incidencia lo requiere, se personan en el domicilio servicios auxiliares o médicos. </li>
                    <li>Servicios de Centro de Día y de Noche, son centros donde la persona mayor puede pasar el dia o la noche según las necesidades de cada persona mayor. </li>
                    <li>Servicios de Atención Residencial, para aquellas personas mayores que precisen de una atención total y constante ya sea en centros públicos, o centros privados acreditados.</li>
                </ul>   
            </div>
        </div>
    );
};

export default ChequeServicio;