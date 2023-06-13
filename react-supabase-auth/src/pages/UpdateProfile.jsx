import { useRef, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../context/AuthProvider";
import logo8 from './asset/p8.png';

const UpdateProfile = () => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const schoolRef = useRef();
  const majorRef = useRef();
  const graduationTimeRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const stateRef = useRef();
  const cityRef = useRef();
  const skillSetRef = useRef();
  
  // useAuth() provides a updateUserProfile function
  const { updateUserProfile } = useAuth();

  const stateList = ['NY', 'CA', 'TX'];
  const cityList = ['New York', 'New Jersey', 'Longisland City'];
  const skillList = ['Digital Marketing', 'Data Analytics', 'Software Engineering'];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call function to update the user's profile with the new data
    await updateUserProfile({
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      school: schoolRef.current.value,
      major: majorRef.current.value,
      graduationTime: graduationTimeRef.current.value,
      phone: phoneRef.current.value,
      email: emailRef.current.value,
      State: stateRef.current.value,
      City: cityRef.current.value,
      skillSet: skillSetRef.current.value,
    });
  };

  return (
    // <Card>
    //   <Card.Body>
    //     <h2 className="text-center mb-4">Update Profile</h2>
    //     <Form onSubmit={handleSubmit}>
    //       <Form.Group id="first-name">
    //         <Form.Label>First Name</Form.Label>
    //         <Form.Control type="text" ref={firstNameRef} required />
    //       </Form.Group>
    //       <Form.Group id="last-name">
    //         <Form.Label>Last Name</Form.Label>
    //         <Form.Control type="text" ref={lastNameRef} required />
    //       </Form.Group>
    //       <Form.Group id="school">
    //         <Form.Label>School Attended</Form.Label>
    //         <Form.Control type="text" ref={schoolRef} required />
    //       </Form.Group>         
    //        <Form.Group id="major">
    //         <Form.Label>Major</Form.Label>
    //         <Form.Control type="text" ref={majorRef} required />
    //       </Form.Group>
    //       <Form.Group id="graduation-time">
    //         <Form.Label>Graduation Time</Form.Label>
    //         <Form.Control type="date" ref={graduationTimeRef} required />
    //       </Form.Group>
    //       <Form.Group id="phone">
    //         <Form.Label>Phone Number</Form.Label>
    //         <Form.Control type="tel" ref={phoneRef} required />
    //       </Form.Group>
    //       <Form.Group id="email">
    //         <Form.Label>Email Address</Form.Label>
    //         <Form.Control type="email" ref={emailRef} required />
    //       </Form.Group>
    //       <Form.Group id="State">
    //         <Form.Label>State</Form.Label>
    //         <Form.Control as="select" ref={cityRef} required>
    //           {stateList.map(state => (
    //             <option key={state} value={state}>{state}</option>
    //           ))}
    //         </Form.Control>
    //       </Form.Group>
    //       <Form.Group id="City">
    //         <Form.Label>City</Form.Label>
    //         <Form.Control as="select" ref={cityRef} required>
    //           {cityList.map(city => (
    //             <option key={city} value={city}>{city}</option>
    //           ))}
    //         </Form.Control>
    //       </Form.Group>
    //       <Form.Group id="skill-set">
    //         <Form.Label>Skill Set</Form.Label>
    //         <Form.Control as="select" ref={skillSetRef} required>
    //           {skillList.map(skill => (
    //             <option key={skill} value={skill}>{skill}</option>
    //           ))}
    //         </Form.Control>
    //       </Form.Group>
    //       <Button type="submit" className="w-100 mt-2">
    //         Update Profile
    //       </Button>
    //     </Form>
    //   </Card.Body>
    // </Card>
    <img src={logo8} alt="Your logo" style={{marginLeft: "20px", flexGrow: 0, flexShrink: 0, flexBasis: "auto"}} />
  );

};

export default UpdateProfile;
