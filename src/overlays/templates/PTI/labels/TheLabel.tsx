import React from "react";
import * as Styled from "./Label.style";
import { Scroller } from "../../../../globalComponents";
import { useParams } from "../../../../hooks";
import { SectionsPTI } from "../../../../types";
import _cloneDeep from "lodash/cloneDeep";

import CONFIG from "../config.json";
import useVotingHook from "../../../../hooks/useVotingHook/useVotingHook";

interface IVotes {
  _id: string;
  action: "add" | "clear";
  username: string;
  channel: string;
  host: string;
  tid: string;
  uid: string;
}

interface IMyComponent {
  seat: string;
  vote: IVotes;
}

const MyComponent: React.FC<IMyComponent> = ({ seat, vote }) => {
  const display = vote.action === "add" ? "+1" : "-1";
  return (
    <Styled.Floater seat={seat}>
      <Styled.Vote>{display}</Styled.Vote>
      <Styled.Host>{vote.username}</Styled.Host>
    </Styled.Floater>
  );
};

interface ITheHostLabel {
  hostNum: string;
  seat: string;
  section: SectionsPTI;
  tickerArr: string[];
}

export const TheHostLabel: React.FC<ITheHostLabel> = ({
  hostNum,
  seat,
  section,
  tickerArr
}) => {
  const { showSection } = useParams();
  const { votes, voting } = useVotingHook();
  const [components, setComponents] = React.useState<any>([]);

  const handleAddComponent = React.useCallback((seat: string, vote: IVotes) => {
    const clonedComponent = React.cloneElement(
      <MyComponent seat={seat} vote={vote} />,
      {
        key: Date.now()
      }
    );
    setComponents([...components, clonedComponent]);
  }, []);

  React.useEffect(() => {
    const lastElement = votes[votes.length - 1];

    if (lastElement?.host === hostNum) {
      handleAddComponent(seat, {
        ...lastElement
      });

      setTimeout(() => {
        const newState = _cloneDeep(components);
        newState.shift();
        setComponents(newState);
      }, 4500);
    }
  }, [handleAddComponent, hostNum, votes, seat]);

  return showSection(section) ? (
    <>
      {/* <button
        onClick={() =>
          handleAddComponent(seat, {
            action: "add",
            username: "casana",
            channel: "string",
            host: "ha ha ha"
          })
        }
      >
        Add Component
      </button> */}

      {components}

      <Styled.HostWrapper seat={seat}>
        <Styled.Vote>{voting[hostNum]}</Styled.Vote>
        <Styled.Host>
          <Scroller timer={CONFIG.scrollTimers.hostLabels}>
            {tickerArr?.map((ticker: string, index: number) => (
              <div key={index}>{ticker}</div>
            ))}
          </Scroller>
        </Styled.Host>
      </Styled.HostWrapper>
    </>
  ) : null;
};
