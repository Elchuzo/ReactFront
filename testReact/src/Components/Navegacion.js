import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navegacion(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Gastro Avances
          </Link>

          <div>

            <ul class="navbar-nav ml-auto">

              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Inicio
                  <span class="sr-only"></span>
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/productos" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/productos">
                  Productos
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/camara" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/camara">
                  Camara
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/retiros" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/retiros">
                  Retiros
                </Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navegacion);