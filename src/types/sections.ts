export enum TopicActionssssssss {
  TimerPause = "timer-pause",
  TimerResume = "timer-resume",
  TopicNext = "topic-next",
  TopicPrevious = "topic-prev"
}

export enum SectionsBNN {
  Header = "header",
  Chyron = "chyron",

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
  ChatRank = "chatRank",
  Chyron = "chyron",
  Description = "description",
  Emojis = "emojis",
  Header = "header",
  Logo = "logo",
  Sponsors = "sponsors",
  Topics = "topics",

  Host_Divider = "host_divider",
  Host_label_1 = "host_label_1",
  Host_label_2 = "host_label_2"
}

export enum SectionsSAS {
  ChatDisplay = "chatDisplay",
  Chyron = "chyron"
}

export enum SectionsCHL {
  Header = "header",
  Chyron = "chyron",
  Host = "host"
}

export type OverlaySections =
  | SectionsBNN
  | SectionsCHL
  | SectionsCNN
  | SectionsPTI
  | SectionsSAS;
