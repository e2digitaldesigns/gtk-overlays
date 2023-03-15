import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

import Chyron from "./chyron/chyron";
import Description from "./description/description";
import Logo from "./logo/logo";
import Sponsors from "./sponsors/sponsors";
import Topics from "./topics/topics";
import Hosts from "./hosts/Host";
import HostLabels from "./labels/Label";

const OverlayPTI: React.FC = () => {
  const [topicDescription, setTopicDescription] = useState<string>("");
  const [topicVideoId, setTopicVideoId] = useState<string>("");

  return (
    <>
      <ThemeProvider theme={theme}>
        <Chyron />
        <Description topicDescription={topicDescription} />
        <Logo />
        <Sponsors />
        <HostLabels />

        <Topics
          setTopicDescription={setTopicDescription}
          setTopicVideoId={setTopicVideoId}
        />

        <Hosts />
      </ThemeProvider>
    </>
  );
};

export default OverlayPTI;
