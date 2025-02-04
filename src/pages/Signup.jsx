import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import loginback from '../assets/loginback.jpg'; // Adjust the path as necessary

// Validation Schema using Yup
const signInSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const signUpSchema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    .required('Password is required'),
});

const SignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between sign in & sign up
  const [message, setMessage] = useState(''); // Success message state

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(isSignUp ? signUpSchema : signInSchema),
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);

    if (isSignUp) {
      setMessage('Signup Successful! 🎉');
    } else {
      setMessage('Login Successful! ✅');
    }

    setTimeout(() => setMessage(''), 3000); // Hide message after 3 seconds
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      style={{ backgroundImage: `url(${loginback})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </h2>

        {/* Success Message */}
        {message && (
          <div className="text-center text-green-600 font-semibold bg-green-100 p-2 rounded-md mb-4">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Full Name (Only for Sign Up) */}
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="Full Name"
                {...register('fullName')}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
            </div>
          )}

          {/* Email Field */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register('email')}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </div>

          {/* Password Field */}
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register('password')}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
        </form>

        {/* Toggle Between Sign In / Sign Up */}
        <p className="text-center mt-4 text-sm">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-500 font-semibold ml-2"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;