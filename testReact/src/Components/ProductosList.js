import React from 'react'

const ProductosList = ({productos}) =>{
    return(
        <table className ="table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.map( producto => (
                <tr key = {producto.id_producto}>
                    <th>{producto.nombre}</th>
                    <th>{producto.precio_unitario}</th>
                    <th>{producto.cantidad}</th>
                    <th><a href={'/productos/' + producto.id_producto}>Detalles</a> <a href={'/retiro/'}>Retiro</a></th>
                    
                </tr> 
                ))}
            </tbody>
        </table>
    );
}

export default ProductosList;