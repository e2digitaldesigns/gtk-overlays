import React from "react";
import { useColor } from "../../../../../hooks";
import * as Styled from "./Background.style";

const Background: React.FC = () => {
  const color = useColor();

  return (
    <>
      <Styled.Background />
      <Styled.BackgroundBorder color={color} />
    </>
  );
};

export default Background;
