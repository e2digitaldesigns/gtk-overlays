import React from "react";
import { useColor } from "../../../../../hooks";
import * as Styled from "./ImageHolder.style";
import { useDataContext } from "../../../../../context";

const ImageHolder: React.FC = () => {
  const color = useColor();
  const { logo } = useDataContext();

  return (
    <Styled.ImageHolder color={color}>
      {logo && <img alt="logo" src={logo} />}
    </Styled.ImageHolder>
  );
};

export default ImageHolder;
