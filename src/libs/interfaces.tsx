import { IGatsbyImageData } from "gatsby-plugin-image";

export interface IProduct {
  name: string;
  description: string;
  id: number;
  html: string;
  slug: string;
  features?: string;
  logo_light: ILogo;
  logo_dark: ILogo;
  on_homepage: string;
}

export interface ILogo {
  extension: string;
  name: string;
  relativePath: string;
  childrenImageSharp: IGatsbyImageData[];
}

export interface IJobOffer {
  company: string;
  name: string;
  location: string;
  type: string;
  salary: string | null;
  salary_period: string | null;
  id: number;
  html: string;
  date: string;
  slug: string;
  logo_light: ILogo;
  logo_dark: ILogo;
}

export interface ICommitteeMember {
  id: string;
  slug: string;
  lang: string;
  first_name: string;
  last_name: string;
  avatar: string;
  description: string;
  image: IGatsbyImageData;
}

export interface IContactDetails {
  phone: string;
  email: string;
}

export interface IFeature {
  title: string;
  text: string;
  logo: string;
}

export interface ITestimonial {
  name: string;
  avatar: string;
  position: string;
  text: string;
  image: IGatsbyImageData;
}

export interface ITweet {
  id: string;
  title: string;
  content: string;
  link: string;
  author: string;
  updated: string;
  date: string;
}

export interface IEmployee {
  id: string;
  slug: string;
  lang: string;
  first_name: string;
  last_name: string;
  position?: string;
  avatar?: string;
  linkedIn?: string;
  email?: string;
  description: string;
  image: IGatsbyImageData;
}
