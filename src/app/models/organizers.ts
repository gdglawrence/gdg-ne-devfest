import { Speaker } from './speaker';

export interface Organizers {
    id: number;
    communityName: string;
    team: Speaker[];
}
