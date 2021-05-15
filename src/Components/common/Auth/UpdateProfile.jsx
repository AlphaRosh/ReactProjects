import React, { useRef, useState } from "react";
import { Button, Card, Form, FormGroup, Alert } from "react-bootstrap";
import { useAuth } from "../../../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

const UpdateProfile = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const {currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  //Condition Constants

  function handleSubmit(e) {
    e.preventDefault();

    const passwordMismatchTrue =
      passwordRef.current.value !== passwordConfirmRef.current.value;
    if (passwordMismatchTrue) {
      return setError("Password do not Match");
    }

    const promises = [];
    setError("");
    setMessage("");
    setLoading(true);
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }
    Promise.all(promises)
      .then(() => {
        setMessage("Updated Successfully");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <>
      <Card>
        <Card.Header className='text-center mb-4 font-weight-bold'>
          Update Profile
        </Card.Header>
        <Card.Body>
          {error && (
            <Alert variant='danger'>
              <Alert.Heading>Failed to Update user</Alert.Heading>
              <p>{error}</p>
            </Alert>
          )}
          {message && (
            <div>
              <Alert variant='success'>
                <Alert.Heading>Success</Alert.Heading>
                <p>{message}</p>
              </Alert>
              <Button onClick={()=>history.push("/dashboard")}>Go To Dashboard</Button>
            </div>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter Email'
                ref={emailRef}
                defaultValue={currentUser.email}
                required
              />
            </Form.Group>
            <Form.Group className='mb-3' id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Leave blank if you do not want to Update Password'
                ref={passwordRef}
              />
            </Form.Group>
            <Form.Group className='mb-3' id='passwordConfirm'>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Leave blank if you do not want to Update Password'
                ref={passwordConfirmRef}
              />
            </Form.Group>
            <Button
              disabled={loading}
              variant='primary'
              type='submit'
              className='w-100'
            >
              Update
            </Button>
          </Form>
        </Card.Body>
        <Card.Footer>
          <div className='w-100 text-center mt-2'>
            <Link to='/dashboard'>Dashboard</Link>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
};

export default UpdateProfile;
