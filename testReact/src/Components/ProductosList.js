import React from 'react'
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import axios from '../Axios/axios';
import { useHistory } from "react-router";

const retiroProducto = (id_producto,history) =>{
    //console.log("producto a retirar: " + id_producto);

    axios.get("/api/productos?id=" + id_producto)
    .then(response => {
        console.log(response.data[0]);
        const producto = response.data[0];
        
          history.push({
          pathname: '/nuevofuncion',
          state: {producto}
        })
    });
};


const ProductosList = ({productos}) =>{
    const history = useHistory();
    return(
        <Table striped bordered hover>
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
                    <th><Button  href={'/productos/' + producto.id_producto}>Detalles</Button> <Button onClick={() => {retiroProducto(producto.id_producto,history);}}>Retiro</Button></th>
                    
                </tr> 
                ))}
            </tbody>
        </Table>
    );
}

export default withRouter(ProductosList);