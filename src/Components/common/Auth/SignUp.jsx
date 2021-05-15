import React, { useRef, useState } from "react";
import { Button, Card, Form, FormGroup, Alert } from "react-bootstrap";
import { useAuth } from "../../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { register, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  //Condition Constants

  async function handleSubmit(e) {
    const passwordMismatchTrue =
      passwordRef.current.value !== passwordConfirmRef.current.value;
    e.preventDefault();
    if (passwordMismatchTrue) {
      return setError("Password do not Match");
    }
    try {
      setError(""); //resetting the error log
      setLoading(true); //setting the loading as true to prevent mis click
      await register(emailRef.current.value, passwordRef.current.value);
      if (currentUser.email) {
        history.push("/dashboard");
      }
    } catch {
      setError("Failed to register user");
    }
    setLoading(false); // resetting the loading state.
  }

  return (
    <>
      <Card>
        <Card.Header className='text-center mb-4 font-weight-bold'>
          Sign Up
        </Card.Header>
        <Card.Body>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter Email'
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter Password'
                ref={passwordRef}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' id='passwordConfirm'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Confirm Password'
                ref={passwordConfirmRef}
                required
              />
            </Form.Group>
            <Button
              disabled={loading}
              variant='primary'
              type='submit'
              className='w-100'
            >
              Submit
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer>
          <div className='w-100 text-center mt-2'>
            Already have an Account? <Link to='/login'>Log In</Link>
          </div>
          <div className='w-100 text-center mt-2'>
            <Link to='/'>Home</Link>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default SignUp;
