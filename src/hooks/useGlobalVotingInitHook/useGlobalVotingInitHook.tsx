import React from "react";
import socketServices from "../../services/socketServices";
import { IVotes, RequestType, IVoteAction } from "../../types";
import { useVotingStore } from "../../dataStores";

const useGlobalVotingInitHook = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const votingDataStore = useVotingStore();

  React.useEffect(() => {
    socketServices.subscribeHostVoting((err: unknown, data: IVotes) => {
      if (data?.uid !== queryParams.get(RequestType.UserId)) return;
      if (data?.tid !== queryParams.get(RequestType.Template)) return;

      switch (data.action) {
        case IVoteAction.True:
        case IVoteAction.False:
          votingDataStore.logTopicVote(data);
          break;

        case IVoteAction.Add:
          votingDataStore.handleHostVoting(data, "add");
          break;

        case IVoteAction.Super:
          votingDataStore.handleHostVotingSuper(data);
          break;

        case IVoteAction.Remove:
          votingDataStore.handleHostVoting(data, "remove");
          break;

        case IVoteAction.ClearHostVotes:
          votingDataStore.clearHostVotes();
          break;

        case IVoteAction.ClearTopicVotes:
          votingDataStore.clearTopicVotes();
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
