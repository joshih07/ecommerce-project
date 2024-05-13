import React from 'react';

const Contact = () => {
  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1>Contact Us</h1>
        <div style={contactInfoStyle}>
          <p>Email: <a href="mailto:contact@yourfastcart.com">contact@fooddeliveryapp.com</a></p>
          <p>Phone: +1 (555) 123-4567</p>
        </div>
        <div style={socialLinksStyle}>
          <p>Follow us on: 
            <a href="https://www.facebook.com/YOURFASTCART"> Facebook </a>, 
            <a href="https://twitter.com/FoodDeliveryApp"> Twitter</a> , and  
            <a href="https://www.instagram.com/YOURFASTCART"> Instagram</a>
          </p>
        </div>
      </header>
      <footer style={footerStyle}>
        <p>&copy; 2024 Food Delivery App. All rights reserved.</p>
      </footer>
    </div>
  );
};

const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto', 
  padding: '20px',
};

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '20px',
};

const contactInfoStyle = {
  marginBottom: '20px',
};

const socialLinksStyle = {
  marginTop: '20px',
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '20px',
};

export default Contact;
