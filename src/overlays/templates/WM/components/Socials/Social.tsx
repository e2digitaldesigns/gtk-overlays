import React from "react";
import * as Styled from "./Socials.style";
import * as RFIcon from "react-feather";
import _find from "lodash/find";
import _startCase from "lodash/startCase";
import { Scroller, socialToScroller } from "../../../../../globalComponents";
import { useDataContext } from "../../../../../context";
import CONFIG from "../../config.json";

import IconType, {
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

const DisplayIcon: React.FC<IntDisplayIcon> = ({
  icon,
  color = "white",
  size = 24
}): React.ReactElement => {
  const TheIcon = _find(
    RFIcon,
    (f: RFIcon.Icon) => f.displayName === _startCase(icon)
  );

  return <>{!TheIcon ? null : <TheIcon color={color} size={size} />}</>;
};

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

const Socials: React.FC = () => {
  const { socialNetworks } = useDataContext();
  const [socialNetworkIcon, setSocialNetworkIcon] =
    React.useState<string>("discord");

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

  const Icon = IconMap[socialNetworkIcon];

  return (
    <>
      <Styled.Socials>
        <Styled.IconHolder bgColor={bgColor}>
          <Icon size={36} color="white" />
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

export default Socials;
