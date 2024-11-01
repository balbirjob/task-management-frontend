import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import '../style/setting.css';

function Setting() {

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const toggleOldPasswordVisibility = () => {
    setShowOldPassword(!showOldPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };



  return (
    <div className="form-container">
      <form className="update-form">
        {/* Name Field */}
        <div className="input-container">
          <FaUser className="input-icon" />
          <input
            type="text"
            placeholder="Name"
            className="input-field"
          />
        </div>

        {/* Update Email Field */}
        <div className="input-container">
          <FaEnvelope className="input-icon" />
          <input
            type="email"
            placeholder="Update Email"
            className="input-field"
          />
        </div>

        {/* Old Password Field with Show/Hide Icon */}
        <div className="input-container">
          <FaEnvelope className="input-icon" />
          <input
            type={showOldPassword ? 'text' : 'password'}
            placeholder="Old Password"
            className="input-field"
          />
          {showOldPassword ? (
            <FaEyeSlash className="toggle-icon" onClick={toggleOldPasswordVisibility} />
          ) : (
            <FaEye className="toggle-icon" onClick={toggleOldPasswordVisibility} />
          )}
        </div>

        {/* New Password Field with Show/Hide Icon */}
        <div className="input-container">
          <FaEnvelope className="input-icon" />
          <input
            type={showNewPassword ? 'text' : 'password'}
            placeholder="New Password"
            className="input-field"
          />
          {showNewPassword ? (
            <FaEyeSlash className="toggle-icon" onClick={toggleNewPasswordVisibility} />
          ) : (
            <FaEye className="toggle-icon" onClick={toggleNewPasswordVisibility} />
          )}
        </div>

        {/* Update Button */}
        <button type="submit" className="update-btn">
          Update
        </button>
      </form>
    </div>
  );
}

export default Setting;
