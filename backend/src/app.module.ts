import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { FootballPlayersService } from './services/FootballPlayersService';
import { FootballPlayersRepository } from './repositories/FootballPlayersRepository';
import { FootballTeamsRepository } from './repositories/FootballTeamsRepository';
import { FootballTeamService } from './services/FootballTeamService';
import { FootballTeamController } from './controller/FootballTeamController';
import { footballPlayersController } from './controller/FootballPlayersController';
import { UtilController } from './controller/UtilController';

@Module({
  imports: [],
  controllers: [footballPlayersController, FootballTeamController, UtilController],
  providers: [PrismaService, FootballPlayersService, FootballPlayersRepository, FootballTeamService, FootballTeamsRepository],
})

export class AppModule {}