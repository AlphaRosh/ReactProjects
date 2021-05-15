import React, { useRef, useState } from "react";
import { Button, Card, Form, FormGroup, Alert } from "react-bootstrap";
import { useAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";

const LogIn = () => {
  const emailRef = useRef();
  const { resetPassword, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  //Condition Constants

  async function handleRestPassword(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError(""); //resetting the error log
      setLoading(true); //setting the loading as true to prevent mis click
      await resetPassword(emailRef.current.value);
      setMessage(`Please check your email ${emailRef.current.value} for the reset password link`);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false); // resetting the loading state.
  }

  return (
    <>
      <Card>
        <Card.Header className='text-center mb-4 font-weight-bold'>
          Password Reset
        </Card.Header>
        <Card.Body>
          {error && (
            <Alert variant='danger'>
              <Alert.Heading>Failed to Reset Password</Alert.Heading>
              <p>{error}</p>
            </Alert>
          )}
          {message && (
            <Alert variant='success'>
              <Alert.Heading>Reset Link sent</Alert.Heading>
              <p>{message}</p>
            </Alert>
          )}

          <Form onSubmit={handleRestPassword}>
            <Form.Group className='mb-3' id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter Email'
                ref={emailRef}
                required
              />
            </Form.Group>

            <Button
              disabled={loading}
              variant='primary'
              type='submit'
              className='w-100'
            >
              Reset Password
            </Button>
          </Form>
          <div className='w-100 text-center mt-3'>
            <Link to='/login'>Log In</Link>
          </div>
        </Card.Body>
        <Card.Footer>
          <div className='w-100 text-center mt-2'>
            Need a new account? <Link to='/signup'>Sign Up</Link>
          </div>
          <div className='w-100 text-center mt-2'>
            <Link to='/'>Home</Link>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default LogIn;
