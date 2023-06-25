import * as React from "react";
import * as Styled from "./Host.style";
import { useParams } from "../../../../../hooks";

import { useDataContext } from "./../../../../../context";
import { SectionsBNN } from "../../../../../types";
import TheHost from "./TheHost";

const Host: React.FC = () => {
  const { showSection } = useParams();
  const { hosts } = useDataContext();

  const showHost2Up = showSection(SectionsBNN.Hosts_2_up);
  const showHost_1_video_1 = showSection(SectionsBNN.Host_1_video_1);
  const showHost_2_video_1 = showSection(SectionsBNN.Host_2_video_1);

  return (
    <>
      {showHost2Up && (
        <Styled.HostBoxWrapperPlater seats={hosts.length}>
          {hosts.map((host: any) => (
            <TheHost key={host.seatNum} seatNumber={host.seatNum} />
          ))}
        </Styled.HostBoxWrapperPlater>
      )}

      {showHost_1_video_1 && (
        <Styled.HostBoxWrapper1HostAndVideo>
          <TheHost seatNumber={1} votePosition="tl" />
          <TheHost type="video" />
        </Styled.HostBoxWrapper1HostAndVideo>
      )}

      {showHost_2_video_1 && (
        <Styled.HostBoxWrapper2HostAndVideo>
          <TheHost seatNumber={1} votePosition="tl" />
          <TheHost type="video" />
          <TheHost seatNumber={2} votePosition="tr" />
        </Styled.HostBoxWrapper2HostAndVideo>
      )}
    </>
  );
};

export default Host;
