export interface IVotingState {
  [key: string]: number;
}

export interface IVotes {
  _id: string;
  // action: "add" | "remove" | "super";
  action: string;
  username: string;
  channel: string;
  host: string;
  tid: string;
  uid: string;
}

export type TrueFalseVotes = { [key: string]: boolean };
export type TrueFalseVotesObj = { [key: string]: TrueFalseVotes };

export interface IVoteStreaks {
  [key: string]: {
    add: number;
    remove: number;
  };
}

export const initVotingState: IVotingState = {
  "1": 0,
  "2": 0,
  "3": 0,
  "4": 0,
  "5": 0,
  "6": 0
};

export const initVotingStreakState: IVoteStreaks = {
  "1": { add: 0, remove: 0 },
  "2": { add: 0, remove: 0 },
  "3": { add: 0, remove: 0 },
  "4": { add: 0, remove: 0 },
  "5": { add: 0, remove: 0 },
  "6": { add: 0, remove: 0 }
};
