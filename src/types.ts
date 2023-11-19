export type IIncludePlugins = {
  jquery?: boolean;
  swiper?: boolean;
}

export type ICard = {
  id?: string;
  title: string;
  description: string;
  product?: string;
  repository?: string;
  image?: string;
  video?: string;
};

export type IWork = {
  title: string;
  company: string;
  location: string;
  time: string;
  logo: string;
  descriptions: string[];
}

export type ISpotifyEntry = {
  id: string;
  title: string;
  description: string;
};
