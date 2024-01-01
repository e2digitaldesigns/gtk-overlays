import React from "react";
import { Scroller, TimeItem, TimerItem } from "../../globalComponents";

import { useSimpleTopic } from "../../hooks";

interface TimerOrTimeProps {
  scrollerTimer?: number;
  fontSize?: string;
}

const GTK_TimerOrTime: React.FC<TimerOrTimeProps> = ({
  scrollerTimer = 35,
  fontSize = "1rem"
}) => {
  const { topic } = useSimpleTopic();
  return (
    <>
      {topic?.timer ? (
        <TimerItem fontSize={fontSize} />
      ) : (
        <Scroller timer={scrollerTimer}>
          <TimeItem fontSize={fontSize} hour={0} zone="est" />
          <TimeItem fontSize={fontSize} hour={1} zone="ct" />
          <TimeItem fontSize={fontSize} hour={2} zone="mt" />
          <TimeItem fontSize={fontSize} hour={3} zone="pt" />
        </Scroller>
      )}
    </>
  );
};

export default GTK_TimerOrTime;
