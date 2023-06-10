import "./index.css";
import logo from './p1.png';
import { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      setLoading(true);
      if (!passwordRef.current?.value || !emailRef.current?.value) {
        setErrorMsg("Please fill in the fields");
        return;
      }
      const {
        data: { user, session },
        error
      } = await login(emailRef.current.value, passwordRef.current.value);
      if (error) setErrorMsg(error.message);
      if (user && session) {
        navigate("/update-profile")
        // `profileFilled` that is true if the user has filled out their profile
        //if (!user.profileFilled) {
        //  navigate("/register-profile"); // Redirect to UpdateProfile page
        //} else {
        //  navigate("/"); // Redirect to home page
        //}
      }
    } catch (error) {
      setErrorMsg("Email or Password Incorrect");
    }
    setLoading(false);
  };

  return (
    <>
      <Card>
      <div className="d-flex">
        <Card.Body>
          <h4 className="text-center mb-4 ">Create an Account or Sign In.</h4>
          <div className="w-100 text-center mt-2">
            By continuing, you agree to our Terms of Use and Privacy Policy.
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            {errorMsg && (
              <Alert
                variant="danger"
                onClose={() => setErrorMsg("")}
                dismissible>
                {errorMsg}
              </Alert>
            )}
            <div className="text-center mt-2">
              <Button disabled={loading} type="submit" className="w-50">
                Login
              </Button>
            </div>
          </Form>
        </Card.Body>
        </div>
        <div className="w-100 text-center mt-2">
          New User? <Link to={"/register"}>Register</Link>
        </div>
        <div className="w-100 text-center mt-2">
          Forgot Password? <Link to={"/passwordreset"}>Click Here</Link>
        </div>
      </Card>
    </>
  );
};

export default Login;
