import React from "react";
import styled from "styled-components";
import { useDataContext } from "../../../../../context";

export const LogoDiv = styled.div`
  position: absolute;
  left: 80px;
  bottom: 70px;

  width: 280px;
  height: 180px;
  background-color: #562154;

  overflow: hidden;

  border-right: 1px solid #25082f;

  img {
    height: 100%;
    width: 100%;
  }
`;

const WedgeDiv = styled.div`
  position: absolute;
  left: 80px;
  top: 1010px;

  width: 280px;
  height: 80px;
  /* clip-path: polygon(100% 0, 0 0, 10% 30%); */
  /* clip-path: polygon(0 0, 44% 22%, 33% 0); */
  clip-path: polygon(0% 0%, 36% 43%, 29% 0);
  background-color: #24082e;
`;

const LogoSAS: React.FC = () => {
  const { logo } = useDataContext();

  const theLogo = logo.trim();

  return (
    <>
      <LogoDiv>{theLogo && <img src={logo} alt="logo" />}</LogoDiv>

      <WedgeDiv data-testid="xxx" />
    </>
  );
};

export default LogoSAS;
