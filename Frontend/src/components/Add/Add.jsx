import React, { useState } from "react";
import axios from "axios";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    phoneno: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://crud-app-backend-h5hd.onrender.com/add", input);
      setInput({
        name: "",
        email: "",
        phoneno: "",
      });
      navigate("/details");
    } catch (error) {
      console.log(`There was an error submitting the Form! ${error}`);
    }
  };

  return (
    <>
      <Card className="my-3 shadow">
        <Card.Header
          as="h2"
          className="text-center bg-info bg-gradient text-light"
        >
          Add User
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                value={input.name}
                onChange={(e) => {
                  setInput({ ...input, [e.target.name]: e.target.value });
                }}
                size="lg"
                type="text"
                placeholder="Enter the Name"
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                value={input.email}
                onChange={(e) => {
                  setInput({ ...input, [e.target.name]: e.target.value });
                }}
                size="lg"
                type="email"
                placeholder="Enter the Email"
                autoComplete="off"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                name="phoneno"
                value={input.phoneno}
                onChange={(e) => {
                  setInput({ ...input, [e.target.name]: e.target.value });
                }}
                size="lg"
                type="text"
                placeholder="Enter the Phone Number"
                autoComplete="off"
              />
            </Form.Group>
            <div className="d-grid">
              <Button size="lg" variant="info bg-gradient" type="submit">
                Add
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default Add;
