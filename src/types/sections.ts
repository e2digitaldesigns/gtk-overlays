export enum TopicActionssssssss {
  TimerPause = "timer-pause",
  TimerResume = "timer-resume",
  TopicNext = "topic-next",
  TopicPrevious = "topic-prev"
}

export enum SectionsBNN {
  Chyron = "chyron",
  Emojis = "emojis",
  Header = "header",

  Hosts_2_up = "hosts_2_up",
  Host_1_video_1 = "host_1_video_1",
  Host_2_video_1 = "host_2_video_1"
}

export enum SectionsPTI {
  ChatRank = "chat_rank",
  Chyron = "chyron",
  Description = "description",
  Emojis = "emojis",
  Sponsors = "sponsors",
  Topics = "topics",
  Host_Divider = "host_divider",
  Host_label_1 = "host_label_1",
  Host_label_2 = "host_label_2",
  Video = "video"
}

export enum SectionsSAS {
  ChatMessage = "chat_message",
  ChatRank = "chat_rank",
  Chyron = "chyron",
  Emojis = "emojis"
}

export enum SectionsCHL {
  ChatMessage = "chat_message",
  Chyron = "chyron",
  Emojis = "emojis",
  Header = "header",
  Host1 = "host_1",
  Host2 = "host_2",
  Host3 = "host_3",
  UpNext = "up_next",
  Video = "video"
}

export enum SectionsXBX {
  ChatMessage = "chat_message",
  ChatRank = "chat_rank",
  Chyron = "chyron",
  Clock = "clock",
  Description = "description",

  Host_1_Up = "host_1_up",
  Host_2_Up_Host_1 = "host_2_up_host_1",
  Host_2_Up_Host_2 = "host_2_up_host_2",

  Sponsors = "sponsors",
  Topics = "topics",
  Video = "video"
}

export enum SectionsFGT {
  ChatMessage = "chat_message",
  Description = "desc",
  Host1 = "host_1",
  Host2 = "host_2",
  Host3 = "host_3",
  Host4 = "host_4",
  NewsFeed = "news_feed",
  Sponsors = "sponsors",
  UpNext = "up_next",
  Video = "video"
}

export enum SectionsCNN {
  Sidebar = "sidebar",
  Host = "host",
  ChatMessage = "chat_message",
  ChatDisplay = "chat_display",
  Video = "video"
}

export type OverlaySections =
  | SectionsBNN
  | SectionsCHL
  | SectionsCNN
  | SectionsPTI
  | SectionsSAS
  | SectionsXBX
  | SectionsFGT;
