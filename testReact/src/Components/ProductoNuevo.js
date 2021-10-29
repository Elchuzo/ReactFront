import axios from '../Axios/axios';
import React ,{Component} from "react";
import {useHistory} from "react-router-dom";
import { withRouter } from "react-router-dom";

function CambiarPagina(){
    const history = useHistory();
    history.push("/productos");

}

class ProductoNuevo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            precio_unitario: '',
            cantidad: ''
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        try{
          //  const token = await getAccessTokenSilently();
            
            const producto = JSON.stringify(this.state);
            console.log(producto)
            axios.post('/api/productos/', this.state)
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
            <input type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange} /> <br></br>       
            <label>Precio Unitario:</label><br></br>
            <input type="number" name="precio_unitario" value={this.state.precio_unitario} onChange={this.handleChange}/> <br></br>       
            <label>Cantidad:</label><br></br>     
            <input type="number" name="cantidad" value={this.state.cantidad} onChange={this.handleChange}/><br></br>  

            <input type="submit" value="Guardar" /><br></br>
            </form>
            </div>
        )
    }
    
}




export default withRouter(ProductoNuevo);