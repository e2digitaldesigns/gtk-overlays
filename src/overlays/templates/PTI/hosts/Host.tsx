import React from "react";
import { useParams } from "../../../../hooks";
import { SectionsPTI } from "../../../../types";
import * as Styled from "./Host.style";

const Hosts: React.FC = () => {
  const { showSection } = useParams();
  const [bgColor, setBgColor] = React.useState<string>("darkred");

  React.useEffect(() => {
    const colors: string[] = ["purple", "darkorange", "#54083f", "#190843"];

    const interval = setInterval(() => {
      setBgColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const host2Up = showSection(SectionsPTI.Host_2_Divider);
  const host3Up = showSection(SectionsPTI.Host_3_Divider);

  if (host2Up) {
    return <Styled.Host2Up bgColor={bgColor}></Styled.Host2Up>;
  }

  if (host3Up) {
    return (
      <>
        <Styled.Host3Up section={1} bgColor={bgColor}></Styled.Host3Up>
        <Styled.Host3Up section={2} bgColor={bgColor}></Styled.Host3Up>
      </>
    );
  }

  return null;
};

export default Hosts;
