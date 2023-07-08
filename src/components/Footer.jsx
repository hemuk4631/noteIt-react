import React from "react";

function Footer() {
  
  return (
    <div className="footer-wrapper">
    <footer>
      <p>Copyright ⓒ hemuk4631@gmail.com
      <br></br>
      {new Date().getFullYear()}
      </p>
    </footer>
    </div>
  );
}

export default Footer;
