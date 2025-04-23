import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/userAction';
import { useNavigate } from 'react-router-dom';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
    navigate('/login');
  };

  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
      <div className="card shadow p-4" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-4">Register</h3>
        <form onSubmit={handleRegister}>
        <div className="form-group mb-3">
            <label>Name</label>
            <input type="name" className="form-control" required value={name}
              onChange={(e) => setName(e.target.value)} />
          </div>
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
          <button type="submit" className="btn btn-success w-100">Register</button>
          <p className="mt-3 text-center">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
}





export default RegisterForm;