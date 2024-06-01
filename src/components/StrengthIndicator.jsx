import React from 'react';
import StrengthBar from './StrengthBar';

const StrengthIndicator = ({ strength }) => {
  const getStrengthLabel = (score) => {
    switch(score) {
      case 0:
        return 'Very Weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return '';
    }
  };

  if (!strength) {
    return null;
  }

  return (
    <div className="strength-indicator">
      <p>Strength: {getStrengthLabel(strength.score)}</p>
      <StrengthBar score={strength.score} />
      <p>{strength.feedback.warning}</p>
      <ul>
        {strength.feedback.suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default StrengthIndicator;
