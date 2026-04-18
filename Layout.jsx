import React from "react";

export default function Layout({ children, currentPageName }) {
  return (
    <>
      <style>{`
        /* Adwhitelist Brand Styling for Auth Pages */
        
        /* Auth page container */
        [data-auth-page] {
          background: linear-gradient(to bottom right, #faf5ff, #ffffff, #fdf2f8) !important;
          min-height: 100vh;
        }
        
        /* Auth form cards */
        [data-auth-card] {
          background: white !important;
          border-radius: 24px !important;
          border: 1px solid #e5e7eb !important;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15) !important;
          padding: 2rem !important;
        }
        
        /* Primary buttons */
        [data-auth-page] button[type="submit"],
        [data-auth-page] .primary-button {
          background: linear-gradient(to right, #9333ea, #db2777) !important;
          color: white !important;
          border-radius: 9999px !important;
          padding: 0.75rem 2rem !important;
          font-weight: 500 !important;
          box-shadow: 0 10px 15px -3px rgba(147, 51, 234, 0.3) !important;
          transition: all 0.2s !important;
          border: none !important;
        }
        
        [data-auth-page] button[type="submit"]:hover,
        [data-auth-page] .primary-button:hover {
          background: linear-gradient(to right, #7e22ce, #be185d) !important;
          transform: scale(1.02) !important;
          box-shadow: 0 20px 25px -5px rgba(147, 51, 234, 0.4) !important;
        }
        
        /* Input fields */
        [data-auth-page] input[type="email"],
        [data-auth-page] input[type="password"],
        [data-auth-page] input[type="text"] {
          border-radius: 12px !important;
          border: 1px solid #e5e7eb !important;
          padding: 0.75rem 1rem !important;
          transition: all 0.2s !important;
        }
        
        [data-auth-page] input:focus {
          outline: none !important;
          border-color: #9333ea !important;
          box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.1) !important;
        }
        
        /* Links */
        [data-auth-page] a {
          color: #9333ea !important;
          text-decoration: none !important;
          font-weight: 500 !important;
          transition: color 0.2s !important;
        }
        
        [data-auth-page] a:hover {
          color: #7e22ce !important;
        }
        
        /* Logo/Brand area */
        [data-auth-logo] {
          background: linear-gradient(to bottom right, #9333ea, #db2777) !important;
          border-radius: 16px !important;
          padding: 1rem !important;
          box-shadow: 0 10px 15px -3px rgba(147, 51, 234, 0.3) !important;
        }
        
        /* Secondary buttons */
        [data-auth-page] button:not([type="submit"]) {
          border-radius: 9999px !important;
          transition: all 0.2s !important;
        }
        
        /* Headings */
        [data-auth-page] h1,
        [data-auth-page] h2 {
          color: #111827 !important;
          font-weight: 700 !important;
        }
        
        /* Error messages */
        [data-auth-page] [role="alert"],
        [data-auth-page] .error-message {
          background: #fef2f2 !important;
          border: 1px solid #fecaca !important;
          border-radius: 12px !important;
          color: #b91c1c !important;
          padding: 0.75rem 1rem !important;
        }
        
        /* Success messages */
        [data-auth-page] .success-message {
          background: #f0fdf4 !important;
          border: 1px solid #bbf7d0 !important;
          border-radius: 12px !important;
          color: #15803d !important;
          padding: 0.75rem 1rem !important;
        }
        
        /* Divider text */
        [data-auth-page] .divider-text {
          color: #6b7280 !important;
        }
        
        /* Social login buttons */
        [data-auth-page] .social-button {
          border-radius: 12px !important;
          border: 1px solid #e5e7eb !important;
          transition: all 0.2s !important;
        }
        
        [data-auth-page] .social-button:hover {
          background: #f9fafb !important;
          border-color: #9333ea !important;
        }
      `}</style>
      {children}
    </>
  );
}