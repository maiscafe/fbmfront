"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("./database/prisma.service");
const FootballPlayersService_1 = require("./services/FootballPlayersService");
const FootballPlayersRepository_1 = require("./repositories/FootballPlayersRepository");
const FootballTeamsRepository_1 = require("./repositories/FootballTeamsRepository");
const FootballTeamService_1 = require("./services/FootballTeamService");
const FootballTeamController_1 = require("./controller/FootballTeamController");
const FootballPlayersController_1 = require("./controller/FootballPlayersController");
const UtilController_1 = require("./controller/UtilController");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [FootballPlayersController_1.footballPlayersController, FootballTeamController_1.FootballTeamController, UtilController_1.UtilController],
        providers: [prisma_service_1.PrismaService, FootballPlayersService_1.FootballPlayersService, FootballPlayersRepository_1.FootballPlayersRepository, FootballTeamService_1.FootballTeamService, FootballTeamsRepository_1.FootballTeamsRepository],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map