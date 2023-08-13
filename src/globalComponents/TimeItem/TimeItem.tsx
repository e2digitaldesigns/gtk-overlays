import React from "react";
import moment from "moment";

interface IntTimeItem {
  hour: number;
  zone: string;
}
const GTK_TimeItem: React.FC<IntTimeItem> = ({ hour, zone }) => {
  const [time, setTime] = React.useState(() =>
    moment().subtract(hour, "hours").format("h:mm A")
  );

  React.useEffect(() => {
    setInterval(() => {
      const theTime = moment().subtract(hour, "hours").format("h:mm A");
      setTime(theTime);
    }, 28000);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span>
      {time} {zone}
    </span>
  );
};

export default GTK_TimeItem;
