import React from 'react'
import QRCode from 'qrcode.react';
import {useState, useEffect, useRef} from "react";
import {useParams} from "react-router-dom";



function generarJson(id){
    var obj = new Object();
    obj.id = id;
    var jsonString= JSON.stringify(obj);
    return jsonString;
}


function ProductoDetalle()
{
    const [producto, setProducto] = useState([]);

    const {idProducto} = useParams();

    useEffect(()=>{
        const getProducto = () => {fetch("https://18.222.158.24:6043/api/productos?id=" + idProducto)
        .then(res => res.json())
        .then(res => setProducto(res))
    }
    getProducto()    
},[]);

console.log(producto);
    return(
    <div>
        <table className ="table">
                {producto.map( producto => (
                <React.Fragment>
                <tr>
                    <th>Nombre: </th>
                    <td>{producto.nombre}</td>                 
                </tr> 

                <tr>
                    <th>Precio: </th>
                    <td>{producto.precio_unitario}</td>
                </tr>
                <tr>
                    <th>Cantidad: </th>
                    <td>{producto.cantidad}</td>
                </tr>
                <tr>
                    <th>QR: </th>
                    <td><QRCode size={320} value={generarJson(producto.id_producto)} /></td>
                </tr>
                </React.Fragment>

                ))}
        </table>
        </div>
    );

}

export default ProductoDetalle;