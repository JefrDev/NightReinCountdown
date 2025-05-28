import { useState, useEffect } from "react";
import "./countdown.css";
import { DateTime } from "luxon";

interface Props {
  target: string;
  timerName: string;
}

function Countdown({ target, timerName }: Props) {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const updateCountdown = () => {
      const targetDate = DateTime.fromISO(target, {
        zone: "Europe/Amsterdam",
      });
      const now = DateTime.now();
      setCountdown(
        targetDate
          .diff(now, ["days", "hours", "minutes", "seconds"])
          .toFormat("dd:hh:mm:ss")
      );
    };
    updateCountdown(); // Set initially
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <>
      <div className="main">
        <h1 className="countdownTimer">{countdown}</h1>
        <h1 className="countdownText">{timerName}</h1>
      </div>
    </>
  );
}

export default Countdown;
