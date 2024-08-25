import { FootballTeamsDTO } from '../dto/FootballTeamsDTO';
import { FootballTeamService } from 'src/services/FootballTeamService';
export declare class FootballTeamController {
    private footballTeamService;
    constructor(footballTeamService: FootballTeamService);
    postNewTeam(body: FootballTeamsDTO): Promise<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }>;
    deleteTeam(body: FootballTeamsDTO): Promise<void>;
    findTeams(body: FootballTeamsDTO): Promise<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    } | {
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }[]>;
    updateTeam(body: FootballTeamsDTO): Promise<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
