import React from "react";

import { useDataContext } from "../../../../../context";
import { Scroller, TimeItem } from "../../../../../globalComponents";
import { useParams, useSimpleTopic } from "../../../../../hooks";
import * as Styled from "./Chyron.style";
import { socialToScrollerUtil } from "../../../../../globalComponents/Utils/socailToScroller";

import CONFIG from "../../config.json";
import { SectionsCNN } from "../../../../../types";

const Chyron: React.FC = () => {
  const { showSection } = useParams();
  const { socialNetworks, ticker } = useDataContext();
  const socialNetworksData = socialToScrollerUtil(socialNetworks, true);
  const { topic } = useSimpleTopic();

  if (!showSection(SectionsCNN.Chyron)) return null;

  return (
    <>
      <Styled.TopicTitleWrapper>
        <Styled.TopicTitle>{topic.name}</Styled.TopicTitle>
      </Styled.TopicTitleWrapper>

      <Styled.TopicDescriptionWrapper>
        <Styled.TopicDescription>{topic.desc}</Styled.TopicDescription>
      </Styled.TopicDescriptionWrapper>

      <Styled.NewsTickerWrapper>
        <Scroller
          data={ticker}
          sx={{
            title: { padding: "0 .25rem", "font-weight": "bold" },
            text: { "font-weight": "bold" }
          }}
          timer={CONFIG.scrollTimers.newsFeed}
        />
      </Styled.NewsTickerWrapper>

      <Styled.SocialTickerWrapper>
        <Scroller
          data={socialNetworksData}
          sx={{
            text: { "font-weight": "bold" }
          }}
          timer={CONFIG.scrollTimers.socialNetworks}
        />
      </Styled.SocialTickerWrapper>

      <Styled.StatusBox>Live</Styled.StatusBox>

      <Styled.LogoBox>Logo</Styled.LogoBox>

      <Styled.TimeWrapper>
        <Scroller timer={CONFIG.scrollTimers.clock}>
          <TimeItem hour={0} zone="EST" />
          <TimeItem hour={1} zone="CT" />
          <TimeItem hour={2} zone="MT" />
          <TimeItem hour={3} zone="PT" />
        </Scroller>
      </Styled.TimeWrapper>
    </>
  );
};

export default Chyron;
