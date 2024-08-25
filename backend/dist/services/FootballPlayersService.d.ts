import { PlayerDTO } from '../dto/PlayerDTO';
import { FootballPlayersRepository } from '../repositories/FootballPlayersRepository';
export declare class FootballPlayersService {
    private footballPlayersRepository;
    constructor(footballPlayersRepository: FootballPlayersRepository);
    createPlayer(body: PlayerDTO): Promise<{
        id: number;
        name: string;
        age: number;
        team_id: number;
        created_at: Date;
        updated_at: Date;
    }>;
    findPlayer(body: PlayerDTO): Promise<{
        id: number;
        name: string;
        age: number;
        team_id: number;
        created_at: Date;
        updated_at: Date;
    }[]>;
    updatePlayer(body: PlayerDTO): Promise<{
        id: number;
        name: string;
        age: number;
        team_id: number;
        created_at: Date;
        updated_at: Date;
    }>;
    deletePlayer(body: PlayerDTO): Promise<void>;
}
