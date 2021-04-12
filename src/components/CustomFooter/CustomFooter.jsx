
import React from 'react';
import './CustomFooter.css'
  
  const CustomFooter = () => {
      return (
          <div className="container-fluid">
              <div className="row footer__container justify-content-between">
                  <div className="col">
                        <h6 className="text-light h6 py-2">Proyecto realizado por Alicia Parra Serrano y Diego Cerratos Bravo</h6>
                  </div>
                  <div className="col">
                        <h6 className="text-light py-2" >Copyright © 2021 | Proyecto realizado con fines académicos.</h6>
                  </div>
              </div>
            
        </div>
      );
  };
  
  export default CustomFooter;