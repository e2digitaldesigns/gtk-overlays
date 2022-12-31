import React from "react";
import moment from "moment";

interface IntTimeItem {
  hour: number;
  zone: string;
}
const GTK_TimeItem: React.FC<IntTimeItem> = ({ hour, zone }) => {
  const [time, setTime] = React.useState("0:00");

  React.useEffect(() => {
    setInterval(() => {
      const theTime = moment().subtract(hour, "hours").format("h:mm A");
      setTime(theTime);
    }, 28000);
  }, []);

  return (
    <div>
      {time} {zone}
    </div>
  );
};

export default GTK_TimeItem;
