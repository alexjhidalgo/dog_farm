import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const Login = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const handleToggleForm = () => {
    setIsLoggingIn(!isLoggingIn);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleToggleForm}>
        {isLoggingIn ? 'Signing Up?' : 'Logging In?'}
      </button>
      {isLoggingIn ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default Login;
