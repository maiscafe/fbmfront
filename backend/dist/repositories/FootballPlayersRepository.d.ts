import { PrismaService } from '../database/prisma.service';
import { PlayerDTO } from '../dto/PlayerDTO';
export declare class FootballPlayersRepository {
    private prisma;
    constructor(prisma: PrismaService);
    createPlayer(data: PlayerDTO): Promise<{
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
