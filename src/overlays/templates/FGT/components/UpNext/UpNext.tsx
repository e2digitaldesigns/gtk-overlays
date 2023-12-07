import React from "react";
import styled from "styled-components";
import { UpNext } from "../../../../../globalComponents";
import { IntTopic } from "../../../../../globalComponents/Topics/types";
import { SectionsFGT } from "../../../../../types";
import { useParams } from "../../../../../hooks";

const UpNextWrapper = styled.div`
  position: absolute;

  left: 15px;
  top: 40px;

  height: 125px;
  width: 940px;
  overflow: hidden;
  padding: 10px 20px;

  background-color: ${props => props.theme.colors.bg3};
  border-bottom: 0.25rem solid ${props => props.theme.colors.accent1};

  display: grid;
  grid-gap: 10px;
  grid-template-columns: 115px 1fr;
`;

interface UpNextProps {
  activeTopic: IntTopic;
  topics: IntTopic[];
}

export const UpNextFGT: React.FC<UpNextProps> = ({ activeTopic, topics }) => {
  const { showSection } = useParams();

  if (!showSection(SectionsFGT.UpNext)) return null;
  return (
    <UpNextWrapper>
      <UpNext
        activeTopic={activeTopic}
        topics={topics}
        titleCss={{
          color: "white",
          fontSize: "1.5rem",
          fontWeight: "normal",
          textTransform: "uppercase"
        }}
        topicCss={{
          fontSize: "1.75rem",
          textTransform: "uppercase"
        }}
      />
    </UpNextWrapper>
  );
};
