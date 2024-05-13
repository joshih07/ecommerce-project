import React from 'react';

const About = () => {
  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={{ color: '#da1313' }}>YOUR FAST CART</h1>
        <p style={{ color: '#da1313' }}>Your Ultimate Fastest Food Delivery Solution</p>
      </header>
      <section style={sectionStyle}>
        <h2>About Us</h2>
        <p>Welcome to YOUR FAST CART, your go-to destination for easy, fresh, and fast food delivery...</p>
      </section>
      <div style={featuresContainerStyle}>
        <div style={featureStyle}>
          <h3 style={{ color: '#da1313' }}>Responsive Fullstack Experience: </h3>
          <p>Our app is built using the MERN stack, ensuring a smooth and responsive user experience...</p>
        </div>
        <div style={featureStyle}>
          <h3 style={{ color: '#da1313' }}>Curated Selection: </h3>
          <p>We partner with top restaurants, offering a diverse range of food to satisfy every need...</p>
        </div>
        <div style={featureStyle}>
          <h3 style={{ color: '#da1313' }}>User-Friendly Interface: </h3>
          <p>Our user interface is designed for simplicity and ease of use, making food ordering a breeze...</p>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

const headerStyle = {
  backgroundColor: '#292827',
  padding: '20px',
  textAlign: 'center',
};

const sectionStyle = {
  textAlign: 'center',
  padding: '40px',
  backgroundColor: '#da1313',
  color: '#fff',
};

const featuresContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const featureStyle = {
  flex: '1',
  maxWidth: '300px',
  margin: '20px',
  padding: '20px',
  backgroundColor: '#fff',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

export default About;
