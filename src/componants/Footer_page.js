import React from 'react';
import './Footer.css';
// import { FaFacebookF, FaInstagram, FaTwitter,    FaLinkedinIn } from 'react-icons/fa';


export default function Footer(props) {
  return (
    <footer class="footer">
  <div class="footer-container">
    <div class="footer-section">
      <h2 class="footer-title">Your Site Name</h2>
      <p>&copy; 2025 Your Site Name. All rights reserved.</p>
    </div>
    <div class="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h3>Follow Us</h3>
      <ul class="social-links">
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Twitter</a></li>
      </ul>
    </div>
  </div>
</footer>

  );
};

// export default Footer;
