
import './App.css';
import background from "./src/images/coffee-and-donuts-pop-color-background.png";
class App extends Component {
  render() {
    const myStyle = {
      backgroundImage: `url(${background})`,
      height: "100vh",
      marginTop: "-70px",
      fontSize: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };
  }
}

function WebApp() {
  return (
    <div className="Webpage">
      <h1 className="Header">
      The Weather Be Like...
        <span role="img" aria-label="Thinking Face">🤔</span>
        </h1>
    </div>
  );
}
 
