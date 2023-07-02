import React, { ChangeEvent } from 'react';

interface RadioButtonProps {
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  label,
  checked,
  onChange,
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <label>
      <input
        type="radio"
        value={value}
        checked={checked}
        onChange={handleChange}
      />
      {label}
    </label>
  );
};

export default RadioButton;
