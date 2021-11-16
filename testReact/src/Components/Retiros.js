import React, {Fragment,useState,useEffect,Component } from 'react';
// import ProductosList from './ProductosList';

function Retiros()
{
  const [retiros, setRetiros] = useState([])
  
  useEffect(() => {
    const getRetiros = () => {
      fetch('https://18.222.158.24:8080/api/retiros')
      .then(res => res.json())
      .then(res => setRetiros(res))
    }
    getRetiros()  
  }, [])

    return (
        <Fragment>
        <table className ="table">
            <thead>
                <tr>
                    <th>Usuario</th>
                    <th>Producto</th>
                    <th>Fecha</th>
                    <th>Cantidad Inicial</th>
                    <th>Cantidad Retirada</th>
                    <th>Cantidad Final</th>
                </tr>
            </thead>
            <tbody>
                {retiros.map( retiro => (
                <tr key = {retiro.id_retiro}>
                    <th>{retiro.usuario.email}</th>
                    <th>{retiro.producto.nombre}</th>
                    <th>{retiro.fecha}</th>
                    <th>{retiro.cantidad_inicial}</th>
                    <th>{retiro.cantidad_retirada}</th>
                    <th>{retiro.cantidad_final}</th>
                    
                    {/* <th><a href={'/productos/' + producto.id_producto}>Detalles</a> <a href={'/retiro/' + producto.id_producto}>Retiro</a></th> */}
                    
                </tr> 
                ))}
            </tbody>
        </table>

        </Fragment>
      );
}

export default Retiros;