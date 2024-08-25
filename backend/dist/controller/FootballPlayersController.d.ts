import { PlayerDTO } from 'src/dto/PlayerDTO';
import { FootballPlayersService } from 'src/services/FootballPlayersService';
export declare class footballPlayersController {
    private footballPlayersService;
    constructor(footballPlayersService: FootballPlayersService);
    postNewTeam(body: PlayerDTO): Promise<{
        id: number;
        name: string;
        age: number;
        team_id: number;
        created_at: Date;
        updated_at: Date;
    }>;
    deleteTeam(body: PlayerDTO): Promise<void>;
    findTeams(body: PlayerDTO): Promise<{
        id: number;
        name: string;
        age: number;
        team_id: number;
        created_at: Date;
        updated_at: Date;
    }[]>;
    updateTeam(body: PlayerDTO): Promise<{
        id: number;
        name: string;
        age: number;
        team_id: number;
        created_at: Date;
        updated_at: Date;
    }>;
}
