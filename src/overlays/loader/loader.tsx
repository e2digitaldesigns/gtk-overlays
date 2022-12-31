import * as React from "react";
import * as Styled from "./loader.style";

interface IntLoader {
  bgColor?: string;
  color?: string;
}

const Loader: React.FC<IntLoader> = ({ bgColor, color }) => {
  return (
    <>
      <Styled.LoaderWrapper bgColor={bgColor}>
        <Styled.LoaderRoller color={color}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Styled.LoaderRoller>
      </Styled.LoaderWrapper>
    </>
  );
};

export default Loader;
