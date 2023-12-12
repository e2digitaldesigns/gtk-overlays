export type GlobalDataContextHostSocials = {
  _id: string;
  site: string;
  username: string;
};

export type GlobalDataContextHostTickerWithTitle = {
  title: string;
  text: string;
};

export type GlobalDataContextHost = {
  seatNum: number;
  name: string;
  socials: GlobalDataContextHostSocials[];
  ticker: string[];
  tickerWithTitles: GlobalDataContextHostTickerWithTitle[];
};

export type GlobalDataContextSocials = {
  order: number;
  site: string;
  username: string;
};

export type GlobalDataContextTopic = {
  _id: string;
  articles: string;
  desc: string;
  img: string;
  isChild: boolean;
  isParent: boolean;
  name: string;
  notes: string;
  order: number;
  parentId: string;
  timer: number;
  video: string;
};

export type GlobalDataContextTicker = {
  _id: string;
  title: string;
  text: string;
};

export type GlobalDataContext = {
  _id: string;
  userId: string;
  name: string;
  active: boolean;
  airDate: string;
  current: boolean;
  hosts: GlobalDataContextHost[];
  number: 1;
  socialNetworks: GlobalDataContextSocials[];
  templateId: string;
  ticker: GlobalDataContextTicker[];
  topics: GlobalDataContextTopic[];
  sponsorImages: string[];
  logo: string;
  podcastName: string;
};

export type GlobalDataContextState = GlobalDataContext;
