import React from "react";
import styled from "styled-components";
import { UpNext } from "../../../../../globalComponents";
import { SectionsFGT } from "../../../../../types";
import { useParams } from "../../../../../hooks";

const UpNextWrapper = styled.div`
  position: absolute;

  left: 15px;
  top: 40px;

  height: 125px;
  width: 940px;
  overflow: hidden;
  padding: 10px 20px;

  background-color: ${props => props.theme.colors.bg3};
  border-bottom: 0.25rem solid ${props => props.theme.colors.accent1};

  display: grid;
  grid-gap: 10px;
  grid-template-columns: 115px 1fr;
`;

export const UpNextFGT: React.FC = () => {
  const { showSection } = useParams();

  if (!showSection(SectionsFGT.UpNext)) return null;
  return (
    <UpNextWrapper>
      <UpNext />
    </UpNextWrapper>
  );
};
