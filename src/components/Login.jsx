import React ,{useState} from 'react';
import {useNavigate} from "react-router-dom";
import './Login.css';
    
const Login = () => {
  
   const [userEmail, setUserEmail]=useState('');
   const [userPassword,setUserPassword]=useState('');
   const navigate=useNavigate();
   const handleLogin = (e) => {
    e.preventDefault();
      navigate('/cart'); 
    
  };

  return (
    <div style={{ padding: '20px' }}>
        <div className='Login'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email: </label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
            />
            </div>
            <div>
              <label>Password: </label>
              <input
                type="password"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>

          </form>
          </div>
        </div>
      );
    }
    
    export default Login;
  

