import { PrismaService } from '../database/prisma.service';
import { FootballTeamsDTO } from '../dto/FootballTeamsDTO';
export declare class AppController {
    private prisma;
    constructor(prisma: PrismaService);
    getInfoApp(): {
        description: string;
        version: string;
        serverDateTime: Date;
    };
    postNewTeam(body: FootballTeamsDTO): Promise<{
        team: {
            id: number;
            name: string;
            created_at: Date;
            updated_at: Date;
        };
    }>;
    deleteTeam(body: FootballTeamsDTO): Promise<void>;
    getTeams(body: FootballTeamsDTO): Promise<{
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
