import React from 'react';
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Developed by Shyaka Chaste 😊 |{' '}
        <a
          href="https://github.com/shyakachaste"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          shyakachaste
        </a>
      </p>
    </footer>
  );
};

export default Footer;
