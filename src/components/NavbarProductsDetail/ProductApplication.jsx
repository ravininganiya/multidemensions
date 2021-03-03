import React from "react";
import { Row, Col, Table } from "react-bootstrap";

const ProductApplication = () => {
  return (
    <>
      <Row className="mt-3">
        <Col md={6}>
          <Table bordered hover className="product_detail_table">
            <thead className="product_detail_table_header">
              <tr>
                <th>Machines</th>
              </tr>
            </thead>
            <tbody className="product_detail_table_body">
              <tr>
                <td>MINUTEMAN(USA) Floor cleaning machine</td>
              </tr>
              <tr>
                <td>Model - SCV-28/32</td>
              </tr>
              <tr>
                <td>Acid pickling point</td>
              </tr>
              <tr>
                <td>Others</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col md={6}>
          <Table bordered hover>
            <thead className="product_detail_table_header">
              <tr>
                <th>Industries</th>
              </tr>
            </thead>
            <tbody className="product_detail_table_body">
              <tr>
                <td>MINUTEMAN(USA) Floor cleaning machine</td>
              </tr>
              <tr>
                <td>Model - SCV-28/32</td>
              </tr>
              <tr>
                <td>Acid pickling point</td>
              </tr>
              <tr>
                <td>Others</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default ProductApplication;
