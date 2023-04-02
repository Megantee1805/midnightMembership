import React from 'react';

const MembershipTiers = () => {
  return (
    <div>
      <h1>Choose your membership plan</h1>
      <div>
        <h2>Tier 1</h2>
        <p>$10 per month</p>
        <ul>
          <li>Access to exclusive content</li>
          <li>Monthly newsletter</li>
        </ul>
        <button>Subscribe</button>
      </div>
      <div>
        <h2>Tier 2</h2>
        <p>$25 per month</p>
        <ul>
          <li>All Tier 1 benefits</li>
          <li>Early access to new content</li>
          <li>Discounts on merchandise</li>
        </ul>
        <button>Subscribe</button>
      </div>
      <div>
        <h2>Tier 3</h2>
        <p>$50 per month</p>
        <ul>
          <li>All Tier 2 benefits</li>
          <li>Personalized coaching sessions</li>
          <li>Special event invitations</li>
        </ul>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MembershipTiers;