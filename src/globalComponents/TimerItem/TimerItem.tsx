import React from "react";
import { useSimpleTopic } from "../../hooks";

interface GTKTimerItemProps {
  fontSize: string;
}

const GTKTimerItem: React.FC<GTKTimerItemProps> = ({ fontSize }) => {
  const [counter, setCounter] = React.useState<number>(0);
  const { isTimerPaused, topic } = useSimpleTopic();

  React.useEffect(() => {
    topic?.timer && setCounter(topic.timer);
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

  return topic?.timer ? (
    <span style={{ fontSize: fontSize }}>{timeConvert(counter)}</span>
  ) : null;
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
