import * as React from "react";
import { useDataContext } from "../../../../../../context";
import { useSimpleTopic } from "../../../../../../hooks";
import * as Styled from "./LogoBox.styles";

interface IntLogoBox {}

const LogoBox: React.FC<IntLogoBox> = () => {
  const { topics } = useDataContext();
  const topic = useSimpleTopic(topics);

  return (
    <Styled.LogoBox>
      {topic?.image ? (
        <img src={`${process.env.REACT_APP_CLOUD_IMAGES_USER}${topic.image}`} />
      ) : (
        <span>GMT</span>
      )}
    </Styled.LogoBox>
  );
};

export default LogoBox;
