"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FootballPlayersRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
let FootballPlayersRepository = class FootballPlayersRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createPlayer(data) {
        return this.prisma.footballPlayers.create({
            data: {
                name: data.name,
                age: data.age,
                team_id: data.team_id,
                created_at: new Date(),
            },
        });
    }
    async findPlayer(body) {
        if (!body.id && !body.name && !body.team_id) {
            return this.prisma.footballPlayers.findMany({
                include: {
                    team: true
                }
            });
        }
        if (body.team_id) {
            return this.prisma.footballPlayers.findMany({
                where: {
                    team_id: body.team_id,
                },
            });
        }
        if (body.name || body.id) {
            return this.prisma.footballPlayers.findMany({
                where: {
                    OR: [
                        { id: body.id },
                        { name: { contains: body.name } },
                    ],
                },
            });
        }
    }
    async updatePlayer(body) {
        return await this.prisma.footballPlayers.update({
            where: { id: body.id },
            data: { name: body.name,
                age: body.age,
                team_id: body.team_id
            }
        });
    }
    async deletePlayer(body) {
        await this.prisma.footballPlayers.delete({
            where: {
                id: body.id
            }
        });
    }
};
exports.FootballPlayersRepository = FootballPlayersRepository;
exports.FootballPlayersRepository = FootballPlayersRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], FootballPlayersRepository);
//# sourceMappingURL=FootballPlayersRepository.js.map