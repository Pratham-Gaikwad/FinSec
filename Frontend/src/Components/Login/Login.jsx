import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './login.css';

const Signup = () => {  
  const[email, Setemail] = useState()
  const[password, Setpassword] = useState()
  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault()
    // console.log(name,email,password)
    axios.post('http://localhost:3001/login',{email,password})
   .then(res => {
    console.log(res)
    if(res.data.message === 'success'){
      navigate('/Disp')
    }
  })
   .catch(err => {console.log(err)});
  }

  return (
    <div className='login-main'>
      <img className = "Log-image" src="/SAFE.svg" alt="Logo" />
      
    <div className='login-form'>
      <div className='login-grp'>
      <h1 className = "HeadingForm">Login</h1>
      <form onSubmit={Submit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"
          onChange={(e)=>Setemail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" 
          onChange={(e)=>Setpassword(e.target.value)}
          />
        </div>
        <button  className = "Submit-Login" type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Signup;