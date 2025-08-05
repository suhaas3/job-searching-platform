import React, { useState } from 'react';
import './Settings.css';
import Footer from '../../ReusableComponents/Footer/Footer';

function Settings() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [alternatePhone, setAlternatePhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple check (optional)
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const userData = {
      name,
      email,
      password,
      phone,
      alternatePhone
    };

    console.log("Form Submitted:", userData);
    alert("Changes saved!");
  };

  return (
    <>
    <div className="settings-container">
      <h2>Account Settings</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Create Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <label>Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+91 1234567890"
        />

        <label>Alternate Phone</label>
        <input
          type="text"
          value={alternatePhone}
          onChange={(e) => setAlternatePhone(e.target.value)}
          placeholder="+91 9876543210"
        />

        <button type="submit">Save Changes</button>
      </form>
    </div>

    <Footer/>
    </>
  );
}

export default Settings;
