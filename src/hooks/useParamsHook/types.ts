export type TSections =
  | "chyron"
  | "header"
  | "host_2_1"
  | "host_2_2"
  | "video_2_host"
  | "video_2_video"
  | "video_3_host_1"
  | "video_3_host_2"
  | "video_3_video";

export enum Sections {
  BnnHeader = "header",
  BnnChyron = "chyron",
  BnnHost_2_1 = "host_2_1",
  BnnHost_2_2 = "host_2_2",
  BnnVideo_2_host = "video_2_host",
  BnnVideo_2_video = "video_2_video",
  BnnVideo_3_host_1 = "video_3_host_1",
  BnnVideo_3_host_2 = "video_3_host_2",
  BnnVideo_3_video = "video_3_video",
  Chyron = "chyron"
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
