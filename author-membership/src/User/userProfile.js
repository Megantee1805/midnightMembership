import React, { useState } from "react";

const UserProfile = () => {
  const [userData, setUserData] = useState({
    username: "JohnDoe",
    email: "johndoe@example.com",
    subscription: "Premium",
  });

  const { username, email, subscription } = userData;

  const [editProfile, setEditProfile] = useState(false);

  const handleEditProfile = () => {
    setEditProfile(!editProfile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add profile update logic here
  };

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label><br />
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleInputChange}
          disabled={!editProfile}
        /><br />

        <label htmlFor="email">Email:</label><br />
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          disabled={!editProfile}
        /><br />

        <label htmlFor="subscription">Subscription:</label><br />
        <select
          id="subscription"
          name="subscription"
          value={subscription}
          onChange={handleInputChange}
          disabled={!editProfile}
        >
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
          <option value="Enterprise">Enterprise</option>
        </select><br />

        {editProfile ? (
          <input type="submit" value="Save" />
        ) : (
          <button onClick={handleEditProfile}>Edit Profile</button>
        )}
      </form>

      {editProfile && (
        <button onClick={handleEditProfile}>Cancel</button>
      )}

      <hr />

      <h3>Subscription Details</h3>
      <p>Status: Active</p>
      <p>Subscription Type: {subscription}</p>
      <p>Renewal Date: April 1, 2024</p>
      <button>Manage Subscription</button>
    </div>
  );
};

export default UserProfile;