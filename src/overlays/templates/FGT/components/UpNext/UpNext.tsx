import React from "react";
import styled from "styled-components";
import { UpNext } from "../../../../../globalComponents";
import { SectionsFGT } from "../../../../../types";
import { useParams } from "../../../../../hooks";
import { theme } from "../../Theme/GlobalTheme";

const UpNextWrapper = styled.div`
  position: absolute;
  left: 15px;
  top: 15px;
  height: 125px;
  width: 1890px;
  overflow: hidden;
  background-color: "green";
`;

export const UpNextFGT: React.FC = () => {
  const { showSection } = useParams();

  if (!showSection(SectionsFGT.UpNext)) return null;
  return (
    <UpNextWrapper>
      <UpNext borderColor={theme.colors.accent1} />
    </UpNextWrapper>
  );
};
