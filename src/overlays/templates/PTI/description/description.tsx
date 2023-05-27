import React from "react";
import * as Styled from "./description.style";
import { SectionsPTI } from "../../../../types";
import { useParams } from "../../../../hooks";

interface DescriptionProps {
  topicDescription: string;
}
const Description: React.FC<DescriptionProps> = ({ topicDescription }) => {
  const { showSection } = useParams();

  return (
    <>
      <Styled.DescriptionDivBacker
        isVisible={showSection(SectionsPTI.Description)}
      />

      <Styled.DescriptionDiv isVisible={showSection(SectionsPTI.Description)}>
        {topicDescription}
      </Styled.DescriptionDiv>
    </>
  );
};

export default Description;
