import { useRef, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import '../styles/PasswordReset.css';
import logo2 from './asset/p2.png';

const PasswordReset0 = () => {
  const { passwordReset } = useAuth();
  const emailRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { error } = await passwordReset(emailRef.current.value);
      if (!error) {
        setMsg("Password reset has been sent to your email");
      }
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  return (
    <div className="reset-container">
      <Card className="reset-card">
        <Card.Body className="reset-card-body">
          <Button onClick={() => navigate("/login")} className="reset-button">
            Back to Login
          </Button>
          <h2 className="reset-header text-left margin-top-class">Reset Password</h2>
          <p className="supplement-sentence">We'll send you a reset link to your email.</p>

          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="text label-close-to-box">Registered Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required className="rounded-form-control" placeholder="  mail@website.com"/>
            </Form.Group>
            {msg && (
              <Alert variant="success" onClose={() => setMsg("")} dismissible>
                {msg}
              </Alert>
            )}
            <div className="text-center mt-2">
              <Button disabled={loading} type="submit" className="reset-btn">
                Send Reset Link
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <img src={logo2} alt="Your logo" style={{marginLeft: "20px", flexGrow: 0, flexShrink: 0, flexBasis: "auto"}} />
    </div>
  );
};

export default PasswordReset0;

