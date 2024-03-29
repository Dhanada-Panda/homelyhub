import React from 'react';
import "./thankyou.css";
function ThankYouPage() {
  const handleGoHome = () => {
    window.location.href='/'; // 
  };
  return (
    <div className="content">
      <div className="wrapper-1">
        <div className="wrapper-2">
          <h1>Thank you !</h1>
          <p>Thanks for Joining Us</p>
          <p>You should receive a confirmation email soon.</p>
          <button className="go-home" onClick={handleGoHome}>
            go home
          </button>
        </div>
        <div className="footer-like">
          <p>Email not received? <a href="#">Click here to send again</a></p>
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;
