import React from "react";
import * as Styled from "./Host.style";
import { useDataContext } from "../../../../../context";
import { SectionsCNN } from "../../../../../hooks/useParamsHook/types";
import { useParams } from "../../../../../hooks";

const CamHolders: React.FC = () => {
  const { showSection } = useParams();
  const { hosts, name: showName } = useDataContext();

  const Header = showSection(SectionsCNN.Header);

  const showHost_2_1 = showSection(SectionsCNN.Host_2_1);
  const showHost_2_2 = showSection(SectionsCNN.Host_2_2);

  const showHost_3_1 = showSection(SectionsCNN.Host_3_1);
  const showHost_3_2 = showSection(SectionsCNN.Host_3_2);
  const showHost_3_3 = showSection(SectionsCNN.Host_3_3);

  return (
    <>
      {Header && <Styled.TabShowName>{showName}</Styled.TabShowName>}

      <Styled.Guide />
      {showHost_2_1 && (
        <>
          <Styled.HostBox_2_1 />
          <Styled.TabHostName_2_1>
            {hosts?.[0].name || ""}
          </Styled.TabHostName_2_1>
        </>
      )}

      {showHost_2_2 && (
        <>
          <Styled.HostBox_2_2 />
          <Styled.TabHostName_2_2>
            {hosts?.[1].name || ""}
          </Styled.TabHostName_2_2>
        </>
      )}

      {showHost_3_1 && (
        <>
          <Styled.HostBox_3_1 />
          <Styled.TabHostName_3_1>
            {hosts?.[0]?.name || ""}
          </Styled.TabHostName_3_1>
        </>
      )}

      {showHost_3_2 && (
        <>
          <Styled.HostBox_3_2 />
          <Styled.TabHostName_3_2>
            {hosts?.[1]?.name || ""}
          </Styled.TabHostName_3_2>
        </>
      )}

      {showHost_3_3 && (
        <>
          <Styled.HostBox_3_3 />
          <Styled.TabHostName_3_3>
            {hosts?.[2]?.name || ""}
          </Styled.TabHostName_3_3>
        </>
      )}
    </>
  );
};

export default CamHolders;
