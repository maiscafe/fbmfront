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
exports.FootballTeamService = void 0;
const common_1 = require("@nestjs/common");
const FootballTeamsRepository_1 = require("../repositories/FootballTeamsRepository");
let FootballTeamService = class FootballTeamService {
    constructor(footballTeamsRepository) {
        this.footballTeamsRepository = footballTeamsRepository;
    }
    async createTeam(body) {
        if (!body.name) {
            throw new common_1.BadRequestException('Nome é obrigatório e deve ser válido.');
        }
        return this.footballTeamsRepository.createTeam(body);
    }
    async findTeams(body) {
        return this.footballTeamsRepository.findTeams(body);
    }
    async updateTeam(body) {
        if (!Number.isInteger(body.id) || body.id <= 0) {
            throw new common_1.BadRequestException('Insira um id');
        }
        return this.footballTeamsRepository.updateTeam(body);
    }
    async deleteTeam(body) {
        if (!Number.isInteger(body.id) || body.id <= 0) {
            throw new common_1.BadRequestException('Insira um id');
        }
        return this.footballTeamsRepository.deleteTeam(body);
    }
};
exports.FootballTeamService = FootballTeamService;
exports.FootballTeamService = FootballTeamService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [FootballTeamsRepository_1.FootballTeamsRepository])
], FootballTeamService);
//# sourceMappingURL=FootballTeamService.js.map