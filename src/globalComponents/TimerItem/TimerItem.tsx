import React from "react";
import { IntTopic } from "../Topics/types";

interface IntTimerItem {
  isTimerPaused: boolean;
  topic: IntTopic;
}

const GTKTimerItem: React.FC<IntTimerItem> = ({
  topic,
  isTimerPaused = false
}) => {
  const [counter, setCounter] = React.useState<number>(0);

  React.useEffect(() => {
    setCounter(topic.timer);
  }, [topic]);

  React.useEffect(() => {
    let pausedAmount: number = isTimerPaused === true ? 0 : 1;
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
  }, [counter, isTimerPaused]);

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

export default GTKTimerItem;
