import React, { useEffect, useState } from "react";
import moment from "moment";

interface TimeClockProps {
  format?: string;
  timeZone?: string;
}
const TimeClock: React.FC<TimeClockProps> = ({ format, timeZone }) => {
  const timeFormat = format ? format : "h:mm a";
  const [time, setTime] = useState<string>(moment().format(timeFormat));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(moment().format(timeFormat));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeFormat]);

  return <>{time}</>;
};

export default TimeClock;
