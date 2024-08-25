import { PrismaService } from 'src/database/prisma.service';
export declare class UtilController {
    private prisma;
    constructor(prisma: PrismaService);
    getInfoApp(): {
        description: string;
        version: string;
        serverDateTime: Date;
    };
}
