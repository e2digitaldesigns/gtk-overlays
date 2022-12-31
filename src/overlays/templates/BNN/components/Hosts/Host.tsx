import * as React from "react";
import * as Styled from "./Host.style";
import { useParams } from "../../../../../hooks";
import { Sections } from "../../../../../hooks/useParamsHook/types";

import { useDataContext } from "./../../../../../context";

const Host: React.FC = () => {
  const { showSection } = useParams();
  const { hosts: data } = useDataContext();

  const showHost_2_1 = showSection(Sections.BnnHost_2_1);
  const showHost_2_2 = showSection(Sections.BnnHost_2_2);

  const showVideo_2_host = showSection(Sections.BnnVideo_2_host);
  const showVideo_2_video = showSection(Sections.BnnVideo_2_video);

  const showVideo_3_host_1 = showSection(Sections.BnnVideo_3_host_1);
  const showVideo_3_host_2 = showSection(Sections.BnnVideo_3_host_2);
  const showVideo_3_video = showSection(Sections.BnnVideo_3_video);

  return (
    <>
      {showHost_2_1 && (
        <>
          <Styled.HostBoxStroke1 />
          <Styled.HostBox position={1}>
            <Styled.HostBoxInner>
              {data?.[0]?.name && (
                <Styled.NameTag1>{data[0].name}</Styled.NameTag1>
              )}
            </Styled.HostBoxInner>
          </Styled.HostBox>
        </>
      )}

      {showHost_2_2 && (
        <>
          <Styled.HostBoxStroke2 />
          <Styled.HostBox position={2}>
            <Styled.HostBoxInner>
              {data?.[1]?.name && (
                <Styled.NameTag2>{data[1].name}</Styled.NameTag2>
              )}
            </Styled.HostBoxInner>
          </Styled.HostBox>
        </>
      )}

      {showVideo_2_host && (
        <>
          <Styled.HostBoxThinStroke />
          <Styled.HostBoxThin>
            {data?.[0]?.name && (
              <Styled.NameTagThin>{data[0].name}</Styled.NameTagThin>
            )}
            <Styled.HostBoxInner />
          </Styled.HostBoxThin>
        </>
      )}

      {showVideo_2_video && (
        <>
          <Styled.VideoBoxStroke />
          <Styled.VideoBox>
            {/* <Styled.NameTagVideo>Host Name Video 2</Styled.NameTagVideo> */}
            <Styled.VideoBoxInner />
          </Styled.VideoBox>
        </>
      )}

      {showVideo_3_host_1 && (
        <>
          <Styled.HostVideoBoxThinLeftStroke />
          <Styled.HostVideoBoxThinLeft>
            {data?.[0]?.name && (
              <Styled.NameTagThin>{data[0].name}</Styled.NameTagThin>
            )}
            <Styled.HostBoxInner />
          </Styled.HostVideoBoxThinLeft>
        </>
      )}

      {showVideo_3_video && (
        <>
          <Styled.VideoBoxSmallerStroke />
          <Styled.VideoBoxSmaller>
            {/* <Styled.NameTagVideo>Host Name Video 3</Styled.NameTagVideo> */}
            <Styled.VideoBoxInner />
          </Styled.VideoBoxSmaller>
        </>
      )}

      {showVideo_3_host_2 && (
        <>
          <Styled.HostVideoBoxThinRightStroke />
          <Styled.HostVideoBoxThinRight>
            {data?.[1]?.name && (
              <Styled.NameTagThin>{data[1].name}</Styled.NameTagThin>
            )}
            <Styled.HostBoxInner />
          </Styled.HostVideoBoxThinRight>
        </>
      )}
    </>
  );
};

export default Host;
