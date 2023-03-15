export enum TopicActionssssssss {
  TimerPause = "timer-pause",
  TimerResume = "timer-resume",
  TopicNext = "topic-next",
  TopicPrevious = "topic-prev"
}

export enum SectionsBNN {
  Header = "header",
  Chyron = "chyron",
  Host_2_1 = "host_2_1",
  Host_2_2 = "host_2_2",
  Video_2_host = "video_2_host",
  Video_2_video = "video_2_video",
  Video_3_host_1 = "video_3_host_1",
  Video_3_host_2 = "video_3_host_2",
  Video_3_video = "video_3_video"
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
  Chyron = "chyron",
  Description = "description",
  Header = "header",
  Logo = "logo",
  Sponsors = "sponsors",
  Topics = "topics",

  Host_2_Divider = "host_2_divider",
  Host_3_Divider = "host_3_divider",

  Label_1_Host_1 = "label_1_host_1",
  Label_1_Host_2 = "label_1_host_2",
  Label_1_Host_3 = "label_1_host_3",

  Label_2_Host_2 = "label_2_host_2",
  Label_2_Host_3 = "label_2_host_3",

  Label_3_Host_2 = "label_3_host_2",
  Label_3_Host_3 = "label_3_host_3"
}

export type OverlaySections = SectionsBNN | SectionsCNN | SectionsPTI;
