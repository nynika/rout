import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const paramsUsername = searchParams.get('username');
    const paramsPassword = searchParams.get('password');

    // Check if username and password are provided in the URL
    if (paramsUsername && paramsPassword) {
      setUsername(paramsUsername);
      setPassword(atob(paramsPassword)); // Decode Base64 encoded password
    } else {
      // If not provided, set defaults
      setUsername('sujithra');
      setPassword('suji@2026');
    }
  }, [location.search]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if the username and password are correct
    if (username === 'sujithra' && password === 'suji@2026') {
      // Navigate to the home page
      navigate('/home');
    } else {
      // Alert the user that the username or password is wrong
      alert('Username or password is wrong');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <br /><br />
        <label htmlFor="password">Password:</label>
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input
          type="checkbox"
          id="showPassword"
          onClick={showPasswordHandler}
        /> 
        <label htmlFor="showPassword"> Show Password</label>
        <br /><br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default LoginPage;
