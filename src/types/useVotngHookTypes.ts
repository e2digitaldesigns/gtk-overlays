export interface IVotingState {
  [key: string]: number;
}

export enum IVoteAction {
  Yes = "yes",
  No = "no",
  One = "1",
  Two = "2",
  Add = "add",
  Remove = "remove",
  True = "true",
  False = "false",
  Super = "super",
  ClearHostVotes = "clear-host-votes",
  ClearTopicVotes = "clear-topic-votes"
}

export interface IVoteEmojis {
  _id: string;
  action: string;
  date: Date;
  emoji: string;
  start: number;
}
export interface IVotes {
  _id: string;
  action: string | IVoteAction;
  username: string;
  channel: string;
  host: string;
  tid: string;
  uid: string;
  createdAt: Date;
  emojis: IVoteEmojis[];
}

export type TopicVotes = { [key: string]: string };
export type TopicVotesObj = { [key: string]: TopicVotes };

export type TopicVotesParsed = {
  fullVotes: TopicVotes;
  trueCount: number;
  falseCount: number;
  oneCount: number;
  twoCount: number;
  yesCount: number;
  noCount: number;
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

export const initVotingStreakState: IVoteStreaks = {
  "1": { add: 0, remove: 0 },
  "2": { add: 0, remove: 0 },
  "3": { add: 0, remove: 0 },
  "4": { add: 0, remove: 0 },
  "5": { add: 0, remove: 0 },
  "6": { add: 0, remove: 0 }
};
