
import '../css/Welcome.css';

const Welcome = () => {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div className="welcome-wrapper">
      <div className="welcome-box">
        <h1>Hello, I am Deva</h1>
        <p>Current time: {currentTime}</p>
      </div>
    </div>
  );
};

export default Welcome;
