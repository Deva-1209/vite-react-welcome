
function Welcome() {
  const currentTime = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>Hello, I am Devadharshini</h1>
      <p>The current time is: {currentTime}</p>
    </div>
  );
}

export default Welcome;
