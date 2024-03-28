import React,{useState} from 'react';
import './Login.css'; // You may need to create a CSS file for styling
import { useNavigate } from 'react-router-dom';
import AImage from './A.png';

function Login({ setAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://3.16.11.52:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Assuming the response includes a key like 'success' indicating successful login
        if (data.success) {
          // Set authentication status to true
          setAuthenticated(true);
          // Redirect to the dashboard and pass user data
          
          navigate('/', { state: { user: data.user } });
        } else {
          console.error('Authentication failed');
        }
      } else {
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  return (
   
    <div className='container'>
      
      <div className="background-image"></div>
      
    <div className="login-container">
      
      <div className="login-box">
        <div className="logo-container">
          {/* Your logo here */}
          <img src={AImage} className='img-fluid' alt='Sotyo'/>
          {/* <h1 style={{fontSize:'1.2rem',color:'#893487',fontWeight:'800'}} ><b className="rtsp" style={{fontSize:'2rem',color:'#893487',fontWeight:'800'}}>Sotyo</b>  - An Ethce Care Product</h1>
          */}
          
        </div>
        <p className="login-text">Login into your account</p>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group grp1">
            <label className='ladel' htmlFor="username">Username</label>
            <input
                type="text"
                className='inputbox3 inputw'
                id="username"
                name="username"
                placeholder='Enter Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
          </div>
          <div className="input-group grp1">
            <label className='ladel' htmlFor="password">Password</label>
              <input
                type="password"
                className='inputbox3 inputw'
                id="password"
                name="password"
                placeholder='Enter Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="forgot-password">
          <p>Forgot password?</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login;
