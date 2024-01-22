import React from "react";
import * as Styled from "./Sidebar.styles.";
import { TopicsCNN } from "./Topics/Topics";
import { SubHeaderCNN } from "./SubHeader/SubHeader";

import { HeaderCNN } from "./Header/Header";
import { SponsorsCNN } from "./Sponsors/Sponsors";

export const SidebarCNN: React.FC = () => {
  return (
    <Styled.SidebarWrapper>
      <HeaderCNN />

      <SubHeaderCNN />

      <TopicsCNN />

      <SponsorsCNN />
    </Styled.SidebarWrapper>
  );
};
