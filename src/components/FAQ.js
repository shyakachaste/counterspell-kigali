import React from 'react';
import '../styles/FAQ.css';

const FAQ = () => {
  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <p className="faq-subtitle">Got questions? Look here first! If you need more help, feel free to <a href="mailto:shyakachaste1@gmail.com" target="_blank" rel="noopener noreferrer">reach out via email</a>!</p>

      
      <div className="faq-cards">
        <div className="faq-card">
          <h2 className="faq-card-title">What is Counterspell</h2>
          <p className="faq-card-content">
          Counterspell is a beginner friendly game jam for high schoolers happening in 200+ cities simultaneously where artists, musicians, and coders get together to build apps and games.
          </p>
        </div>
        
        <div className="faq-card">
          <h2 className="faq-card-title">How much does it cost?</h2>
          <p className="faq-card-content">
          It's free to join Counterspell Kigali! We’ll provide meals, snacks, drinks, swag, and prizes for everyone. Everyone is welcome to have fun and create!
          </p>
        </div>
        
        <div className="faq-card">
          <h2 className="faq-card-title">Who can join?</h2>
          <p className="faq-card-content">
          Counterspell Kigali is for all high school students! Whether you’re a beginner or an expert, if you love coding games and want to learn, we’d be happy to have you join us!
          </p>
        </div>

        <div className="faq-card">
          <h2 className="faq-card-title">What if my parents are worried?</h2>
          <p className="faq-card-content">
          We understand that parents may have concerns. That’s why we will provide a parent guide to all participants before the event starts. 
          </p>
        </div>

        <div className="faq-card">
          <h2 className="faq-card-title">What should I bring?</h2>
          <p className="faq-card-content">
          Please bring your laptop, charger, and any other tools you think you'll need. If you have a favorite snack or drink, feel free to bring that too!
          </p>
        </div>

        <div className="faq-card">
          <h2 className="faq-card-title">What will we do at Counterspell?</h2>
          <p className="faq-card-content">
          At Counterspell, we’ll code video games and learn new skills together! You'll have the chance to work on exciting projects, collaborate with others, and share your ideas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
