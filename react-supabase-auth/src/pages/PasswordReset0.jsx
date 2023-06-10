// import { useRef, useState } from "react";
// import { useAuth } from "../context/AuthProvider";
// import { Alert, Button, Card, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import logo2 from './asset/p2.png';

// const PasswordReset = () => {
//   const { passwordReset } = useAuth();
//   const emailRef = useRef(null);
//   const [loading, setLoading] = useState(false);
//   const [msg, setMsg] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const { error } = await passwordReset(emailRef.current.value);
//       if (!error) {
//         setMsg("Password reset has been sent to your email");
//       }
// c    } catch (e) {
//       console.error(e);
//     }
//     setLoading(false);
//   };

//   return (
//     <>
//     <img src={logo2} alt="Your logo" className="login-logo" />
//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Reset Password</h2>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group id="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" ref={emailRef} required />
//             </Form.Group>
//             {msg && (
//               <Alert variant="success" onClose={() => setMsg("")} dismissible>
//                 {msg}
//               </Alert>
//             )}
//             <div className="text-center mt-2">
//               <Button disabled={loading} type="submit" className="w-50">
//                 Send Reset Link
//               </Button>
//             </div>
//           </Form>
//         </Card.Body>
//         <div className="w-100 text-center mt-2">
//           Back to Login? <Link to={"/login"}>Login</Link>
//         </div>
//       </Card>
//     </>
//   );
// };

// export default PasswordReset;

// import { useRef, useState } from "react";
// import { useAuth } from "../context/AuthProvider";
// import { Alert, Button, Card, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import logo2 from './p1.png';

// const PasswordReset0 = () => {
//   const { passwordReset } = useAuth();
//   const emailRef = useRef(null);
//   const [loading, setLoading] = useState(false);
//   const [msg, setMsg] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const { error } = await passwordReset(emailRef.current.value);
//       if (!error) {
//         setMsg("Password reset has been sent to your email");
//       }
//     } catch (e) {
//       console.error(e);
//     }
//     setLoading(false);
//   };

//   return (
//     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Reset Password</h2>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group id="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" ref={emailRef} required />
//             </Form.Group>
//             {msg && (
//               <Alert variant="success" onClose={() => setMsg("")} dismissible>
//                 {msg}
//               </Alert>
//             )}
//             <div className="text-center mt-2">
//               <Button disabled={loading} type="submit" className="w-50">
//                 Send Reset Link
//               </Button>
//             </div>
//           </Form>
//         </Card.Body>
//         <div className="w-100 text-center mt-2">
//           Back to Login? <Link to={"/login"}>Login</Link>
//         </div>
//       </Card>
//       <img src={logo2} alt="Your logo" className="login-logo" style={{ marginLeft: '20px' }} />
//     </div>
//   );
// };

// export default PasswordReset0;

import { useRef, useState } from "react";
import { useAuth } from "../context/AuthProvider";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo2 from './asset/p1.png';

const PasswordReset0 = () => {
  const { passwordReset } = useAuth();
  const emailRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

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
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Card style={{flexGrow: 1, flexShrink: 1, flexBasis: "auto"}}>
        <Card.Body>
          <h2 className="text-center mb-4">Reset Password</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            {msg && (
              <Alert variant="success" onClose={() => setMsg("")} dismissible>
                {msg}
              </Alert>
            )}
            <div className="text-center mt-2">
              <Button disabled={loading} type="submit" className="w-50">
                Send Reset Link
              </Button>
            </div>
          </Form>
        </Card.Body>
        <div className="w-100 text-center mt-2">
          Back to Login? <Link to={"/login"}>Login</Link>
        </div>
      </Card>
      <img src={logo2} alt="Your logo" style={{marginLeft: "20px", flexGrow: 0, flexShrink: 0, flexBasis: "auto"}} />
    </div>
  );
};

export default PasswordReset0;

