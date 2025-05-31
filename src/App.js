import React, { useState } from "react";
import LoginPage from "./cpmponents/login";
import IssueReportingPage from "./cpmponents/report";
// Assuming index.css and App.css contain global styles if any,
// but Tailwind handles most styling.
// import "./index.css";
// import "./App.css";

// WelcomeScreen Component - EXACTLY as provided by the user
const WelcomeScreen = ({ onLoginClick }) => {
  return (
    <div className="relative mmbd min-h-screen flex flex-col items-center justify-between p-4 font-sans overflow-hidden">
      {/* Note: Tailwind CSS CDN and Google Fonts are moved to the parent App component for global loading */}
      {/* Note: Custom styles are also moved to the parent App component for global loading */}

      {/* Header Section */}
      <div className="text-center mt-6 z-10">
        <h1 className="text-white text-xl md:text-5xl font-extrabold leading-tight">
          Welcome to <span className="text-[#0dcaf0]">Blockchain.com</span>
        </h1>
        <p className="text-gray-200 text-l md:text-xl mt-2 max-w-md mx-auto">
          The only crypto app you'll ever need
        </p>
      </div>

      {/* Hero Section: Phone Mockups and Crypto Icons */}
      <div className="relative w-full max-w-lg mb-12 flex items-center justify-center min-h-[500px] md:min-h-[500px]">
        <div>
          {/* Note: These image paths like /reac.png assume the files exist in your project's public folder. */}
          <img src="/reac.png" alt="Phone Mockup" />
        </div>

        {/* Layered Crypto Icons Cluster */}
        <div className="absolute top-[65%] md:top-[70%] w-64 h-64 md:w-80 md:h-80 flex items-center justify-center -translate-y-1/2 z-20 ">
          {/* Large central Bitcoin icon */}

          <div
            className="absolute font-bold text-white shadow-2xl  z-20"
            style={{ top: "50%", left: "28%" }}
          >
            <img src="/icons/bitcoin.svg" className="w-20 h-20" alt="" />
          </div>

          {/* Surrounding smaller icons */}
          <div
            className="absolute w-11 h-11 md:w-20 md:h-20 bg-gray-700 rounded-full flex items-center justify-center text-white text-lg md:text-xl shadow-lg z-40 "
            style={{ top: "60%", left: "15%" }}
          >
            {/* Note: This image path assumes the file exists in your project's public/icons folder. */}
            <img src="/icons/tron.svg" alt="TRON" className="w-9 h-9" />
          </div>
          <div
            className="absolute w-12 h-12 md:w-20 md:h-20 bg-[#627EEA] border rounded-full flex items-center justify-center text-white text-lg md:text-xl shadow-md z-10 "
            style={{ top: "50%", right: "-15%" }}
          >
            <img
              src="https://assets.coingecko.com/coins/images/279/small/ethereum.png"
              alt="ETH"
              className="w-10 h-10"
            />
          </div>
          <div
            className="absolute w-16 h-16 md:w-20 md:h-20 bg-gray-700 litecoin rounded-full flex items-center justify-center text-white text-lg md:text-xl shadow-md z-10 "
            style={{ bottom: "10%", right: "0%" }}
          >
            <img
              src="https://assets.coingecko.com/coins/images/2/small/litecoin.png"
              alt="LTC"
              className="w-10 h-10"
            />
          </div>
          <div
            className="absolute w-11 h-11 md:w-20 md:h-20 bg-gray-700 rounded-full flex items-center justify-center text-white text-lg md:text-xl shadow-md z-10 "
            style={{ bottom: "5%", left: "22%" }}
          >
            {/* Note: This image path assumes the file exists in your project's public/icons folder. */}
            <img src="/icons/ripple.svg" alt="XRP" className="w-9 h-9" />
          </div>
          <div
            className="absolute w-11 h-11 md:w-20 md:h-20 bg-gray-700 rounded-full flex items-center justify-center text-white text-lg md:text-xl shadow-md z-10 "
            style={{ top: "50%", left: "-5%" }}
          >
            {/* Note: This image path assumes the file exists in your project's public/icons folder. */}
            <img src="/icons/binance.svg" alt="BNB" className="w-9 h-9" />
          </div>
          <div
            className="absolute w-12 h-12 md:w-20 md:h-20 bg-gray-700 rounded-full flex items-center justify-center text-white text-lg md:text-xl shadow-md z-10 "
            style={{ top: "70%", right: "25%" }}
          >
            {/* Note: This image path assumes the file exists in your project's public/icons folder. */}
            <img src="/icons/thether.svg" alt="USDT" className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Login Button */}
      <button
        onClick={onLoginClick} // Attach the click handler here
        className="w-full max-w-sm bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold py-4 rounded-full shadow-lg transition-colors duration-300 z-10 mt-[-50px]"
      >
        Login
      </button>
    </div>
  );
};


// Main App component that handles navigation
const App = () => {
  const [currentPage, setCurrentPage] = useState("welcome");

  const goToLoginPage = () => setCurrentPage("login");
  const goToIssueReportingPage = () => setCurrentPage("issueReporting");
  const goToWelcomePage = () => setCurrentPage("welcome");
  const goToLoginPageFromIssueReporting = () => setCurrentPage("login");

  return (
    <>
      {currentPage === "welcome" && (
        <WelcomeScreen onLoginClick={goToLoginPage} />
      )}
      {currentPage === "login" && (
        <LoginPage
          onLoginSuccess={goToIssueReportingPage}
          onBack={goToWelcomePage}
        />
      )}
      {currentPage === "issueReporting" && (
        <IssueReportingPage onBack={goToLoginPageFromIssueReporting} />
      )}
    </>
  );
};


export default App;
