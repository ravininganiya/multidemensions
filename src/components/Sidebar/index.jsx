import React, { useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

const Sidebar = () => {
  const [listItem, setListItem] = useState([
    {
      id: 1,
      name: "Actuator ALI 2",
      category: "(AC)",
    },
    {
      id: 2,
      name: "Actuator ALI 3",
      category: "(AC)",
    },
    {
      id: 3,
      name: "Actuator ALI 4 ",
      category: "(AC)",
    },
    {
      id: 4,
      name: "Actuator ALI 5",
    },
    {
      id: 5,
      name: "Actuator ALI 5-P/ALI 5-PB",
    },
    {
      id: 6,
      name: "Actuator AV 3",
    },
    {
      id: 7,
      name: "Actuator ECV 9092",
    },
    {
      id: 8,
      name: "Actuator EC",
    },
  ]);
  return (
    <>
      <Card>
        <Row className="p-3">
          <Container>
            <Col md={12}>
              <div className="product_information">Product Information</div>
              <h5 className="Product-variant-information">
                Product varient information
              </h5>
              <div className="card_main">
                {listItem.map((item) => (
                  <div className="card_varient" key={item.id}>
                    {item.name} <sub>{item.category}</sub>
                  </div>
                ))}
              </div>
            </Col>
          </Container>
        </Row>
      </Card>
    </>
  );
};

export default Sidebar;
