import React from 'react';
import './css/about.css';  // Custom CSS file for styling the About page
import Header from './Header';  // Your custom header component
import Footer from './Footer';  // Your custom footer component

const AboutPage = () => {
  return (
    <>
      <Header />

      <div className="about-page-container">
        <div className="about-header">
          <h1>Welcome to AZ Shopping</h1>
          <p>Your one-stop shop for all your fashion needs!</p>
        </div>

        <div className="about-content">
          <section className="about-section">
            <h2>Our Story</h2>
            <p>
              AZ Shopping started with a simple mission: to offer affordable and fashionable clothing
              for everyone. Whether you're looking for casual wear, office attire, or something for
              a special occasion, we've got you covered.
            </p>
            <p>
              We carefully select the latest trends and timeless styles to ensure that you can find
              exactly what you're looking for, no matter your personal style.
            </p>
          </section>

          <section className="about-section">
            <h2>Our Values</h2>
            <ul>
              <li><strong>Customer Satisfaction</strong>: We prioritize your happiness, offering a seamless shopping experience.</li>
              <li><strong>Quality</strong>: We ensure that every product we offer is of the highest quality, ensuring longevity and comfort.</li>
              <li><strong>Sustainability</strong>: We're committed to sustainable practices and reducing our environmental impact.</li>
              <li><strong>Variety</strong>: From daily wear to special occasions, our selection is as diverse as you are.</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Why Choose Us?</h2>
            <p>
              At AZ Shopping, we believe in providing not just the best products, but also an amazing
              shopping experience. Our online platform is designed for ease of use, and we offer fast
              and reliable shipping, as well as a hassle-free return policy.
            </p>
            <p>
              Our customer support team is always available to assist you, and we make sure that
              every order is fulfilled with care and attention to detail.
            </p>
          </section>

          <section className="about-section">
            <h2>Contact Us</h2>
            <p>If you have any questions or need assistance, feel free to reach out to our customer support team:</p>
            <ul>
              <li>Email: support@azshopping.com</li>
              <li>Phone: +1 800 123 4567</li>
              <li>Address: 123 Fashion St, Cityville, AZ, 12345</li>
            </ul>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
