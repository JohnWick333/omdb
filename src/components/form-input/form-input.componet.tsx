import React from 'react';
import './form-input.style.scss';

interface props {
  name: string,
  type: string,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  value: string,
  label: string,
  required: boolean
}

const FormInput: React.FC<props> = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;