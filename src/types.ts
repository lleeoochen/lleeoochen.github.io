export type IIncludePlugins = {
  jquery?: boolean;
  swiper?: boolean;
};

export type IProject = {
  id?: string;
  title: string;
  description: string;
  product?: string;
  repository?: string;
  image?: string;
  video?: string;
};

export type IExperience = {
  id: string;
  title: string;
  organization: string;
  time: string;
  descriptions: string[];
  logo?: string;
};

export type IWorkExperience = IExperience & {
  location: string;
  isInternship: boolean;
};

export type ISpotifyEntry = {
  id: string;
  title: string;
  description: string;
};

export type IMenuRoute = {
  href: string;
  name: string;
  icon: React.ReactNode;
};
