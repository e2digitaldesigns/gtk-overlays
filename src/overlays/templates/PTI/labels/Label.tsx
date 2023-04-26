import React from "react";
import { useDataContext } from "../../../../context";
import { SectionsPTI } from "../../../../types";
import { TheHostLabel } from "./TheLabel";

const HostLabels: React.FC = () => {
  const { hosts: data } = useDataContext();

  // const host_1_1 = showSection(SectionsPTI.Label_1_Host_1);
  // const host_1_2 = showSection(SectionsPTI.Label_1_Host_2);
  // const host_1_3 = showSection(SectionsPTI.Label_1_Host_3);

  // const host_2_2 = showSection(SectionsPTI.Label_2_Host_2);
  // const host_2_3 = showSection(SectionsPTI.Label_2_Host_3);

  // const host_3_2 = showSection(SectionsPTI.Label_3_Host_2);
  // const host_3_3 = showSection(SectionsPTI.Label_3_Host_3);

  const hostLabelArr: {
    seat: string;
    section: SectionsPTI;
    tickerArr: string[];
  }[] = [
    {
      seat: "1",
      section: SectionsPTI.Label_1_Host_1,
      tickerArr: data?.[0]?.ticker
    },
    {
      seat: "1",
      section: SectionsPTI.Label_1_Host_2,
      tickerArr: data?.[1]?.ticker
    },
    {
      seat: "1",
      section: SectionsPTI.Label_1_Host_3,
      tickerArr: data?.[2]?.ticker
    },

    {
      seat: "22",
      section: SectionsPTI.Label_2_Host_2,
      tickerArr: data?.[1]?.ticker
    },
    {
      seat: "23",
      section: SectionsPTI.Label_2_Host_3,
      tickerArr: data?.[2]?.ticker
    },

    {
      seat: "32",
      section: SectionsPTI.Label_3_Host_2,
      tickerArr: data?.[1]?.ticker
    },
    {
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
          seat={hostLabel.seat}
          section={hostLabel.section}
          tickerArr={hostLabel.tickerArr}
        />
      ))}

      {/* {host_1_2 && <Styled.Host1>{data?.[1]?.name}</Styled.Host1>}
      {host_1_3 && <Styled.Host1>{data?.[2]?.name}</Styled.Host1>}

      {host_2_2 && <Styled.Host22>{data?.[1]?.name}</Styled.Host22>}
      {host_2_3 && <Styled.Host23>{data?.[2]?.name}</Styled.Host23>}

      {host_3_2 && <Styled.Host32>{data?.[1]?.name}</Styled.Host32>}
      {host_3_3 && <Styled.Host33>{data?.[2]?.name}</Styled.Host33>} */}
    </>
  );
};

export default HostLabels;
