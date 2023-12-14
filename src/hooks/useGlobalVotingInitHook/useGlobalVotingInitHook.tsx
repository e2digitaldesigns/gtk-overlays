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
          console.log(21, data.action);
          votingDataStore.logTrueOrFlaseVote(data);
          break;

        case IVoteAction.Add:
          console.log(26, data.action);
          votingDataStore.handleVoting(data, "add");
          break;

        case IVoteAction.Super:
          break;

        case IVoteAction.Remove:
          console.log(34, data.action);
          votingDataStore.handleVoting(data, "remove");
          break;

        case IVoteAction.ClearVotes:
          console.log(39, data.action);
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
