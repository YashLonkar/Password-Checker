import React from 'react';

const PasswordInput = ({ password, showPassword, onPasswordChange, onToggleVisibility }) => {
  return (
    <div className="password-input">
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={onPasswordChange}
        placeholder="Enter your password"
      />
      <button onClick={onToggleVisibility}>
        {showPassword ? 'Hide' : 'Show'}
      </button>
    </div>
  );
};

export default PasswordInput;
