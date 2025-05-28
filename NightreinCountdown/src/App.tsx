import "./App.css";
import Countdown from "./components/countdown";

function App() {
  return (
    <Countdown
      timerName="sjors zijn nightrein timer"
      target="2025-05-30T24:00"
    ></Countdown>
  );
}

export default App;
