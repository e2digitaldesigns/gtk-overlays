import React from "react";
import { useDataContext } from "../../../../../context";
import { useParams } from "../../../../../hooks";
import { SectionsCNN } from "../../../../../types";
import * as Styled from "./ContentBoxes.style";

const ContentBoxes: React.FC = () => {
  const { showSection } = useParams();
  const { contentBoxes } = useDataContext();

  const showContentBoxes = [
    showSection(SectionsCNN.ContentBox1),
    showSection(SectionsCNN.ContentBox2),
    showSection(SectionsCNN.ContentBox3)
  ];

  const imgParser = (img: string | undefined) => {
    if (!img) return undefined;

    return process.env.REACT_APP_CLOUD_IMAGES_USER + img;
  };

  return (
    <>
      {showContentBoxes.map((isVisible: boolean, index: number) => (
        <>
          {isVisible && (
            <Styled.ContentBox
              key={index}
              position={index}
              bgImg={imgParser(contentBoxes?.[index]?.img)}
            >
              <Styled.TopicName>
                {contentBoxes?.[index]?.title}
              </Styled.TopicName>

              <Styled.TopicText>{contentBoxes?.[index]?.text}</Styled.TopicText>
            </Styled.ContentBox>
          )}
        </>
      ))}
    </>
  );
};

export default ContentBoxes;
