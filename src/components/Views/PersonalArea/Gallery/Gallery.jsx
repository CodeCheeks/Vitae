
import React, { useEffect, useContext, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import DztImageGalleryComponent from "reactjs-image-gallery";
import { UserContext } from "../../../../contexts/UserContext";
import { getPictures } from '../../../../services/ElderService';

const Gallery = () => {

    const { user } = useContext(UserContext);
    const {elder} = user
    const [pictures, setPictures] = useState(null);

    
    useEffect(() => {
        getPictures(user.elder.id)
        .then(res => {
            setPictures(res)
        })
        .catch(error => console.log(error))
    }, [user.elder.id]);

    
     let data = 
        pictures ?
        pictures.map((picture) => {
        return(
            {
                url: picture,
                title: '',
                thumbUrl: picture
            }
            )
        })
        :
        null
    
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
                {pictures ?
                    elder.pictures.length <= 0 ? 
                        <h6 className='text-center'>No existen imágenes disponibles</h6> 
                        :
                        <DztImageGalleryComponent images={data} hideRotate={true} />
                
                    : 
                    (<Spinner className="m-5" animation="border" role="status" variant="info">
                        <span className="sr-only">Loading...</span>
                    </Spinner>)
                }
                
            </div>
        </div>
    );
};

export default Gallery;