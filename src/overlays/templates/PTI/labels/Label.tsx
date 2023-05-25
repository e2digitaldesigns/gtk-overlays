import React from "react";
import { useDataContext } from "../../../../context";
import { SectionsPTI } from "../../../../types";
import { TheHostLabel } from "./TheLabel";

const HostLabels: React.FC = () => {
  const { hosts: data } = useDataContext();

  const hostLabelArr: {
    hostNum: string;
    seat: string;
    section: SectionsPTI;
    tickerArr: string[];
  }[] = [
    {
      hostNum: "1",
      seat: "1",
      section: SectionsPTI.Label_1_Host_1,
      tickerArr: data?.[0]?.ticker
    },

    {
      hostNum: "1",
      seat: "1",
      section: SectionsPTI.Label_1_Host_2,
      tickerArr: data?.[1]?.ticker
    },

    {
      hostNum: "1",
      seat: "1",
      section: SectionsPTI.Label_1_Host_3,
      tickerArr: data?.[2]?.ticker
    },

    {
      hostNum: "2", //2
      seat: "22",
      section: SectionsPTI.Label_2_Host_2,
      tickerArr: data?.[1]?.ticker
    },

    {
      hostNum: "2", //2
      seat: "23",
      section: SectionsPTI.Label_2_Host_3,
      tickerArr: data?.[2]?.ticker
    },

    {
      hostNum: "2", //2
      seat: "32",
      section: SectionsPTI.Label_3_Host_2,
      tickerArr: data?.[1]?.ticker
    },

    {
      hostNum: "3", //3
      seat: "33",
      section: SectionsPTI.Label_3_Host_3,
      tickerArr: data?.[2]?.ticker
    }
  ];

  return (
    <>
      {hostLabelArr.map((hostLabel, index: number) => (
        <TheHostLabel
          key={index}
          hostNum={hostLabel.hostNum}
          seat={hostLabel.seat}
          section={hostLabel.section}
          tickerArr={hostLabel.tickerArr}
        />
      ))}
    </>
  );
};

export default HostLabels;
