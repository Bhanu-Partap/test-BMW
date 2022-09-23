import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { Col, Form, Image, Row } from "react-bootstrap";
import { db } from "../Backend/Firebase";
import Footer from "../components/Footer";
import logo from "../Image/bmw.jpg";

export default function ContactPage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [message, setMessage] = useState("");
  const collectionref = collection(db, "message")

  const handleForm = async(e)=>{
    e.preventDefault()
    if(firstname==="" || lastname=== "" || email==="" || phonenumber==="" || message===""){
      return
    }
    const object = {firstname:firstname, lastname:lastname, email:email, phonenumber:phonenumber,message:message}
    await addDoc(collectionref, object ).then(()=>{
      console.log("datastore")

    }).catch(error =>{
      console.log(error.code)
    }) 
    setFirstname("")
    setLastname("")
    setEmail("")
    setPhonenumber("")
    setMessage("")
  }

  return (
    <>
      <section className="mb-5 section">
        <div className="main">
          <h1 className="display-1 fw-bold d-flex justify-content-center mb-4 ">
            Contact Page
          </h1>
          <Form className="p-5" onSubmit={handleForm}>
            <Row>
              <Col xs="12" sm="12" md="6" lg="6">
                <Row>
                  <Col xs="12" sm="12" md="6" lg="6">
                    <Form.Group className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                      onChange={e=>setFirstname(e.target.value)}
                        value={firstname}
                        type="text"
                        placeholder="BMW"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="12" sm="12" md="6" lg="6">
                    <Form.Group className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        onChange={e=>setLastname(e.target.value)}
                        value={lastname}
                        type="text"
                        placeholder="Motorsports"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="12" sm="12" md="6" lg="6">
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                      onChange={e=>setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="bmw123@gmail.com"
                      />
                    </Form.Group>
                  </Col>
                  <Col xs="12" sm="12" md="6" lg="6">
                    <Form.Group className="mb-3">
                      <Form.Label>Phone number:</Form.Label>
                      <Form.Control
                      onChange={e=>setPhonenumber(e.target.value)}
                        value={phonenumber}
                        type="number"
                        placeholder="9998882221"
                      />
                    </Form.Group>
                  </Col>
                  <Col lg="12">
                    <Form.Group className="mb-3">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                      onChange={e=>setMessage(e.target.value)}
                        value={message}
                        as="textarea"
                        type="text"
                        placeholder="Hey its BMW Motorsport. You Can drop your Query like Your drop the gear of your BMW just to hear that stututututu"
                        style={{ resize: "none", height: "180px" }}
                      />
                    </Form.Group>
                    <input
                      className="btn btn-primary mb-3 w-25"
                      type="submit"
                      value="Send"
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs="12" sm="12" md="6" lg="6">
                <Image
                  className="image"
                  src={logo}
                  alt="logo"
                  width={550}
                  rounded
                />
              </Col>
            </Row>
          </Form>
        </div>
      </section>
      <Footer />
    </>
  );
}
