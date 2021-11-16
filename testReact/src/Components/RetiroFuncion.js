import React, { useState , useEffect} from "react";
import {useAuth0} from '@auth0/auth0-react';
import axios from '../Axios/axios';
import { withRouter } from "react-router-dom";


function RetiroFuncion(props) {
    console.log(props);
    const {isAuthenticated, user} = useAuth0();
    const { getAccessTokenSilently} = useAuth0();
  const [cantidad, setCantidad] = useState(props.location.state.producto.cantidad);
  const id_producto = props.location.state.producto.id_producto;
  const maxValue = props.location.state.producto.cantidad;
  const [token, setToken] = useState(null);
  useEffect (() =>{
    async function getToken(){
      const token = await getAccessTokenSilently();
      setToken(token);
    }
    getToken();
  },[])

  console.log('userid:' + user.user_id);
//   
  
  const producto = {
      id_producto: props.location.state.producto.id_producto,
      nombre: props.location.state.producto.nombre,
      precio_unitario: props.location.state.producto.precio_unitario,
      cantidad: props.location.state.producto.cantidad,
      retirada: 0,
      final: 0,
      inicial: 0      
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
      const parsedValue = Number.parseInt(cantidad);
    if(parsedValue <= maxValue && parsedValue > 0)
    {
        producto.inicial = maxValue;
        producto.retirada = parsedValue;
        producto.cantidad = maxValue - parsedValue;
        producto.final = maxValue - parsedValue;
        console.log("token obtenido: " +  token);
        const response = axios.put('/api/productos/' + producto.id_producto, producto ,{
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          console.log(response);
    }
    else{
        evt.preventDefault();
        alert('Cantidad invalida');
    //   alert(`Retirando ${cantidad} unidades`)
    }
      
  }

  
  return (
    <div>
      {/* <h3>User is {isAuthenticated ? 'Logged in' : 'Not logged in'}</h3>
      <h3>Hola {user.user_id}</h3> */}
    <h1>Retiro</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Cantidad:
        <input
          type="number"
          value={cantidad}
          onChange={e => setCantidad(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>

  );
}

export default withRouter(RetiroFuncion);