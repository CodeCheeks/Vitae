import React from 'react';
import './InteractiveCard.css'
const InteractiveCard = () => {
    return (
    <div classNameName='InteractiveCard'>
            
                <div className="d-flex justify-content-center cards__wrapper">
                    <div className=" card ">
                        <img src='https://res.cloudinary.com/dv7hswrot/image/upload/v1619948578/Vitae/imagenes/Home%20Pictures/pexels-karolina-grabowska-4197564_syh89z.jpg' alt='masks' width='300'/>
                        <h6 className='my-3 text-center'>Uso obligatorio de mascarilla</h6>  
                    </div>
                    <div class="card ">
                        <img src='https://res.cloudinary.com/dv7hswrot/image/upload/v1619948578/Vitae/imagenes/Home%20Pictures/kelly-sikkema-WIYtZU3PxsI-unsplash_aos2fz.jpg' alt='masks' width='300'/>
                        <h6 className='my-3 text-center'>Uso de gel hidroalcohólico</h6> 
                    </div>
                    <div class="card ">
                        <img src='https://res.cloudinary.com/dv7hswrot/image/upload/v1619948580/Vitae/imagenes/Home%20Pictures/pexels-pixabay-40568_ugv97a.jpg' alt='masks' width='300'/>
                        <h6 className='my-3 text-center'>Tests de anticuerpos </h6> 
                    </div>
                </div>
            
        
    </div>
    );
};

export default InteractiveCard;