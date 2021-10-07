import React, {Fragment,useState,useEffect,Component } from 'react';
import ProductosList from './ProductosList';

function Producto()
{

  const [productos, setProductos] = useState([])
  
  useEffect(() => {
    const getProductos = () => {
      fetch('http://localhost:8080/api/productos')
      .then(res => res.json())
      .then(res => setProductos(res))
    }
    getProductos()  
  }, [])

    return (
        <Fragment>
          <div className="container">
            <div className="row">
              <div className="col-7">
                <h2 style = {{textAlign: 'center'}}>Productos</h2>
                <ProductosList productos={productos}/>
              </div>
              <div className="col-5">
    
              </div>
            </div>
          </div>

          <div>
            <a href="/nuevo/">Crear Nuevo</a>
          </div>

        </Fragment>
      );
}

export default Producto;