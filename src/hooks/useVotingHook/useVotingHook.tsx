import React from "react";
import socketServices from "../../services/socketServices";
import _cloneDeep from "lodash/cloneDeep";
import _isEqual from "lodash/isEqual";

interface IVotingState {
  [key: string]: number;
}

export interface IVotes {
  _id: string;
  action: "add" | "remove";
  username: string;
  channel: string;
  host: string;
  tid: string;
  uid: string;
}

const initState: IVotingState = {
  "1": 0,
  "2": 0,
  "3": 0,
  "4": 0,
  "5": 0
};

const useVotingHook = () => {
  const STORAGE_KEY = "@gtk/voting-tally";
  const [voting, setVoting] = React.useState<IVotingState>(initState);
  const [votes, setVotes] = React.useState<IVotes[]>([]);

  const queryParams = new URLSearchParams(window.location.search);

  React.useEffect(() => {
    const data = window.localStorage.getItem(STORAGE_KEY);

    if (data) {
      JSON.parse(data) && setVoting(JSON.parse(data));
    }
  }, []);

  const handleAddVote = React.useCallback(
    (data: IVotes) => {
      const state = _cloneDeep(votes);
      state.push(data);
      setVotes(state);
    },
    [votes]
  );

  const handleVoting = React.useCallback(
    (vote: IVotes, type: "add" | "remove") => {
      handleAddVote(vote);

      const newState = _cloneDeep(voting);
      const hostNum = vote.host as keyof IVotingState;
      newState[hostNum] =
        type === "add" ? newState[hostNum] + 1 : newState[hostNum] - 1;
      setVoting(newState);
    },
    [handleAddVote, voting]
  );

  React.useEffect(() => {
    let stillHere = true;

    socketServices.subscribeHostVoting((err: any, data: any) => {
      console.log(data);
      if (data?.uid !== queryParams.get("uid")) return;
      if (!data?.tid || data?.tid !== queryParams.get("tid")) return;

      switch (data.action) {
        case "add":
          if (stillHere) {
            handleVoting(data, "add");
          }
          break;

        case "remove":
          if (stillHere) {
            handleVoting(data, "remove");
          }
          break;
      }
    });

    return () => {
      stillHere = false;
      socketServices.unSubscribeHostVoting();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleVoting]);

  React.useEffect(() => {
    let stillHere = true;

    socketServices.subscribeOverlayActions(
      (err: unknown, data: { action: string; uid: string; tid?: string }) => {
        if (!data?.uid || data?.uid !== queryParams.get("uid")) return;
        if (!data?.tid || data?.tid !== queryParams.get("tid")) return;

        switch (data.action) {
          case "clear-votes":
            stillHere && setVoting(initState);
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initState));
            break;

          default:
            break;
        }
      }
    );

    return () => {
      stillHere = false;
      socketServices.unSubscribeOverlayActions();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (_isEqual(initState, voting)) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(voting));
  }, [voting]);

  return {
    votes,
    voting
  };
};

export default useVotingHook;
