import React, { useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
const ProductDetail = () => {
  const [screenType, setScreenType] = useState(1);
  const [imge, setImge] = useState([
    {
      id: 1,
      src: "../pics/img(2).jpg",
      alt: "img(2).jpg",
      active: true,
    },
    {
      id: 2,
      src: "../pics/img(3).jpg",
      alt: "img(3).jpg",
      active: false,
    },
    {
      id: 3,
      src: "../pics/img(4).jpg",
      alt: "img(4).jpg",
      active: false,
    },
    {
      id: 4,
      src: "../pics/img(5).jpg",
      alt: "img(5).jpg",
      active: false,
    },
    {
      id: 5,
      src: "../pics/img(6).jpg",
      alt: "img(6).jpg",
      active: false,
    },
  ]);

  const onImageClick = (id) => {
    let tempImge = [...imge];
    for (let i = 0; i < tempImge.length; i++) {
      if (tempImge[i].id === id) {
        tempImge[i] = { ...tempImge[i], active: true };
      } else {
        tempImge[i] = { ...tempImge[i], active: false };
      }
    }
    console.log(tempImge);
    setImge(tempImge);
    setScreenType(id);
  };
  return (
    <>
      <Card className="section_main_card">
        <Container>
          <Row>
            <Col md={12}>
              <Card className="d-flex p-4">
                <h2 className="text-center">Mecvel Linear Actuators AC</h2>
                <p className="section_page_p text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <div className="btn_enquire_now mt-3">
                  <button className="enquire_now">Equire now</button>
                </div>
                <h2 className="text-center">Mecvel</h2>
                <p className="section_page_p text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </Card>
              <Row className="my-3" xs={2} md={2} lg={2}>
                <Col>
                  {imge.map((item) => (
                    <div key={item.id}>
                      {item.active ? (
                        <img
                          src={item.src}
                          className="img-fluid"
                          alt={item.alt}
                          style={{
                            width: "100%",
                            height: "431px",
                            borderRadius: "5px",
                            border: "solid 1px #4b4b4b",
                            padding: "11px 9px 11px 11px",
                            margin: "0 17px 0 0",
                          }}
                        />
                      ) : null}
                    </div>
                  ))}
                </Col>

                <Col>
                  <Row xs={1} md={2} lg={2}>
                    {imge.map((item) => (
                      <Col key={item.id}>
                        <img
                          src={item.src}
                          alt={item.alt}
                          onClick={() => onImageClick(item.id)}
                          style={{
                            width: "100%",
                            height: "136px",
                            margin: "3px",
                            borderRadius: "5px",
                            border: "solid 1px #4b4b4b",
                            padding: "11px 9px 11px 11px",
                            boxSizing: "border-box",
                          }}
                        />
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
};

export default ProductDetail;
