import React from "react";
import { Scroller, TimeItem, TimerItem } from "../../globalComponents";

import { useSimpleTopic } from "../../hooks";

interface TimerOrTimeProps {
  scrollerTimer?: number;
}

const GTK_TimerOrTime: React.FC<TimerOrTimeProps> = ({
  scrollerTimer = 35
}) => {
  const { topic } = useSimpleTopic();
  return (
    <>
      {topic?.timer ? (
        <TimerItem />
      ) : (
        <Scroller timer={scrollerTimer}>
          <TimeItem hour={0} zone="est" />
          <TimeItem hour={1} zone="ct" />
          <TimeItem hour={2} zone="mt" />
          <TimeItem hour={3} zone="pt" />
        </Scroller>
      )}
    </>
  );
};

export default GTK_TimerOrTime;
