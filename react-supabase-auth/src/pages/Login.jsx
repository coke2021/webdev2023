
// const Login = () => {
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);
//   const [errorMsg, setErrorMsg] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const { login, user } = useAuth();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setErrorMsg("");
  //     setLoading(true);
  //     if (!passwordRef.current?.value || !emailRef.current?.value) {
  //       setErrorMsg("Please fill in the fields");
  //       return;
  //     }
  //     const {
  //       data: { user, session },
  //       error
  //     } = await login(emailRef.current.value, passwordRef.current.value);
  //     if (error) setErrorMsg(error.message);
  //     if (user && session) {
  //       navigate("/update-profile")
  //       // `profileFilled` that is true if the user has filled out their profile
  //       //if (!user.profileFilled) {
  //       //  navigate("/register-profile"); // Redirect to UpdateProfile page
  //       //} else {
  //       //  navigate("/"); // Redirect to home page
  //       //}
  //     }
  //   } catch (error) {
  //     setErrorMsg("Email or Password Incorrect");
  //   }
  //   setLoading(false);
  // };

//   return (
//     <>
//       <Card>
//         <div className="d-flex">
//          <Card.Body>
//            <h4 className="text-center mb-4">Login</h4>
//            <div className="w-100 text-center mt-2">
//              By continuing, you agree to our Terms of Use and Privacy Policy.
//            </div>
//            <Form onSubmit={handleSubmit}>
//              <Form.Group id="email">
//                <Form.Label>Email</Form.Label>
//                <Form.Control type="email" ref={emailRef} required />
//              </Form.Group>
//              <Form.Group id="password">
//                <Form.Label>Password</Form.Label>
//                <Form.Control type="password" ref={passwordRef} required />
//              </Form.Group>
//              {errorMsg && (
//               <Alert
//                 variant="danger"
//                 onClose={() => setErrorMsg("")}
//                 dismissible>
//                 {errorMsg}
//               </Alert>
//             )}
//             <div className="text-center mt-2">
//               <Button disabled={loading} type="submit" className="w-50">
//                 Login
//               </Button>
//             </div>
//           </Form>
//         </Card.Body>
//         </div>
//         <div className="w-100 text-center mt-2">
//           New User? <Link to={"/register"}>Register</Link>
//         </div>
//         <div className="w-100 text-center mt-2">
//           Forgot Password? <Link to={"/passwordreset"}>Click Here</Link>
//         </div>
//       </Card>
//     </>
//   );
// };

// export default Login;



import { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import '../styles/Login.css';
import logo2 from './asset/p2.png';
import googleLogo from './asset/google.png';
import appleLogo from './asset/apple.png';
import linkedinLogo from './asset/linkedin.png';


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
    <div className="login-container">
      <Card className="login-card">
        <Card.Body className="login-card-body">
          <Button onClick={() => navigate("/register")} className="register-button">
            Don't have an account yet? Sign Up
          </Button>
          <h4 className="login-header text-left margin-top-class">Login</h4>
          <p className="supplement-sentence">Find your next opportunity!</p>
          {/* third party login */}
          <Button variant="light" className="auth-button google-signup-button">
            <img src={googleLogo} alt="Google logo" className="auth-logo" />
            Login with Google
          </Button>
          <Button className="auth-button apple-button">
            <img src={appleLogo} alt="Apple logo" className="auth-logo" />
            Login with Apple
          </Button>
          <Button style={{backgroundColor: '#0066C8', borderColor: '#0077b5'}} className="auth-button">
            <img src={linkedinLogo} alt="LinkedIn logo" className="auth-logo" />
            Login with LinkedIn
          </Button>


          <div className="separator"> 
            <hr className="line"/> 
            <span className="text">Or Login with Email</span> 
            <hr className="line"/> 
          </div>

          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label className="text label-close-to-box">Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required className="rounded-form-control" placeholder="  Email" />
            </Form.Group>
            <Form.Group id="password">
                <Form.Label className="text label-close-to-box">Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required className="rounded-form-control" placeholder="  Password" />
            </Form.Group>
            {errorMsg && (
              <Alert
                variant="danger"
                onClose={() => setErrorMsg("")}
                dismissible>
                {errorMsg}
              </Alert>
            )}

            <div className="d-flex justify-content-between align-items-center margin-top-class">
              <Form.Check type="checkbox" label="Remember Me" className="text"/>
              <Link to="/passwordreset" className="text">Forgot Password?</Link>
            </div>

            <div className="text-center">
              <Button disabled={loading} type="submit" className="login-btn">
                Login
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <img src={logo2} alt="Your logo" style={{marginLeft: "20px", flexGrow: 0, flexShrink: 0, flexBasis: "auto"}} />
    </div>
  );
};

export default Login;
