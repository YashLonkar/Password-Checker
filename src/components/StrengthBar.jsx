import React from 'react';

const StrengthBar = ({ score }) => {
  const getBarColor = (score) => {
    switch(score) {
      case 0:
        return 'red';
      case 1:
        return 'orange';
      case 2:
        return 'yellow';
      case 3:
        return 'blue';
      case 4:
        return 'green';
      default:
        return 'transparent';
    }
  };

  const getBarWidth = (score) => {
    switch(score) {
      case 0:
        return '20%';
      case 1:
        return '40%';
      case 2:
        return '60%';
      case 3:
        return '80%';
      case 4:
        return '100%';
      default:
        return '0';
    }
  };

  return (
    <div className="strength-bar">
      <div 
        className="strength-bar-fill" 
        style={{ 
          backgroundColor: getBarColor(score), 
          width: getBarWidth(score) 
        }} 
      />
    </div>
  );
};

export default StrengthBar;
