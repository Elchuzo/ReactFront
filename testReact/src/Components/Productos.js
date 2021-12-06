import React, {Fragment,useState,useEffect,Component } from 'react';
import ProductosList from './ProductosList';
import  Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import QRCode from 'react-qr-code';
import Button from "react-bootstrap/Button";

function Producto()
{
  const [productos, setProductos] = useState([])
  
  useEffect(() => {
    const getProductos = () => {
      fetch('https://18.222.158.24:6043/api/productos')
      .then(res => res.json())
      .then(res => setProductos(res))
    }
    getProductos()  
  }, [])

    return (
        <Container>
          <Row>
            <Col>
            <h2>Productos</h2>
            </Col>
          </Row>
          <br>
          </br>
          <Row>
            <Col>
            <ProductosList productos={productos}/>
            </Col>
          </Row>
                
          <Row>
            <Col>
            <Button href="/nuevo/">Nuevo</Button>
            {/* <a href="/nuevo/">Nuevo</a> */}
            </Col>
          </Row>            
        </Container>
      );
}

export default Producto;