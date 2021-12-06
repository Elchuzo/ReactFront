import React, { Fragment, useState, useEffect, Component } from "react";
// import Navbar from './Components/Navbar';
// import ProductosList from './Components/ProductosList';
import { useAuth0 } from "@auth0/auth0-react";
import axios from "./Axios/axios";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Navegacion,
  Retiros,
  Inicio,
  Productos,
  ProductoDetalle,
  Camara,
  ProductoNuevo,
  ProductoRetiro,
  RetiroFuncion,
} from "./Components";


function App() {
  const {
    loginWithPopup,
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0();

  function callAPI() {
    axios.get("/api/productos/").then((response) => console.log(response.data));
  }

  async function callPAPI() {
    try {
      const token = await getAccessTokenSilently();
      const response = await axios.get("protected", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="App">
      {/* <h1>Auth0 Auth</h1> */}

      {/* <ul>
  <li>
    <button onClick={loginWithPopup}>Login Popup</button>
  </li>
  <li>
    <button onClick={loginWithRedirect}>Iniciar Sesion</button>
  </li>
  <li>
    <button onClick={logout}>Logout</button>
  </li>
</ul> */}

      <div>
        <div className="App">
          <Router>
            <Navegacion />
            {/* <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="/">Gastro Avances</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="/productos">Productos</Nav.Link>
                    <Nav.Link href="/camara">Escanear</Nav.Link>
                    <Nav.Link href="/retiros">Retiros</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                    <Button variant="Dark" onClick={loginWithRedirect}>
                      Iniciar Sesion
                    </Button>
                  </Navbar.Text>
                </Navbar.Collapse>
              </Container>
            </Navbar> */}

            <Switch>
              <Route path="/" exact component={() => <Inicio />} />
              <Route path="/productos" exact component={() => <Productos />} />
              <Route path="/camara" exact component={() => <Camara />} />
              <Route path="/productos/:idProducto" exact component={() => <ProductoDetalle />}/>
              <Route path="/retiros" exact component={() => <Retiros />} />
              <Route path="/nuevo/" exact component={() => <ProductoNuevo />} />
              <Route path="/nuevofuncion/" exact component={() => <RetiroFuncion />}/>
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
    </div>
  );
}

export default App;
