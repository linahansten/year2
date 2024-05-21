'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { signIn } from 'next-auth/react';

interface Credentials {
  username: string;
  password: string;
}

const SignInForm = () => {
  const [credentials, setCredentials] = useState<Credentials>({ username: '', password: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = await signIn('credentials', {
        username: credentials.username,
        password: credentials.password,
        redirect: true,
        callbackUrl: '/create-events'
      });
  
      if (result?.error) {
        console.error('Sign-in error:', result.error);
      } else {
        console.log('Sign-in success:', result);
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };
  

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center flex-col">
      <form onSubmit={handleSubmit} className="bg-gray-800 shadow-md rounded-md p-8 max-w-md w-full">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-100">Sign In</h2>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-semibold mb-2">Username</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md bg-gray-700 focus:outline-none focus:border-blue-500 text-gray-100"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-semibold mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md bg-gray-700 focus:outline-none focus:border-blue-500 text-gray-100"
            placeholder="Password"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gray-700 hover:bg-gray-600 text-gray-100 font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </div>
      </form>
      <a className="text-gray-300 text-sm mt-4" href="/">Home</a>
    </div>
  );
}

export default SignInForm;
