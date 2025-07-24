import React from 'react';
import UserCard from './components/usercard';
import './css/App.css';

const users = [
  {
    name: 'Devadharshini',
    email: 'deva1209@gmail.com',
    profilePic: 'https://api.dicebear.com/7.x/bottts/svg?seed=robotkid',
  },
  {
    name: 'Ravi',
    email: 'ravi@example.com',
    profilePic: 'https://i.pravatar.cc/150?img=33',
  },
  {
    name: 'nandy',
    email: 'nandy@example.com',
    profilePic: 'https://i.pravatar.cc/150?img=5',
  },
];

const App = () => {
  return (
    <div className="app-container multiple">
      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          email={user.email}
          profilePic={user.profilePic}
        />
      ))}
    </div>
  );
};

export default App;

