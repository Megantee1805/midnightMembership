import React from 'react';
import './Homepage.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="Homepage">
      <header className="Homepage-header">
        <h1>Welcome to Midnight Membership</h1>
        <p>Get exclusive access to our premium content</p>
        <Link to="/signup">Sign up now</Link>
      </header>
      <main className="Homepage-main">
        <h2>What is Midnight Membership?</h2>
        <p>
          Midnight Membership is a premium membership site that provides
          exclusive access to our curated collection of content, including
          articles, videos, and podcasts.
        </p>
        <h2>Why Join?</h2>
        <ul>
          <li>Get access to premium content</li>
          <li>Stay up-to-date with the latest trends and news</li>
          <li>Connect with like-minded individuals in our community</li>
        </ul>
      </main>
      <footer className="Homepage-footer">
        <p>&copy; 2023 Midnight Membership</p>
      </footer>
    </div>
  );
};

export default Homepage;
