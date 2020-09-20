import { WebLink } from "./webLink";

export interface Speaker {
    id: number;
    name : string;
    title: string;
    bio: string;
    skills: string;
    tech: string;
    img: string;
    socialMedia: WebLink[]
}