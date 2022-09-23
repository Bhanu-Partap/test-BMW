import React from "react";
import { Col, Form, Image, Row } from "react-bootstrap";
import logo from "../Image/Logo.svg"

export default function HomePage() {
  return (
    <>
      <div className="section mt-2">
        <div className="main">
          <Row className="m-0">
            <Col xs="12" md="6" sm="12" lg="6">
              <div className="bg-primary text-white p-5 rounded-4 ms-5 mb-3">
                <h1 className="display-1 fw-semibold px-4">BMW Car</h1>
                <h1 className="display-1 fw-semibold px-4">Museum</h1>
                <p className="w-50 px-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  dignissimos iste autem corrupti delectus expedita.
                </p>
              </div>
              <div className="p-5 bg-warning text-white ms-5 mb-3 rounded-4">
                <div className="d-flex px-4 justify-content-between align-items-center">
                  <h2 className="fs-4 px-4">Features</h2>
                  <Form.Switch className="px-4" label='Manual' />
                </div>
                <div className="d-flex flex-wrap px-4 justify-content-between align-items-center ">
                    <div className="px-4">
                        <p>Consumptions</p>
                        <p className="fs-3">12 liters</p>
                    </div>
                    <div className="px-4">
                        <p>Speed up</p>
                        <p className="fs-3">375 KM/H</p>
                    </div>
                </div>
              </div>
            </Col>
            <Col>
                <Image src={logo} width={450} className="d-block m-auto mt-5" />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
