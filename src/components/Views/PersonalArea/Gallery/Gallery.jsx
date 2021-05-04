
import React, { useEffect, useContext, useState } from 'react';
import DztImageGalleryComponent from "reactjs-image-gallery";
import { UserContext } from "../../../../contexts/UserContext";

const Schedule = () => {

    const { user } = useContext(UserContext);
    const {elder} = user
    
    var data = elder.pictures.map((picture) => {
        
        return(
            {
                url: picture,
                title: '',
                thumbUrl: picture
            }
        )
    })
    
      

    return (
        <div>
            <div className='container'>
            <div className="row">
                <div className="col-12">
                    <h1 className='text-center main__title py-4'>
                        <img src="https://res.cloudinary.com/dv7hswrot/image/upload/v1620039011/Vitae/iconos/gallery_zc9kal.png" className='mx-2  ' alt="reports" width='80'/>
                        Galería de imágenes
                    </h1>
                </div>
            </div>
                {elder.pictures.length <= 0 ? <h6 className='text-center'>Todavía no hay imágenes disponibles</h6> :
                <DztImageGalleryComponent images={data} hideRotate={true} />
                }
                
            </div>
        </div>
    );
};

export default Schedule;