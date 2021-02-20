import React from 'react';
import useForm from '../../custom-hooks/useForm';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.componet';
import './signIn.style.scss';

const SignIn: React.FC = () => {

  const [formValues, handleChange] = useForm({ email: '', password: '' })

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();
  }

  return (
    <div className="sign-in-container">
      <div className='sign-in'>
        <h2 className="title">Welcome to Showtime!</h2>
        <form onSubmit={handleFormSubmit}>
          <div className='sign-in-form'>
            <FormInput
              name='email'
              type='email'
              handleChange={handleChange}
              value={formValues.email}
              label='email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={formValues.password}
              handleChange={handleChange}
              label='password'
              required
            />
            <CustomButton type='submit'> Sign in </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;