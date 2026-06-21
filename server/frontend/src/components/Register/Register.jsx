import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Logic đăng ký tài khoản xử lý ở đây
  };

  return (
    <div className="register_container" style={{ width: '50%', margin: '5% auto' }}>
      <div className="header" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <span className="title" style={{ fontSize: '24px', fontWeight: 'bold' }}>Sign Up</span>
      </div>
      <hr/>
      <form onSubmit={handleRegister}>
        <div className="input_group" style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Username</label>
          <input 
            type="text" 
            className="input_field" 
            placeholder="Enter Username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        
        <div className="input_group" style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>First Name</label>
          <input 
            type="text" 
            className="input_field" 
            placeholder="Enter First Name" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            required 
          />
        </div>

        <div className="input_group" style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Last Name</label>
          <input 
            type="text" 
            className="input_field" 
            placeholder="Enter Last Name" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            required 
          />
        </div>

        <div className="input_group" style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input 
            type="email" 
            className="input_field" 
            placeholder="Enter Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>

        <div className="input_group" style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Password</label>
          <input 
            type="password" 
            className="input_field" 
            placeholder="Enter Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        <button type="submit" className="btn btn-primary" style={{ padding: '10px 20px', cursor: 'pointer' }}>Register</button>
      </form>
    </div>
  );
};

export default Register;
