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

export enum SectionsCNN {
  Header = "header",

  Host_2_1 = "host_2_1",
  Host_2_2 = "host_2_2",
  Host_3_1 = "host_3_1",
  Host_3_2 = "host_3_2",
  Host_3_3 = "host_3_3",

  Chyron = "chyron",

  ContentBox1 = "contentBox1",
  ContentBox2 = "contentBox2",
  ContentBox3 = "contentBox3"
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
  Description = "description",
  Sponsors = "sponsors",
  Topics = "topics",
  Video = "video",
  Host_1_Up = "host_1_up",

  Host_2_Up_Host_1 = "host_2_up_host_1",
  Host_2_Up_Host_2 = "host_2_up_host_2"
}

export type OverlaySections =
  | SectionsBNN
  | SectionsCHL
  | SectionsCNN
  | SectionsPTI
  | SectionsSAS
  | SectionsXBX;
