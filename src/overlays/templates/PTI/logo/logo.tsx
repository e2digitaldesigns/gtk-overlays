import React from "react";
import styled from "styled-components";
import { useParams } from "../../../../hooks";
import { SectionsPTI } from "../../../../types";

export const LogoDiv = styled.div`
  background-color: ${props => props.theme.colors.scrollBackground};
  border-left: 5px solid ${props => props.theme.colors.accent1};
  height: 60px;
  left: 20px;
  position: absolute;
  top: 10px;
  width: 155px;
`;

const Logo: React.FC = () => {
  const { showSection } = useParams();
  if (!showSection(SectionsPTI.Logo)) return null;

  return (
    <>
      <LogoDiv className="logo logo logo logo box"></LogoDiv>
    </>
  );
};

export default Logo;
