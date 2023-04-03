import React from "react";
import styled from "styled-components";
import { useDataContext } from "../../../../context";
import { useParams } from "../../../../hooks";
import { SectionsPTI } from "../../../../types";

export const LogoDiv = styled.div`
  background-color: ${props => props.theme.colors.scrollBackground};
  border-left: 5px solid ${props => props.theme.colors.accent1};
  height: 55px;
  left: 20px;
  position: absolute;
  top: 10px;
  width: 100px;

  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
  }
`;

const Logo: React.FC = () => {
  const { logo } = useDataContext();
  const { showSection } = useParams();
  if (!showSection(SectionsPTI.Logo)) return null;

  return (
    <>
      <LogoDiv>
        {/* {logo && <img src={process.env.REACT_APP_CLOUD_IMAGES_USER + logo} />} */}
      </LogoDiv>
    </>
  );
};

export default Logo;
