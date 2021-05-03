
import './Professionals.css'
import ProfessionalSection from '../ProfessionalSection/ProfessionalSection';


const Professionals = () => {

   

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <h1 className='text-center main__title'>
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620034662/Vitae/iconos/consultation_twjwzx.png" className='mx-2  ' alt="reports" width='80'/>
                        Listado de profesionales
                    </h1>
                </div>
            </div>
            <div className="row">
                <ProfessionalSection/>
            </div>
        </div>
    );
};

export default Professionals;