import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Validate password length
    if (formData.password.length < 8) {
      alert('Password must be at least 8 characters!');
      return;
    }

    console.log('Form submitted:', formData);
    // Here you would normally send data to backend
    
    // Navigate to OTP verification page after successful signup
    navigate('/otpverification');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Mobile Logo - Only visible on mobile */}
      <div className="lg:hidden bg-gradient-to-r from-gray-900 to-black py-8 px-4">
        <div className="flex items-center justify-center space-x-1">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-2xl font-bold text-white">ote</span>
          <div className="w-6 h-6 border-2 border-white rounded-md flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm"></div>
          </div>
          <span className="text-2xl font-bold text-white">ow</span>
        </div>
      </div>

      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Flowing curved lines */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 -left-20 w-96 h-96 bg-gradient-to-r from-gray-700 to-transparent rounded-full opacity-20 blur-3xl animate-pulse"></div>
            <div className="absolute top-40 -right-32 w-80 h-80 bg-gradient-to-l from-gray-600 to-transparent rounded-full opacity-15 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-r from-gray-500 to-transparent rounded-full opacity-10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          {/* Curved flowing shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-0 w-full h-32 bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-20 transform -skew-y-12"></div>
            <div className="absolute top-1/2 left-0 w-full h-24 bg-gradient-to-r from-transparent via-gray-600 to-transparent opacity-15 transform skew-y-6"></div>
            <div className="absolute bottom-1/4 left-0 w-full h-28 bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-20 transform -skew-y-6"></div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center text-white p-12">
          {/* Logo */}
          <div className="mb-16">
            <div className="flex items-center justify-center space-x-1">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-3xl font-bold text-white">ote</span>
              <div className="w-8 h-8 border-2 border-white rounded-md flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-3xl font-bold text-white">ow</span>
            </div>
          </div>

          {/* Main content */}
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-bold mb-6">Get Started with Us</h1>
            <p className="text-gray-300 mb-12 text-lg">
              Complete these easy steps to register your account
            </p>

            {/* Steps */}
            <div className="space-y-4 w-full max-w-sm">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-4 flex items-center shadow-lg border border-white border-opacity-20">
                <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold mr-4 shadow-md">
                  1
                </div>
                <span className="text-white font-medium text-lg">Sign up your account</span>
              </div>
              
              <div className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl p-4 flex items-center shadow-lg border border-gray-600 border-opacity-30">
                <div className="w-10 h-10 bg-gray-600 text-gray-300 rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <span className="text-gray-300 font-medium text-lg">Get your OTP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign Up Account</h2>
            <p className="text-gray-600">Enter your personal data to create your account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 bg-gray-200 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g mustapharidwan@gmail.com"
                className="w-full px-4 py-3 bg-gray-200 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-gray-200 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                required
                minLength={8}
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full px-4 py-3 bg-gray-200 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                required
                minLength={8}
              />
              <p className="text-sm text-gray-600 mt-2">Must be at least 8 characters</p>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition duration-200"
            >
              Sign Up
            </button>

            <p className="text-center text-gray-600">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/signin')}
                className="text-black font-medium hover:underline"
              >
                Log in
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;