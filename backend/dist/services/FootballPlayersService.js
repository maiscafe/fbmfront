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
exports.FootballPlayersService = void 0;
const common_1 = require("@nestjs/common");
const FootballPlayersRepository_1 = require("../repositories/FootballPlayersRepository");
let FootballPlayersService = class FootballPlayersService {
    constructor(footballPlayersRepository) {
        this.footballPlayersRepository = footballPlayersRepository;
    }
    async createPlayer(body) {
        if (!body.name) {
            throw new common_1.BadRequestException('Nome é obrigatório e deve ser válido.');
        }
        if (!Number.isInteger(body.age) || body.age <= 0) {
            throw new common_1.BadRequestException('A idade é obrigatória, deve ser um número inteiro e válida');
        }
        if (!Number.isInteger(body.team_id) || body.team_id <= 0) {
            throw new common_1.BadRequestException('Informe um time_id válido');
        }
        return this.footballPlayersRepository.createPlayer(body);
    }
    async findPlayer(body) {
        return this.footballPlayersRepository.findPlayer(body);
    }
    async updatePlayer(body) {
        if (!Number.isInteger(body.id) || body.id <= 0) {
            throw new common_1.BadRequestException('Informe um id válido');
        }
        return this.footballPlayersRepository.updatePlayer(body);
    }
    async deletePlayer(body) {
        if (!Number.isInteger(body.id) || body.id <= 0) {
            throw new common_1.BadRequestException('Informe um id válido');
        }
        return this.footballPlayersRepository.deletePlayer(body);
    }
};
exports.FootballPlayersService = FootballPlayersService;
exports.FootballPlayersService = FootballPlayersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [FootballPlayersRepository_1.FootballPlayersRepository])
], FootballPlayersService);
//# sourceMappingURL=FootballPlayersService.js.map