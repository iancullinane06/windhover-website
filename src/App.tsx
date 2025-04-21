import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to GreenLens Software</h1>
        <p>Innovative solutions for your business needs</p>
        <a className="App-link" href="#services">
          Explore Our Services
        </a>
      </header>

      <section id="services" className="App-section">
        <h2>Our Services</h2>
        <ul>
          <li>Custom Software Development</li>
          <li>Web and Mobile App Development</li>
          <li>Cloud Solutions</li>
          <li>UI/UX Design</li>
        </ul>
      </section>

      <section id="about" className="App-section">
        <h2>About Us</h2>
        <p>
          At GreenLens Software, we specialize in delivering cutting-edge
          software solutions tailored to your business needs. Our team of
          experts is dedicated to helping you achieve your goals through
          technology.
        </p>
      </section>

      <section id="contact" className="App-section">
        <h2>Contact Us</h2>
        <p>Email: contact@greenlens.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </section>

      <footer className="App-footer">
        <p>&copy; 2023 GreenLens Software. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;