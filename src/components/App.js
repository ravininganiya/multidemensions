import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ProductDetail from "./ProductDetail/index";
import Sidebar from "./Sidebar/index";
import NavbarProductsDetail from './NavbarProductsDetail/index';
import './App.css'

const App = () => {
  return (
    <>
      <Container fluid>
        <Row >
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={9}>
            <ProductDetail />
            <NavbarProductsDetail />
          </Col>
          
        </Row>
      </Container>
    </>
  );
};

export default App;
