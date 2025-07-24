import React from 'react';
import '../css/usercard.css'; // Importing the CSS file from the css folder

const UserCard = ({ name, email, profilePic }) => {
  return (
    <div className="user-card">
      <img src={profilePic} alt="Profile" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default UserCard;
