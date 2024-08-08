import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Form, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [input, setInput] = useState({
    name: "",
    email: "",
    phoneno: "",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios(`https://crud-app-backend-h5hd.onrender.com/single/${id}`);
        setInput(res.data.data);
      } catch (error) {
        console.log(`Error Fetching Data : ${error}`);
      }
    };
    getData();
  }, [id]);

  const handleEdit = async (e) => {
    e.preventDefault();
    await axios.patch(`https://crud-app-backend-h5hd.onrender.com/edit/${id}`, input);
    navigate("/details");
  };
  return (
    <>
      <Card className="my-3 shadow">
        <Card.Header
          as="h2"
          className="text-center bg-success bg-gradient text-light"
        >
          Update User
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleEdit}>
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
              <Button size="lg" variant="success bg-gradient" type="submit">
                Update
              </Button>
            </div>
          </Form>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button onClick={() => navigate("/")} variant="info bg-gradient">
            Go To Home
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Edit;
