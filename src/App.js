import logo from "./logo.svg";
import "./App.css";
import Seat from "./Ticket/Seat";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(https://wallpapercave.com/wp/EcNfOSK.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        color: "white",
        filter: "grayscale(0.2)",
        fontSize: "20px",
      }}
      className="App"
    >
      <Seat />
    </div>
  );
}

export default App;
