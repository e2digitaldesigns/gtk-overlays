import React from "react";
import { useParams } from "../../../../../hooks";
import { SectionsCNN } from "../../../../../hooks/useParamsHook/types";
import * as Styled from "./ContentBoxes.style";

const ContentBoxes: React.FC = () => {
  const { showSection } = useParams();

  const showContentBox1 = showSection(SectionsCNN.ContentBox1);
  const showContentBox2 = showSection(SectionsCNN.ContentBox2);
  const showContentBox3 = showSection(SectionsCNN.ContentBox3);

  return (
    <>
      {showContentBox1 && (
        <Styled.ContentBox_1>
          <Styled.TopicName>Tuesday 4pm EST</Styled.TopicName>
        </Styled.ContentBox_1>
      )}

      {showContentBox2 && (
        <Styled.ContentBox_2>
          <Styled.TopicName>Tuesday 4pm EST</Styled.TopicName>
        </Styled.ContentBox_2>
      )}

      {showContentBox3 && (
        <Styled.ContentBox_3>
          <Styled.TopicName>Tuesday 4pm EST</Styled.TopicName>
        </Styled.ContentBox_3>
      )}
    </>
  );
};

export default ContentBoxes;
