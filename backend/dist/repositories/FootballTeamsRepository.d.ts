import { PrismaService } from '../database/prisma.service';
import { FootballTeamsDTO } from 'src/dto/FootballTeamsDTO';
export declare class FootballTeamsRepository {
    private prisma;
    constructor(prisma: PrismaService);
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
