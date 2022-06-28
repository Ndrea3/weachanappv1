
import './App.css';
import background from "./images/coffee-and-donuts-pop-color-background.png";


function WebApp() {
  return (
    <div className="Webpage" style={{ backgroundImage: `url(${background})`,
      height: "100vh",
      marginTop: "-70px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"}}>
  
      <h1 className="Header">
      The Weather Be Like...
        <span role="img" aria-label="Thinking Face">🤔</span>
        </h1>
    </div>
  );
}
 
