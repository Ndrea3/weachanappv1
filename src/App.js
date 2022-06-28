
import './App.css';
import background from ".src/images/coffee-and-donuts-pop-color-background.png";


function WebApp() {
  return (
    <div className="Webpage" style={{ backgroundImage: `url(${background})` }}>
      <h1 className="Header">
      The Weather Be Like...
        <span role="img" aria-label="Thinking Face">🤔</span>
        </h1>
    </div>
  );
}
 
