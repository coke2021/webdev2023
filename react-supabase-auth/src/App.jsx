import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PasswordReset0 from "./pages/PasswordReset0";
import Register from "./pages/Register";
import UpdatePassword from "./pages/UpdatePassword";
import UpdateProfile from './pages/UpdateProfile'; 

const App = () => {
  return (
    <>
      <NavBar />
      <Container>
        <div>
          <Routes>
            <Route element={<AuthRoute />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            // add a route for the RegisterProfile
            <Route path="/update-profile" element={<UpdateProfile />} />
            <Route path="/passwordreset" element={<PasswordReset0 />} />
            <Route path="/update-password" element={<UpdatePassword />} />
          </Routes>
        </div>
      </Container>
    </>
  );
};

export default App;
