import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

import Background from "./components/Background/Background";
import ImageHolder from "./components/ImageHolder/ImageHolder";
import Socials from "./components/Socials/Social";
import Ticker from "./components/Ticker/Ticker";
import TopicsWM from "./components/Topics/Topics";

const OverlayWM: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ImageHolder />
      <TopicsWM />
      <Socials />
      <Ticker />
      <Background />
    </ThemeProvider>
  );
};

export default OverlayWM;
