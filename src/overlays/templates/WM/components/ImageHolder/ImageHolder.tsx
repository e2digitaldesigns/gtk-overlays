import React from "react";
import { useColor } from "../../../../../hooks";
import * as Styled from "./ImageHolder.style";

const ImageHolder: React.FC = () => {
  const color = useColor();

  return <Styled.ImageHolder color={color} />;
};

export default ImageHolder;
