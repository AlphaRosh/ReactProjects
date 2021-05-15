import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const [error, setError] = useState("");
  const history = useHistory();
  //Destructuring
  const { currentUser, logout } = useAuth();
  //Logout Logic
  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to Logout");
    }
  }
  return (
    <>
      <Card>
        <Card.Header className='text-center mb-4 font-weight-bold'>
          Welcome
        </Card.Header>
        <Card.Body>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Card.Title className='mb-4 text-lg-center'>
            {currentUser.email}
          </Card.Title>
          <Card.Subtitle className='mb-2  text-muted text-center'>
            Kalyan(west)
          </Card.Subtitle>
          <Link to='/details' className='btn btn-primary w-100 mt-3'>
            Details
          </Link>
        </Card.Body>
        <Card.Footer>
          <div className='w-100 text-center mt-2'>
            <Button variant='link' onClick={handleLogout}>
              {" "}
              Log Out
            </Button>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
}
