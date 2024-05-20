'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { authOptions } from '../lib/AuthOptions'; // Ensure this path is correct

const SignInForm = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await signIn('credentials', {
        email:credentials.username,
        password:credentials.password,
      });

      if (result.error) {
        console.error('Sign-in error:', result.error);
      } else {
        console.log('Sign-in success:', result);
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={credentials.username} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={credentials.password} onChange={handleChange} />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignInForm;
