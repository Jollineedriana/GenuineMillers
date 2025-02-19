import React from 'react';
import './Home.css';
import Footer from './Footer.js';

function Home() {
  return (
    <div className="home">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Genuine Millers</h1>
          <p>Providing high-grade maize flour and cornmeal for your business and home needs.</p>
          <a href="#services" className="cta-button">Explore Our Services</a>
        </div>
      </header>

      <section id="services" className="services-section">
        <h2>Our Services</h2>
        <div className="services-container">
          <div className="service-card">
            <img src="/images/milling.jpg" alt="Milling" />
            <h3>Maize Milling</h3>
            <p>We offer premium maize milling services using advanced technology to guarantee quality.</p>
          </div>
          <div className="service-card">
            <img src="/images/flour-packaging.jpg" alt="Packaging" />
            <h3>Flour Packaging</h3>
            <p>Our flour is well-packaged in various sizes to meet both commercial and personal needs.</p>
          </div>
          <div className="service-card">
            <img src="/images/delivery.jpg" alt="Delivery" />
            <h3>Product Delivery</h3>
            <p>We offer reliable delivery services to ensure timely distribution to all our customers.</p>
          </div>
        </div>
      </section>

      <section className="about-us-section">
        <h2>About Us</h2>
        <p>We are a leading maize milling company committed to producing high-quality maize flour. With state-of-the-art technology and a dedicated team, we ensure our products meet international standards.</p>
        <a href="/aboutus" className="learn-more-button">Learn More About Us</a>
      </section>
      <Footer />
      
    </div>
  );
}

export default Home;
