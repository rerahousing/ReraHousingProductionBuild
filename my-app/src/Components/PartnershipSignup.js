import React from "react";

function PartnershipSignup() {
  return (
    <div className="container">
      <h1 className="text-center">Partnership Sign Up</h1>
      <div
        className="google-form"
        style={{ margin: "auto", width: "50%", padding: "10px" }}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfz9nEm1UEzOMcZTWvgNgDAxqxkN8XjIt1q6bhup6G8-A63uQ/viewform?embedded=true"
          width="640"
          height="1541"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}

export default PartnershipSignup;
