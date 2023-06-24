import React from "react";
import { useParams } from "../../../../hooks";
import { SectionsPTI } from "../../../../types";
import * as Styled from "./Host.style";
import { TheHostLabel } from "../labels/TheLabel";

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

  const showDivider = showSection(SectionsPTI.Host_Divider);
  const showHostLabel1 = showSection(SectionsPTI.Host_label_1);
  const showHostLabel2 = showSection(SectionsPTI.Host_label_2);

  return (
    <>
      {showDivider && <Styled.Divider bgColor={bgColor}></Styled.Divider>}
      {showHostLabel1 && <TheHostLabel seatNumber={1} />}
      {showHostLabel2 && <TheHostLabel seatNumber={2} />}
    </>
  );
};

export default Hosts;
