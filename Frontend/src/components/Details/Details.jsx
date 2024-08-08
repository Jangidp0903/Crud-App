import React, { useEffect, useState } from "react";
import { Container, Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios("http://localhost:5000/details");
        setUsers(res.data.data);
      } catch (error) {
        console.log(`Error Fetching Data : ${error}`);
      }
    };
    getData();
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/delete/${id}`);

    const newUsers = users.filter((item) => {
      return item._id !== id;
    });
    setUsers(newUsers);
  };
  return (
    <>
      <Container className="border border-secondary my-3 shadow rounded">
        <h2 className="text-center my-3 py-2 rounded bg-secondary text-light">
          MERN Crud Details
        </h2>
        <Table responsive="sm" striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No.</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => {
                return (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phoneno}</td>
                    <td className="text-center">
                      <Link to={`/edit/${user._id}`}>
                        <Button variant="success">Edit</Button>{" "}
                      </Link>
                    </td>
                    <td className="text-center">
                      <Button
                        onClick={() => handleDelete(user._id)}
                        variant="danger"
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Details;
