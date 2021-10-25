import axios from "axios";
import React ,{Component} from "react";
import { withRouter } from "react-router-dom";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAuth0} from '@auth0/auth0-react';


async function GetToken(){
    const {user, isAuthenticated, getAccessTokenSilently} = useAuth0();
    const token = await getAccessTokenSilently();
    return token;
}

class ProductoRetiro extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.location.state.producto);
        this.state = {
            id_producto: this.props.location.state.producto.id_producto,
            nombre: this.props.location.state.producto.nombre,
            precio_unitario: this.props.location.state.producto.precio_unitario,
            cantidad: this.props.location.state.producto.cantidad,
        };
        this.maxValue = this.props.location.state.producto.cantidad;
        this.idp = this.props.location.state.producto.id_producto
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    
    

    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        const parsedValue = Number.parseInt(value); 
        if (isNaN(parsedValue))
        {
            this.setState({cantidad: 0 })
        }
        else if(parsedValue>this.maxValue)
        {
            this.setState({cantidad: this.maxValue})
        }
        else{
            this.setState({cantidad: parsedValue})
        }
    }

    handleSubmit(event) {
        try{
          //  const token = await getAccessTokenSilently();
            
           // const producto = JSON.stringify(this.state);
            console.log(this.idp);
            
            axios.put('http://localhost:8080/api/productos/' + this.idp, this.state,{
                headers: {
                  authorization: `Bearer ${GetToken()}`,
                },
              })
            .then(response => {
                console.log(response);
                this.props.history.push('/productos')
            });
            
            
          //  console.log(response.data);
          } catch (error)
          {
            console.log(error.message);
          }  
        //console.log('Un valor fue ingresado: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
            <label>Nombre:</label><br></br>
            <input readOnly type="text" name="nombre" value={this.state.nombre}/> <br></br>              
            <label>Cantidad:</label><br></br>     
            <input type="number" name="cantidad" value={this.state.cantidad}  placeholder={this.placeh} onChange={this.handleChange}/><br></br>  

            <input type="submit" value="Retirar" /><br></br>
            </form>
            </div>
        )
    }
    
}



export default withRouter(ProductoRetiro);
