import { PortableTextBlock } from "sanity";

export type InfoType = {
  _id: string,
  fullName: string,
  headline: string,
  profileImage: {
    alt: string,
    image: string
  },
  shortBio: string,
  email: string,
  fullBio: PortableTextBlock[],
  location: string,
  socialLinks: string[],
  skills: string[],
}

export type PostType = {
  _id: string;
  name: string;
  slug: string;
  tagline: string;
  postUrl: string;
  logo: string;
  coverImage: {
    alt: string | null;
    image: string;
  };
  description: PortableTextBlock[];
};