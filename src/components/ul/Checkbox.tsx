import React, { ChangeEvent, useId } from 'react';

interface CheckboxProps {
  value: string;
  label: string;
  checked: boolean;
  onChange: (value: string, checked: boolean) => void;
  classes?: string,
  labelCalsses? : string,
  htmlTag?: string
}

const Checkbox: React.FC<CheckboxProps> = ({
  value,
  label,
  checked,
  onChange,
  classes,
  labelCalsses,
  htmlTag
}) => {
 const randomId = useId();
 const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    onChange(value, isChecked);
  };
 const taskLable = htmlTag === "true" ? <s> {label}</s> : label;

  return ( 
    <>
      <input
         type="checkbox"
         value={value}
         checked={checked}
         onChange={handleChange}
         className={classes}
         id={randomId}
      />
     <label className={labelCalsses} htmlFor={randomId}>{taskLable}</label>
    </>
  );
};

export default Checkbox;
