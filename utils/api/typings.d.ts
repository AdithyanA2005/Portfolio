// MY BLOG
export interface Blog {
  title: string;
  url: string;
  brief: string;
  coverImage: string;
  dateAdded: string;
}

// HASHNODE BLOG SERVICE
export interface HashnodePost {
  title: string;
  slug: string;
  cuid: string;
  brief: string;
  coverImage: string;
  dateAdded: string;
}

interface HashnodePublication {
  posts: HashnodePost[];
}

interface HashnodeUser {
  publication: HashnodePublication;
}

interface HashnodeData {
  user: HashnodeUser;
}

export interface HashnodeResponse {
  data: HashnodeData;
}

// SANITY CDN
interface SanityBody {
  _cretedAt: string;
  _id: string;
  _rev: string;
  _updatedAt: string;
}

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "info";
  name: string;
  role: string;
  email: string;
  address: string;
  about: string;
  blogsUrl: string;
  specialBtnText: string;
  specialBtnUrl: string;
  specialBtnInNewTab: boolean;
  heroTyper: string[];
  heroImage: SanityImage;
  aboutImage: SanityImage;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  title: string;
  image: SanityImage;
  progress: number;
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: SanityImage;
  summary: string;
  technologies: Skill[];
  githubLink: string;
  liveLink: string;
}

export interface Qualification extends SanityBody {
  _type: "social";
  title: string;
  image: SanityImage;
}
