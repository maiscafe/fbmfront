import { FootballTeamsDTO } from 'src/dto/FootballTeamsDTO';
import { FootballTeamsRepository } from 'src/repositories/FootballTeamsRepository';
export declare class FootballTeamService {
    private footballTeamsRepository;
    constructor(footballTeamsRepository: FootballTeamsRepository);
    createTeam(body: FootballTeamsDTO): Promise<{
        id: number;
        name: string;
        created_at: Date;
        updated_at: Date;
    }>;
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
    deleteTeam(body: FootballTeamsDTO): Promise<void>;
}
