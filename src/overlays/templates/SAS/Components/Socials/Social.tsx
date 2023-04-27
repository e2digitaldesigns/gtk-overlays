import React from "react";
import * as Styled from "./Socials.style";
import { Scroller, socialToScroller } from "../../../../../globalComponents";
import { useDataContext } from "../../../../../context";
import CONFIG from "../../config.json";

import {
  BsDiscord,
  BsFacebook,
  BsInstagram,
  BsSnapchat,
  BsTiktok,
  BsTwitch,
  BsTwitter,
  BsYoutube
} from "react-icons/bs";

export interface IntDisplayIcon {
  color?: string;
  icon: string;
  size?: number | string;
}

type IColors = { [key: string]: string };

const colors: IColors = {
  discord: "#7289DA",
  facebook: "#3B5998",
  instagram: "#c42b8f",
  snapchat: "yellow",
  tiktok: "black",
  twitch: "purple",
  twitter: "#1D9BF9",
  youtube: "red"
};

type IconMapType = { [key: string]: any };

const IconMap: IconMapType = {
  discord: BsDiscord,
  facebook: BsFacebook,
  instagram: BsInstagram,
  snapchat: BsSnapchat,
  tiktok: BsTiktok,
  twitch: BsTwitch,
  twitter: BsTwitter,
  youtube: BsYoutube
};

const SocialsSAS: React.FC = () => {
  const { socialNetworks } = useDataContext();
  const [socialNetworkIcon, setSocialNetworkIcon] =
    React.useState<string | null>(null);

  const [bgColor, setBgColor] = React.useState<string>("black");

  const data = React.useMemo(
    () => socialToScroller(socialNetworks, true),
    [socialNetworks]
  );

  const handleCallBack = (data: any) => {
    if (!data?.title) return;
    setSocialNetworkIcon(data.title.toLowerCase());
    const theColor: string = colors[data.title.toLowerCase()];
    setBgColor(theColor);
  };

  const Icon = socialNetworkIcon ? IconMap[socialNetworkIcon] : null;

  return (
    <>
      <Styled.TriangleRight />
      <Styled.Socials>
        <Styled.IconHolder bgColor={bgColor}>
          {Icon && <Icon size={36} color="white" />}
        </Styled.IconHolder>
        <Styled.TextHolder>
          <Scroller
            data={data}
            timer={CONFIG.scrollTimers.socialNetworks}
            callBack={handleCallBack}
            showTitle={false}
          />
        </Styled.TextHolder>
      </Styled.Socials>
    </>
  );
};

export default SocialsSAS;
