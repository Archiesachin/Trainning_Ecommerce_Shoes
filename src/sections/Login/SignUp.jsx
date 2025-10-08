import axios from 'axios';
import { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { getUsers, createUser } from '../../services/userService';


const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
const numberRegex = /^\d{10}$/;

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [data, setData] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
const [generalError, setGeneralError] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
     setGeneralError(""); 
    // Validation
     let errors = {};
     if (!email) errors.email = "This field is mandatory";
  if (!username) errors.username = "This field is mandatory";
  if (!number) errors.number = "This field is mandatory";
  if (!password) errors.password = "This field is mandatory";
  if (!confirmPassword) errors.confirmPassword = "This field is mandatory";

    if (!usernameRegex.test(username)) 
      errors.username = "Username must be 3-20 letters/numbers, no spaces.";
    if (!numberRegex.test(number)) 
      errors.number = "Contact number must be a valid 10 digit number.";
    
    if (password && confirmPassword && password !== confirmPassword) 
      errors.confirmPassword = "Passwords do not match.";

    if (Object.keys(errors).length > 0) {
    setFieldErrors(errors);
    return;
  }

  setFieldErrors({}); 

   try {
            const users = await getUsers();
            const currentUser = users.find(item => item.username === username || item.email === email);
            if (currentUser) {
                setGeneralError("User Already Exists");
      return;
            }
            await createUser({ email, username, password, number });
            setUsername("");
    setPassword("");
    setConfirmPassword("");
    setNumber("");
    setEmail(""); 
    setData(true);
        } catch (error) {
    console.log(error);
    setGeneralError("There was a problem signing up. Try again later.");
        }
  }

  if (data) {
    navigate("/login");
  }

  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div className="username">
          <label htmlFor="email">Enter Email</label>
          <input type="email" id='email' value={email} placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} />
          {fieldErrors.email && (
    <div style={{
      color: 'red',
      fontSize: '15px',
      fontFamily: '"Lexend Exa",sans-serif',
      marginTop: '2px'
    }}>
      {fieldErrors.email}
    </div>
  )}

        </div>
        <div className="username">
          <label htmlFor="name">Enter Name</label>
          <input type="text" id='name' value={username} placeholder='Name' onChange={(e) => { setUsername(e.target.value) }} />
          {fieldErrors.username && (
    <div style={{
      color: 'red',
      fontSize: '15px',
      fontFamily: '"Lexend Exa",sans-serif',
      marginTop: '2px'
    }}>
      {fieldErrors.username}
    </div>
  )}
        </div>
        <div className="phone">
          <label htmlFor="number">Enter Contact Number</label>
          <input type="text" id='number' value={number} placeholder='Contact Number' onChange={(e) => { setNumber(e.target.value) }} />

           {fieldErrors.number && (
    <div style={{
      color: 'red',
      fontSize: '15px',
      fontFamily: '"Lexend Exa",sans-serif',
      marginTop: '2px'
    }}>
      {fieldErrors.number}
    </div>
  )}

        </div>
        <div className="password">
          <label htmlFor="password">Enter Password</label>
          <input type="password" id='password' value={password} placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} />

          {fieldErrors.password && (
    <div style={{
      color: 'red',
      fontSize: '15px',
      fontFamily: '"Lexend Exa",sans-serif',
      marginTop: '2px'
    }}>
      {fieldErrors.password}
    </div>
  )}

        </div>
        <div className="password">
          <label htmlFor="Cpassword">Confirm Password</label>
          <input type="password" id='Cpassword' value={confirmPassword} placeholder='Confirm Password' onChange={(e) => { setConfirmPassword(e.target.value) }} />
          {fieldErrors.confirmPassword && (
    <div style={{
      color: 'red',
      fontSize: '15px',
      fontFamily: '"Lexend Exa",sans-serif',
      marginTop: '2px'
    }}>
      {fieldErrors.confirmPassword}
    </div>
  )}
        </div>
        {generalError && (
  <div style={{
    color: 'red',
    fontSize: '16px',
    fontFamily: '"Lexend Exa",sans-serif',
    textAlign: 'center',
    marginBottom: '5px'
  }}>
    {generalError}
  </div>
)}
        <button type="submit">Submit</button>
        <p>Already have an account? <Link to='/login'><span>Click Here</span></Link></p>
      </form>
    </div>
  );
};

export default SignUp;
