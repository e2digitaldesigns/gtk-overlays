import React from "react";
import * as Styled from "./Host.style";
import { useDataContext } from "../../../../../context";
import { useParams } from "../../../../../hooks";
import { SectionsCNN } from "../../../../../types";

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
          <Styled.HostBox21 />
          <Styled.TabHostName21>{hosts?.[0].name || ""}</Styled.TabHostName21>
        </>
      )}

      {showHost_2_2 && (
        <>
          <Styled.HostBox22 />
          <Styled.TabHostName22>{hosts?.[1].name || ""}</Styled.TabHostName22>
        </>
      )}

      {showHost_3_1 && (
        <>
          <Styled.HostBox31 />
          <Styled.TabHostName31>{hosts?.[0]?.name || ""}</Styled.TabHostName31>
        </>
      )}

      {showHost_3_2 && (
        <>
          <Styled.HostBox32 />
          <Styled.TabHostName32>{hosts?.[1]?.name || ""}</Styled.TabHostName32>
        </>
      )}

      {showHost_3_3 && (
        <>
          <Styled.HostBox33 />
          <Styled.TabHostName33>{hosts?.[2]?.name || ""}</Styled.TabHostName33>
        </>
      )}
    </>
  );
};

export default CamHolders;
