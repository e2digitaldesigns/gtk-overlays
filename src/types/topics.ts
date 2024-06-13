export enum TopicActions {
  OverlayReset = "overlay-reset",
  TimerPause = "timer-pause",
  TimerResume = "timer-resume",
  TopicNext = "topic-next",
  TopicPrevious = "topic-prev"
}

export enum TopicStates {
  Active = "active",
  Clicked = "clicked",
  Hidden = "hidden",
  Normal = "normal",
  Timer = "timer"
}

export interface IntTopicVotingOptions {
  label: string;
  value: string;
}

export type TopicContent = {
  type: string | null;
  file: string;
};

export interface IntTopic {
  _id: string;
  order: number;
  name: string;
  desc: string;
  timer: number;
  isParent: boolean;
  isChild: boolean;
  parentId: string;
  img: string;
  video: string;
  chat: string;
  votingOptions: IntTopicVotingOptions[];
  content: TopicContent;
}

export interface IntCss {
  container?: object;
  image?: object;
  topicUl?: object;
  topicLi?: object;
}
