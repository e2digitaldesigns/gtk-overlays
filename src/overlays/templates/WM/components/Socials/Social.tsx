import React from "react";
import * as Styled from "./Socials.style";
import * as RFIcon from "react-feather";
import _find from "lodash/find";
import _startCase from "lodash/startCase";
import { Scroller, socialToScroller } from "../../../../../globalComponents";
import { useDataContext } from "../../../../../context";
import CONFIG from "../../config.json";

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
  instagram: "#c42b8f",
  twitch: "purple",
  twitter: "#1D9BF9",
  youtube: "red"
};

const Socials: React.FC = () => {
  const { socialNetworks } = useDataContext();
  const [socialNetworkIcon, setSocialNetworkIcon] =
    React.useState<string>("Home");

  const [bgColor, setBgColor] = React.useState<string>("black");

  const data = React.useMemo(
    () => socialToScroller(socialNetworks, true),
    [socialNetworks]
  );

  const handleCallBack = (data: any) => {
    if (!data?.title) return;

    const site: string =
      data.title.toLowerCase() === "tweet" ? "Twitter" : data.title;
    setSocialNetworkIcon(site);

    const theColor: string = colors[site.toLowerCase()];
    setBgColor(theColor);
  };

  return (
    <>
      <Styled.Socials>
        <Styled.IconHolder bgColor={bgColor}>
          <DisplayIcon icon={socialNetworkIcon} size={36} />
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
