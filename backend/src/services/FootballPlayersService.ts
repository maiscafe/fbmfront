import { Injectable, BadRequestException } from '@nestjs/common';
import { PlayerDTO } from '../dto/PlayerDTO';
import { FootballPlayersRepository } from '../repositories/FootballPlayersRepository';


@Injectable()
export class FootballPlayersService {

  constructor(private footballPlayersRepository: FootballPlayersRepository) {}

  async createPlayer(body: PlayerDTO) {
    if (!body.name) {
      throw new BadRequestException('Nome é obrigatório e deve ser válido.');
    }
    if (!Number.isInteger(body.age) || body.age <= 0) {
      throw new BadRequestException('A idade é obrigatória, deve ser um número inteiro e válida');
    }
    if (!Number.isInteger(body.team_id) || body.team_id <= 0) {
      throw new BadRequestException('Informe um time_id válido');
    }
    return this.footballPlayersRepository.createPlayer(body);
  }


  async findPlayer(body: PlayerDTO) {
    return this.footballPlayersRepository.findPlayer(body);
  }


  async updatePlayer(body : PlayerDTO){
    if (!Number.isInteger(body.id) || body.id <= 0) {
      throw new BadRequestException('Informe um id válido');
    }
    return this.footballPlayersRepository.updatePlayer(body);
  }


  async deletePlayer(body: PlayerDTO){
    if (!Number.isInteger(body.id) || body.id <= 0) {
      throw new BadRequestException('Informe um id válido');
    }
    return this.footballPlayersRepository.deletePlayer(body);
  }


}
