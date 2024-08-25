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
exports.FootballTeamController = void 0;
const common_1 = require("@nestjs/common");
const FootballTeamsDTO_1 = require("../dto/FootballTeamsDTO");
const FootballTeamService_1 = require("../services/FootballTeamService");
let FootballTeamController = class FootballTeamController {
    constructor(footballTeamService) {
        this.footballTeamService = footballTeamService;
    }
    async postNewTeam(body) {
        return await this.footballTeamService.createTeam(body);
    }
    async deleteTeam(body) {
        return await this.footballTeamService.deleteTeam(body);
    }
    async findTeams(body) {
        return await this.footballTeamService.findTeams(body);
    }
    async updateTeam(body) {
        return await this.footballTeamService.updateTeam(body);
    }
};
exports.FootballTeamController = FootballTeamController;
__decorate([
    (0, common_1.Post)('new-team'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FootballTeamsDTO_1.FootballTeamsDTO]),
    __metadata("design:returntype", Promise)
], FootballTeamController.prototype, "postNewTeam", null);
__decorate([
    (0, common_1.Delete)('delete-team'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FootballTeamsDTO_1.FootballTeamsDTO]),
    __metadata("design:returntype", Promise)
], FootballTeamController.prototype, "deleteTeam", null);
__decorate([
    (0, common_1.Get)('list-teams'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FootballTeamsDTO_1.FootballTeamsDTO]),
    __metadata("design:returntype", Promise)
], FootballTeamController.prototype, "findTeams", null);
__decorate([
    (0, common_1.Put)('update-team'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FootballTeamsDTO_1.FootballTeamsDTO]),
    __metadata("design:returntype", Promise)
], FootballTeamController.prototype, "updateTeam", null);
exports.FootballTeamController = FootballTeamController = __decorate([
    (0, common_1.Controller)('team'),
    __metadata("design:paramtypes", [FootballTeamService_1.FootballTeamService])
], FootballTeamController);
//# sourceMappingURL=FootballTeamController.js.map