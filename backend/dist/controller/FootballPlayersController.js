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
exports.footballPlayersController = void 0;
const common_1 = require("@nestjs/common");
const PlayerDTO_1 = require("../dto/PlayerDTO");
const FootballPlayersService_1 = require("../services/FootballPlayersService");
let footballPlayersController = class footballPlayersController {
    constructor(footballPlayersService) {
        this.footballPlayersService = footballPlayersService;
    }
    async postNewTeam(body) {
        return await this.footballPlayersService.createPlayer(body);
    }
    async deleteTeam(body) {
        return await this.footballPlayersService.deletePlayer(body);
    }
    async findTeams(body) {
        return await this.footballPlayersService.findPlayer(body);
    }
    async updateTeam(body) {
        return await this.footballPlayersService.updatePlayer(body);
    }
};
exports.footballPlayersController = footballPlayersController;
__decorate([
    (0, common_1.Post)('new-player'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PlayerDTO_1.PlayerDTO]),
    __metadata("design:returntype", Promise)
], footballPlayersController.prototype, "postNewTeam", null);
__decorate([
    (0, common_1.Delete)('delete-player'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PlayerDTO_1.PlayerDTO]),
    __metadata("design:returntype", Promise)
], footballPlayersController.prototype, "deleteTeam", null);
__decorate([
    (0, common_1.Post)('list-players'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PlayerDTO_1.PlayerDTO]),
    __metadata("design:returntype", Promise)
], footballPlayersController.prototype, "findTeams", null);
__decorate([
    (0, common_1.Put)('update-player'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PlayerDTO_1.PlayerDTO]),
    __metadata("design:returntype", Promise)
], footballPlayersController.prototype, "updateTeam", null);
exports.footballPlayersController = footballPlayersController = __decorate([
    (0, common_1.Controller)('player'),
    __metadata("design:paramtypes", [FootballPlayersService_1.FootballPlayersService])
], footballPlayersController);
//# sourceMappingURL=FootballPlayersController.js.map