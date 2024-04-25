import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import axios from 'axios';

const Signup = () => {
  const[name , Setname] = useState()
  const[email, Setemail] = useState()
  const[password, Setpassword] = useState()
  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault()
    // console.log(name,email,password)
    axios.post('http://localhost:3001/register',{name,email,password})
   .then(res => {console.log(res)})
   .catch(err => {console.log(err)});
    navigate('/login')
  }

  return (
    <div className='register-main'>
       <img className = "Log-image" src="/SAFE.svg" alt="Logo" />
      
      <div className='reg-grp'>
      <h1 className='HeadingForm'>Sign Up</h1>
      <form onSubmit={Submit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name"
          onChange={(e)=>Setname(e.target.value)}
          />
        </div>
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
        <button className = "Submit-Login" type="submit">Register</button>
        <p>Already have an Account? </p>
        <button className = "Submit-Login" type="submit">Login</button>
        {/* <Link to="/login">Login</Link>  */}
        </form>
      </div>
    </div>
  );
};

export default Signup;