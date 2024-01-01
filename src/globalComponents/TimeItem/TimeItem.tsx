import React from "react";
import moment from "moment";

interface IntTimeItem {
  hour: number;
  zone: string;
  fontSize?: string;
}
const GTK_TimeItem: React.FC<IntTimeItem> = ({
  fontSize = "inherit",
  hour,
  zone
}) => {
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
    <div style={{ width: "100%", fontSize: fontSize }}>
      {time} {zone}
    </div>
  );
};

export default GTK_TimeItem;
