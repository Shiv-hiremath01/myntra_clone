import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/authAction';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
    navigate('/');
  };

  


  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleLogin}>
        
          <div className="form-group mb-3">
            <label>Email address</label>
            <input type="email" className="form-control" required value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group mb-4">
            <label>Password</label>
            <input type="password" className="form-control" required value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
          <p className="mt-3 text-center">
            Don’t have an account? <a href="/register">Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}




export default LoginForm;