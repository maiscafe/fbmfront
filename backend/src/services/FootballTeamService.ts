import { Injectable, BadRequestException } from '@nestjs/common';
import { FootballTeamsDTO } from 'src/dto/FootballTeamsDTO';
import { FootballTeamsRepository } from 'src/repositories/FootballTeamsRepository';

@Injectable()
export class FootballTeamService {

  constructor( private footballTeamsRepository: FootballTeamsRepository ) {}

  async createTeam(body: FootballTeamsDTO) {
    if (!body.name) {
      throw new BadRequestException('Nome é obrigatório e deve ser válido.');
    }
    return this.footballTeamsRepository.createTeam(body);
  }


  async findTeams(body: FootballTeamsDTO) {
    return this.footballTeamsRepository.findTeams(body);
  }


  async updateTeam(body : FootballTeamsDTO){
    if (!Number.isInteger(body.id) || body.id <= 0) {
      throw new BadRequestException('Insira um id');
    }
    return this.footballTeamsRepository.updateTeam(body);
  }


  async deleteTeam(body: FootballTeamsDTO){
    if (!Number.isInteger(body.id) || body.id <= 0) {
      throw new BadRequestException('Insira um id');
    }
    return this.footballTeamsRepository.deleteTeam(body);
  }


}
