/*import Welcome from './components/welcome';
import './css/App.css'; // Optional: if you're using global styles

const App = () => {
  return (
    <div>
      <Welcome />
    </div>
  );
};

export default App;*/


/*import React from 'react';
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

export default App;*/

/*import React from 'react';
import ContactForm from './components/contact';
import './css/App.css';

const App = () => {
  return (
    <div className="app-container">
      <ContactForm />
    </div>
  );
};

export default App;*/

/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from './pages/about';
import './css/Layout.css';

const App = () => {
  return (
    <Router>
      <div className="layout">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;*/


import React from 'react';
import Counter from './components/Counter'; 

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '50px' }}>Welcome to the Counter App</h1>
      <Counter />
    </div>
  );
}

export default App;


