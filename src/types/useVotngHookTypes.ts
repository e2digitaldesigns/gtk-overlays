export interface IVotingState {
  [key: string]: number;
}

export enum IVoteAction {
  Add = "add",
  Remove = "remove",
  True = "true",
  False = "false",
  Super = "super",
  ClearVotes = "clear-votes"
}

export interface IVotes {
  _id: string;
  action: string | IVoteAction;
  username: string;
  channel: string;
  host: string;
  tid: string;
  uid: string;
}

export type TrueFalseVotes = { [key: string]: boolean };
export type TrueFalseVotesObj = { [key: string]: TrueFalseVotes };

export type trueFalseVotesParsed = {
  fullVotes: TrueFalseVotes;
  trueCount: number;
  falseCount: number;
};

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

// export const initVotingStreakState: IVoteStreaks = {
//   "1": { add: 0, remove: 0 },
//   "2": { add: 0, remove: 0 },
//   "3": { add: 0, remove: 0 },
//   "4": { add: 0, remove: 0 },
//   "5": { add: 0, remove: 0 },
//   "6": { add: 0, remove: 0 }
// };

export const initVotingStreakState: IVoteStreaks = {};
