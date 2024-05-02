import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const emailRef = useRef();

  const Submit = (e) => {
    e.preventDefault();
    if (!emailRef.current.value.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      alert('Please enter a valid email address.');
      return;
    }
    axios.post('http://localhost:3001/register', { name, email, password })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    navigate('/login');
  };

  return (
    <div className='register-main'>
      <img className="Log-image" src="/SAFE.svg" alt="Logo" />
      <div className='reg-grp'>
        <h1 className='HeadingForm'>Sign Up</h1>
        <form onSubmit={Submit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name"
              onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email"
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password"
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button className="Submit-Login" type="submit">Register</button>
          <p>Already have an Account? </p>
          <button className="Submit-Login" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;