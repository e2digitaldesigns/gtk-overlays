import React from "react";
import * as Styled from "./Sidebar.styles.";
import { TopicsCNN } from "./Topics/Topics";
import { SubHeaderCNN } from "./SubHeader/SubHeader";

import { HeaderCNN } from "./Header/Header";
import { SponsorsCNN } from "./Sponsors/Sponsors";
import { CamHolderCNN } from "./CamHolder/CamHolder";
import { SmallHostCNN } from "./SmallHost/SmallHost";

export const SidebarCNN: React.FC = () => {
  return (
    <Styled.SidebarWrapper>
      <CamHolderCNN />
      <HeaderCNN />

      <SubHeaderCNN />

      <SmallHostCNN />

      <TopicsCNN />

      <SponsorsCNN />
    </Styled.SidebarWrapper>
  );
};
