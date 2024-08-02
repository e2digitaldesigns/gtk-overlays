import React from "react";
import * as Styled from "./ChatterVote.styles";
import { useParams } from "../../../../../hooks";
import { ChatVote } from "../../../../../globalComponents";
import { theme } from "../../Theme/GlobalTheme";
import { SectionsCHL } from "../../../../../types";
import { IChatterVoteState } from "../../../../../globalComponents/ChatVote/ChatVote";

export const ChatterVoteCHL: React.FC = () => {
  const { showSection } = useParams();
  const [showVotes, setShowVotes] = React.useState<boolean>(true);
  if (!showSection(SectionsCHL.Header)) return null;

  const callBackFn = (data: IChatterVoteState[]) => {
    console.log(data);
    setShowVotes(!!data.length);
  };

  return (
    <Styled.ChatterVoteWrapper showVotes={showVotes}>
      <ChatVote
        borderBottom={`2px solid #000`}
        callBackFn={callBackFn}
        nameBgColor="#333"
        voteBgColor={theme.colors.accent1}
      />
    </Styled.ChatterVoteWrapper>
  );
};
