// import { useRef, useState } from "react";
// import { Alert, Button, Card, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { supabase } from "../supabase/client";

// const Register = () => {
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);
//   const confirmPasswordRef = useRef(null);
//   const [errorMsg, setErrorMsg] = useState("");
//   const [msg, setMsg] = useState("");
//   const [loading, setLoading] = useState(false);

//   const register = (email, password) =>
//     supabase.auth.signUp({ email, password });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (
//       !passwordRef.current?.value ||
//       !emailRef.current?.value ||
//       !confirmPasswordRef.current?.value
//     ) {
//       setErrorMsg("Please fill all the fields");
//       return;
//     }
//     if (passwordRef.current.value !== confirmPasswordRef.current.value) {
//       setErrorMsg("Passwords doesn't match");
//       return;
//     }
//     try {
//       setErrorMsg("");
//       setLoading(true);
//       const { data, error } = await register(
//         emailRef.current.value,
//         passwordRef.current.value
//       );
//       console.log(data);
//       console.log(error);
//       if (!error && data) {
//         setMsg(
//           "Registration Successful. Check your email to confirm your account"
//         );
//       }
//     } catch (error) {
//       setErrorMsg("Error in Creating Account");
//     }
//     setLoading(false);
//   };

//   return (
//     <>
//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Register</h2>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group id="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" ref={emailRef} required />
//             </Form.Group>
//             <Form.Group id="password">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" ref={passwordRef} required />
//             </Form.Group>
//             <Form.Group id="confirm-password">
//               <Form.Label>Confirm Password</Form.Label>
//               <Form.Control type="password" ref={confirmPasswordRef} required />
//             </Form.Group>
//             {errorMsg && (
//               <Alert
//                 variant="danger"
//                 onClose={() => setErrorMsg("")}
//                 dismissible>
//                 {errorMsg}
//               </Alert>
//             )}
//             {msg && (
//               <Alert variant="success" onClose={() => setMsg("")} dismissible>
//                 {msg}
//               </Alert>
//             )}
//             <div className="text-center mt-2">
//               <Button disabled={loading} type="submit" className="w-50">
//                 Register
//               </Button>
//             </div>
//           </Form>
//         </Card.Body>
//       </Card>
//       <div className="w-100 text-center mt-2">
//         Already a User? <Link to={"/login"}>Login</Link>
//       </div>
//     </>
//   );
// };

// export default Register;














import { useRef, useState } from "react";
import { Alert, Button, Card, Form, Col, Row } from "react-bootstrap";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import '../styles/Register.css';
import logo2 from './asset/p2.png';
import googleLogo from './asset/google.png';
import appleLogo from './asset/apple.png';
import linkedinLogo from './asset/linkedin.png';

const Register = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

const register = (email, password) =>
    supabase.auth.signUp({ email, password });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !firstNameRef.current?.value ||
      !lastNameRef.current?.value ||
      !passwordRef.current?.value ||
      !emailRef.current?.value ||
      !confirmPasswordRef.current?.value
    ) {
      setErrorMsg("Please fill all the fields");
      return;
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      setErrorMsg("Passwords doesn't match");
      return;
    }
    try {
      setErrorMsg("");
      setLoading(true);
      const { data, error } = await register(
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log(data);
      console.log(error);
      if (!error && data) {
        setMsg(
          "Registration Successful. Check your email to confirm your account"
        );
      }
    } catch (error) {
      setErrorMsg("Error in Creating Account");
    }
    setLoading(false);
  };

  return (
    <div className="register-container">
      <Card className="register-card">
        <Card.Body className="register-card-body">
          <Button onClick={() => navigate("/login")} className="register-button">
            Have an account? Log In
          </Button>
          <h2 className="register-header text-left margin-top-class">Create An Account</h2>
          <p className="supplement-sentence">Jump start your career!</p>
          <Button variant="light" className="auth-button google-signup-button">
            <img src={googleLogo} alt="Google logo" className="auth-logo" />
            Continue with Google
          </Button>
          <Button className="auth-button apple-button">
            <img src={appleLogo} alt="Apple logo" className="auth-logo" />
            Continue with Apple
          </Button>
          <Button style={{backgroundColor: '#0066C8', borderColor: '#0077b5'}} className="auth-button">
            <img src={linkedinLogo} alt="LinkedIn logo" className="auth-logo" />
            Continue with LinkedIn
          </Button>

          <div className="separator"> 
            <hr className="line"/> 
            <span className="text">Or Sign Up with Email</span> 
            <hr className="line"/> 
          </div>


          <Form onSubmit={handleSubmit}>

          <Row>
            <Form.Group as={Col} id="firstName" className="mb-4">
              <Form.Label className="text label-close-to-box">First Name</Form.Label>
              <Form.Control type="text" ref={firstNameRef} required className="rounded-form-control" />
            </Form.Group>
            <Form.Group as={Col} id="lastName" className="mb-4">
              <Form.Label className="text label-close-to-box">Last Name</Form.Label>
              <Form.Control type="text" ref={lastNameRef} required className="rounded-form-control" />
            </Form.Group>
          </Row>

            <Form.Group id="email" className="mb-4">
              <Form.Label className="text label-close-to-box">Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required className="rounded-form-control" placeholder="  mail@website.com" />
            </Form.Group>
            <Form.Group id="password" className="mb-4">
              <Form.Label className="text label-close-to-box">Create Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required className="rounded-form-control" placeholder="  min 8 characters" />
            </Form.Group>
            <Form.Group id="confirm-password" className="mb-4">
              <Form.Label className="text label-close-to-box">Confirm Password</Form.Label>
              <Form.Control type="password" ref={confirmPasswordRef} required className="rounded-form-control" placeholder="  re-enter password" />
            </Form.Group>
            {errorMsg && (
              <Alert
                variant="danger"
                onClose={() => setErrorMsg("")}
                dismissible>
                {errorMsg}
              </Alert>
            )}
            {msg && (
              <Alert variant="success" onClose={() => setMsg("")} dismissible>
                {msg}
              </Alert>
            )}
            <div className="text-center">
              <Button disabled={loading} type="submit" className="register-btn">
                Sign Up
              </Button>
              <p className="small-text text-center mt-2">
                By continuing you accept our standard{" "}
                <a href="https://wellfound.com/terms">terms and conditions</a> <br /> 
                and our <a href="https://wellfound.com/privacy">privacy policy</a>.
              </p>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <img src={logo2} alt="Your logo" className="register-image" />
    </div>
  );
};

export default Register;