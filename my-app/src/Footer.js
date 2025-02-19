import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Footer Left */}
        <div className="footer-left">
          <h3>ShopEasy</h3>
          <p>Discover the latest trends and products in fashion, fresh produce, and accessories, all in one place.</p>
        </div>

        {/* Footer Center */}
        <div className="footer-center">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/myorder">My Orders</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Footer Right */}
        <div className="footer-right">
          <h4>Connect With Us</h4>
          <div className="social-media-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ShopEasy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
