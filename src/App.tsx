import "./App.css";
import Countdown from "./components/Countdown";

function App() {
  return (
    <Countdown
      timerName="sjors zijn nightrein timer"
      target="2025-05-29T24:00"
    ></Countdown>
  );
}

export default App;
