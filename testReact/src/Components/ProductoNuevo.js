import React ,{Component} from "react"


class ProductoNuevo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nombre: '',
            precio: '',
            cantidad: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const nombre = target.nombre;
        const precio = target.precio;
        const cantidad = target.cantidad;
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
            <label>Nombre:</label><br></br>
            <input type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange} /> <br></br>       
            <label>Precio Unitario:</label><br></br>
            <input type="number" name="precio" value={this.state.precio} onChange={this.handleChange}/> <br></br>       
            <label>Cantidad:</label><br></br>     
            <input type="number" name="cantidad" value={this.state.cantidad} onChange={this.handleChange}/><br></br>  

            <input type="submit" value="Guardar" /><br></br>
            </form>
            </div>
        )
    }
}

function ProductoNuevo()
{
    return(
        <div>
        <form>
        <label>Nombre:</label><br></br>
        <input type="text" name="nombre" /> <br></br>       
        <label>Precio Unitario:</label><br></br>
        <input type="number" name="precio" /> <br></br>       
        <label>Cantidad:</label><br></br>     
        <input type="number" name="cantidad" /><br></br>  

        <input type="submit" value="Guardar" /><br></br>
        </form>
        </div>
    );
}

export default ProductoNuevo;