import React, { ChangeEvent } from 'react';

interface SelectProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  classes?: string;
}

const SelectBox: React.FC<SelectProps> = ({ options, value, onChange, classes }) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <select
      className={`${classes} block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none`}
      value={value}
      onChange={handleChange}
    >
      { options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      )) }
    </select>
  );
};

export default SelectBox;
