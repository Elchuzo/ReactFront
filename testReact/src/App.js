import React, {Fragment,useState,useEffect,Component } from 'react';
// import Navbar from './Components/Navbar';
// import ProductosList from './Components/ProductosList';
import {useAuth0} from '@auth0/auth0-react';
import axios from 'axios';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Navegacion, Retiros,Inicio, Productos, ProductoDetalle, Camara, ProductoNuevo, ProductoRetiro, RetiroFuncion} from "./Components"

// class Test extends Component {
//   state = {
//     result: 'No result'
//   }
 
//   handleScan = data => {
//     if (data) {
//       const info = JSON.parse(data);
//       console.log(info.id);
//       this.setState({        
//         result: data
//       })
//     }
//   }

//   handleError = err => {
//     console.error(err)
//   }

//   render() {
//     return (
//       <div>
//         <QrReader
//           delay={300}
//           onError={this.handleError}
//           onScan={this.handleScan}
//           style={{ width: '100%' }}
//         />
//         <p>{this.state.result}</p>
//       </div>
//     )
//   }
// }


function App() {


//   const [producto, setProducto] = useState([])

//   useEffect(() => {
//   const getProducto = () => {
//     fetch('http://localhost:8080/api/productos?id=3')
//     .then(res => res.json())
//     .then(res => setProducto(res))
//   }
//   getProducto()  
// },[] )

// async function getProducto(id)
// {
//   const response = await fetch(`http://localhost:8080/api/productos?id=${id}`);
//   const producto = await response.json();
//   // console.log(producto);
//   return producto;
// }

const {loginWithPopup, loginWithRedirect, logout, user, isAuthenticated, getAccessTokenSilently} = useAuth0();

function callAPI()
{
  axios.get("http://localhost:8080/api/productos/").then(response => console.log(response.data));
}

async function callPAPI()
{
  try{
    const token = await getAccessTokenSilently();
    const response = await axios.get('http://localhost:8080/protected', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data);
  } catch (error)
  {
    console.log(error.message);
  }  
}

return (

<div className='App'>
{/* <h1>Auth0 Auth</h1> */}
<ul>
  <li>
    <button onClick={loginWithPopup}>Login Popup</button>
  </li>
  <li>
    <button onClick={loginWithRedirect}>Login Redirect</button>
  </li>
  <li>
    <button onClick={logout}>Logout</button>
  </li>
</ul>

<div>
<div className="App">
      <Router>
        <Navegacion />
        <Switch>
        <Route path="/" exact component={() => <Inicio />} />
        <Route path="/productos" exact component={() => <Productos />} />
        <Route path="/camara" exact component={() => <Camara />} />
        <Route path="/productos/:idProducto" exact component={() => <ProductoDetalle/>} />
        <Route path="/retiros" exact component={() => <Retiros/>} />
        <Route path="/nuevo/" exact component={() => <ProductoNuevo/>} />
        <Route path="/nuevofuncion/" exact component={() => <RetiroFuncion/>} />
        </Switch>
      </Router>
    </div>
</div>

{/* <h3>User is {isAuthenticated ? 'Logged in' : 'Not logged in'}</h3> */}
{/* <p>Hola {isAuthenticated? user.name : "no se ha iniciado"}</p> */}
{/* <div>
  <ul>
    <li><button onClick={callAPI}>call API</button></li>
    <li><button onClick={callPAPI}>call protected API</button></li>
  </ul>
</div> */}

{/* 
{isAuthenticated && (
  <pre style={{textAlign: 'start'}}>
    {JSON.stringify(user,null,2)}
  </pre>
)} */}

{/* <Test></Test> */}

{/* <ProductoDetalle producto={producto}></ProductoDetalle> */}


</div>
);

}





// const [productos, setProductos] = useState([])

// useEffect(() => {
//   const getProductos = () => {
//     fetch('http://localhost:8080/api/productos')
//     .then(res => res.json())
//     .then(res => setProductos(res))
//   }
//   getProductos()  
// }, [])

//   return (
//     <Fragment>
//       <Navbar brand='Test'/>
//       <div className="container">
//         <div className="row">
//           <div className="col-7">
//             <h2 style = {{textAlign: 'center'}}>Productos</h2>
//             <ProductosList productos={productos}/>
//           </div>
//           <div className="col-5">

//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// }

export default App;
