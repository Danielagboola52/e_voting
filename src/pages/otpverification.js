import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (index, value) => {
    if (value.length > 1) return; // Only allow single digit
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join('');
    
    // Validate OTP is complete
    if (otpCode.length !== 6) {
      alert('Please enter all 6 digits');
      return;
    }
    
    console.log('OTP submitted:', otpCode);
    // Here you would normally verify OTP with backend
    
    // Navigate to sign in page after successful OTP verification
    navigate('/signin');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Mobile Logo - Only visible on mobile */}
      <div className="lg:hidden bg-gradient-to-r from-gray-900 to-black py-6 px-4">
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

      {/* Left Side - Branding with Background Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Image Section */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("/assets/rectangle1-1.png")',
            backgroundColor: '#1f2937'
          }}
        >
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center text-white p-8 lg:p-12">
          {/* Logo */}
          <div className="mb-12 lg:mb-16">
            <div className="flex items-center justify-center space-x-1">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-2xl lg:text-3xl font-bold text-white">ote</span>
              <div className="w-7 h-7 lg:w-8 lg:h-8 border-2 border-white rounded-md flex items-center justify-center">
                <div className="w-3 h-3 lg:w-4 lg:h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-2xl lg:text-3xl font-bold text-white">ow</span>
            </div>
          </div>

          {/* Main content */}
          <div className="text-center max-w-md px-4">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Get Started with Us</h1>
            <p className="text-gray-200 mb-8 lg:mb-12 text-base lg:text-lg">
              Complete these easy steps to register your account
            </p>

            {/* Steps */}
            <div className="space-y-3 lg:space-y-4 w-full max-w-sm">
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-3 lg:p-4 flex items-center shadow-lg">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-black text-white rounded-full flex items-center justify-center font-bold mr-3 lg:mr-4 shadow-md text-sm lg:text-base">
                  1
                </div>
                <span className="text-black font-medium text-base lg:text-lg">Sign up your account</span>
              </div>
              
              <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-xl p-3 lg:p-4 flex items-center shadow-lg">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-black text-white rounded-full flex items-center justify-center font-bold mr-3 lg:mr-4 shadow-md text-sm lg:text-base">
                  2
                </div>
                <span className="text-black font-medium text-base lg:text-lg">Get your OTP</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - OTP Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-8">
        <div className="max-w-md w-full">
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 lg:mb-4">OTP Verification</h2>
            <p className="text-gray-600 mb-1 lg:mb-2 text-sm lg:text-base">enter the number that was send to</p>
            <p className="text-gray-900 font-medium text-sm lg:text-base">oloriebiridwan@gmail.com</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 lg:space-y-8">
            {/* OTP Input Fields */}
            <div className="flex justify-center space-x-2 lg:space-x-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 lg:w-16 lg:h-16 text-center text-xl lg:text-2xl font-bold bg-gray-200 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-200"
                  required
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 lg:py-4 rounded-lg font-medium text-base lg:text-lg hover:bg-gray-800 transition duration-200"
            >
              Continue
            </button>

            <p className="text-center text-gray-600 text-sm lg:text-base">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/signup')}
                className="text-black font-medium hover:underline"
              >
                Sign Up
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;