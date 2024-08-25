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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../database/prisma.service");
const FootballTeamsDTO_1 = require("../dto/FootballTeamsDTO");
let AppController = class AppController {
    constructor(prisma) {
        this.prisma = prisma;
    }
    getInfoApp() {
        return { description: 'Aplicação back-end criada para teste em LUPIT',
            version: '1.0.0',
            serverDateTime: new Date()
        };
    }
    async postNewTeam(body) {
        console.log(body);
        const team = await this.prisma.footballTeams.create({
            data: {
                name: body.name,
                created_at: new Date()
            }
        });
        return {
            team
        };
    }
    async deleteTeam(body) {
        await this.prisma.footballTeams.delete({
            where: {
                id: body.id
            }
        });
    }
    async getTeams(body) {
        if (!body.id && !body.name) {
            return this.prisma.footballTeams.findMany();
        }
        else {
            return this.prisma.footballTeams.findFirstOrThrow({
                where: {
                    OR: [
                        { id: body.id },
                        { name: body.name },
                    ],
                },
            });
        }
    }
    async updateTeam(body) {
        return await this.prisma.footballTeams.update({
            where: { id: body.id },
            data: { name: body.name }
        });
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('info'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getInfoApp", null);
__decorate([
    (0, common_1.Post)('new-team'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FootballTeamsDTO_1.FootballTeamsDTO]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "postNewTeam", null);
__decorate([
    (0, common_1.Delete)('delete-team'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FootballTeamsDTO_1.FootballTeamsDTO]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteTeam", null);
__decorate([
    (0, common_1.Get)('list-teams'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FootballTeamsDTO_1.FootballTeamsDTO]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTeams", null);
__decorate([
    (0, common_1.Put)('update-team'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FootballTeamsDTO_1.FootballTeamsDTO]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateTeam", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)('v1'),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AppController);
//# sourceMappingURL=app.controller%20copy.js.map