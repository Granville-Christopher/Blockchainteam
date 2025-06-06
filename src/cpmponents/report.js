// IssueReportingPage Component - NEW PAGE
import React, { useState } from "react";
import emailjs from "emailjs-com";

const IssueReportingPage = ({ onBack }) => {
  const [selectedIssue, setSelectedIssue] = useState("");
  const [issueDescription, setIssueDescription] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  const issueOptions = [
    "Account verification",
    "Login issue",
    "Pending transaction",
    "Purchasing issue",
    "Swap/exchange issue",
    "Withdrawal issue",
    "Other",
  ];

  const handleSubmit = () => {
    emailjs
    .send(
      "service_n8rslz8",
      "template_if6snru",
      {
        selectedIssue: selectedIssue,
        issueDescription: issueDescription,
      },
      "AQ3rmqLrAxGjWGBuI"
    )
    .then(() => {
      console.log("selectedIssue sent!");
      setShowModal(true);
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
      {showModal && (
        <div className="fixed px-5  inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white text-gray-800 rounded-xl shadow-lg max-w-md w-full p-6 text-center space-y-4">
            <h2 className="text-xl font-semibold">Complaint Received</h2>
            <p>
              Your complaint is under review. We'll get back to you shortly.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md"
            >
              Okay
            </button>
          </div>
        </div>
      )}
      <div className="w-full max-w-md mt-12 p-4">
        <h1 className="text-lg md:text-3xl font-bold text-white mb-4">
          Which of the following relates to your issue?
        </h1>

        <div className="space-y-4 p-2 rounded mb-4">
          {issueOptions.map((option) => (
            <div key={option} className="flex items-center text-2xl">
              <input
                type="radio"
                id={option.replace(/\s/g, "-").toLowerCase()}
                name="issueType"
                value={option}
                checked={selectedIssue === option}
                onChange={(e) => setSelectedIssue(e.target.value)}
                className="form-radio h-5 w-5 text-blue-600 bg-gray-700 border-gray-500 focus:ring-blue-500"
              />
              <label
                htmlFor={option.replace(/\s/g, "-").toLowerCase()}
                className="ml-3 text-sm text-gray-300"
              >
                {option}
              </label>
            </div>
          ))}
          {selectedIssue === "Other" && (
            <input
              type="text"
              placeholder="Please specify"
              className="w-full p-3 bg-[#2A2A3E] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500"
            />
          )}
          {/* "This is a required question" message - shown if no option is selected on submit attempt */}
          {/* For now, it's just a static text as per image, but could be dynamic */}
          <p className="text-red-500 mb-2 text-xs flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-alert-circle mr-1"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="12" />
              <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
            This is a required question
          </p>
        </div>
        {/* Error Message */}
        {error && (
          <div className="text-red-400 font-medium text-sm -mt-4 mb-2">
            {error}
          </div>
        )}
        <h2 className="text-sm mb-2 font-semibold text-gray-300 ">
          Describe your issue(optional)
        </h2>
        <textarea
          rows="5"
          placeholder="Please provide details about your issue."
          className="w-full p-4 bg-[#2A2A3E] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-500 resize-none"
          value={issueDescription}
          onChange={(e) => setIssueDescription(e.target.value)} required
        ></textarea>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 mt-2 hover:bg-blue-700 text-white text-xl font-semibold py-4 rounded-lg shadow-lg transition-colors duration-300 "
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default IssueReportingPage;
