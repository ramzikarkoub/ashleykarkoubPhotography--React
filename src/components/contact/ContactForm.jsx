import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

export default function ContactForm(props) {
  const [validated, setvalidated] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setvalidated(true);
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-1">
      <Form.Group
        as={Col}
        md="12"
        controlId="validationCustom02"
        className="mb-3"
      >
        <Form.Control required type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group
        as={Col}
        md="12"
        controlId="validationCustom03"
        className="mb-3"
      >
        <Form.Control required type="text" placeholder="Phone number" />
      </Form.Group>
      <Form.Group
        as={Col}
        md="12"
        controlId="validationCustom04"
        className="mb-3"
      >
        <Form.Control required type="date" />
      </Form.Group>
      <Form.Group
        as={Col}
        md="12"
        controlId="validationCustom05"
        className="mb-3"
      >
        <Form.Control required as="select" type="select">
          <option value="">Select your event</option>
          <option value="1">Wedding</option>
          <option value="2">Engagement</option>
          <option value="3">Family portraits</option>
          <option value="4">Senior portraits</option>
          <option value="5">New born</option>
          <option value="5">Other</option>
        </Form.Control>
      </Form.Group>

      <Row className="col-md-12">
        <Form.Group as={Col} md="5" controlId="validationCustom06">
          <Form.Control
            type="text"
            placeholder="City"
            required
            className="mb-3"
          />
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom07">
          <Form.Control
            type="text"
            placeholder="State"
            required
            className="mb-3"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom08">
          <Form.Control
            type="text"
            placeholder="Zip"
            required
            className="mb-3"
          />
        </Form.Group>
      </Row>
      <Form.Group
        className="col-md-12"
        controlId="exampleForm.ControlTextarea1"
      >
        <Form.Control
          as="textarea"
          rows={2}
          placeholder="additional information or request"
        />
      </Form.Group>
      <Form.Group className="mb-3"></Form.Group>
      <div className="col-md-12 text-center mb-2">
        <Button type="submit" variant="dark">
          Submit form
        </Button>
      </div>
      {validated && (
        <Alert className="col-md-12 text-center" variant="success">
          Thanks I will reply ASAP :)
        </Alert>
      )}
    </Form>
  );
}
