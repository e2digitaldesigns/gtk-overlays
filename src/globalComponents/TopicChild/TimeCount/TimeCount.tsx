import React, { useEffect, useState } from "react";

interface TopicTimerProps {
  activeTopicIndex: number;
  paused: boolean;
  timer: number;
}

const TimerCount: React.FC<TopicTimerProps> = ({
  activeTopicIndex,
  paused,
  timer
}) => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    setCounter(timer);
  }, [activeTopicIndex, timer]);

  useEffect(() => {
    let pausedAmount: number = paused === true ? 0 : 1;
    let theTimer: number;

    if (counter > 0) {
      theTimer = window.setInterval(
        () => setCounter(counter - pausedAmount),
        1000
      );
    }

    return () => {
      if (theTimer && typeof theTimer === "number") {
        clearInterval(theTimer);
      }
    };
  }, [counter, paused]);

  return <span>{timeConvert(counter)}</span>;
};

function timeConvert(seconds: number) {
  var h = Math.floor(seconds / 3600); //Get whole hours
  seconds -= h * 3600;
  var m = Math.floor(seconds / 60); //Get remaining minutes
  seconds -= m * 60;
  return (
    (m < 10 ? "0" + m : m) + ":" + (seconds < 10 ? "0" + seconds : seconds)
  );
}

export default TimerCount;
