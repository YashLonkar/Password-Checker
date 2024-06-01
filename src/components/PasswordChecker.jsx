import React, { useState } from 'react';
import zxcvbn from 'zxcvbn';
import PasswordInput from './PasswordInput';
import StrengthIndicator from './StrengthIndicator';
import Footer from './Footer';

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState(null);
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setPassword(e.target.value);
    setChecked(false);
  };

  const handleCheck = () => {
    if (password.trim() === '') {
      window.alert('Password field is empty!');
      return;
    }
    const evaluation = zxcvbn(password);
    setStrength(evaluation);
    setChecked(true);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="password-strength-checker">
      <h2>Password Strength Checker</h2>
      <PasswordInput
        password={password}
        showPassword={showPassword}
        onPasswordChange={handleChange}
        onToggleVisibility={toggleShowPassword}
      />
      <button onClick={handleCheck}>Check</button>
      {checked && <StrengthIndicator strength={strength} />}
    </div>
  );
};

export default PasswordStrengthChecker;
