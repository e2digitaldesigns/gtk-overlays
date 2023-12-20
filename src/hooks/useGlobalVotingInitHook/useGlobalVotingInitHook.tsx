import React from "react";
import socketServices from "../../services/socketServices";
import { IVotes, RequestType, IVoteAction } from "../../types";
import { useVotingStore } from "../../dataStores";

const useGlobalVotingInitHook = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const votingDataStore = useVotingStore();

  React.useEffect(() => {
    votingDataStore.initVoting();

    socketServices.subscribeHostVoting((err: unknown, data: IVotes) => {
      if (data?.uid !== queryParams.get(RequestType.UserId)) return;
      if (data?.tid !== queryParams.get(RequestType.Template)) return;

      switch (data.action) {
        case IVoteAction.True:
        case IVoteAction.False:
          votingDataStore.logTrueOrFalseVote(data);
          break;

        case IVoteAction.Add:
          votingDataStore.handleVoting(data, "add");
          break;

        case IVoteAction.Super:
          console.log(28, "super");
          votingDataStore.handleVotingSuper(data);
          break;

        case IVoteAction.Remove:
          votingDataStore.handleVoting(data, "remove");
          break;

        case IVoteAction.ClearVotes:
          votingDataStore.clearVotes();
          break;
      }
    });

    return () => {
      socketServices.unSubscribeHostVoting();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useGlobalVotingInitHook;
