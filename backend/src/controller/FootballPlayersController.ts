import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PlayerDTO } from 'src/dto/PlayerDTO';
import { FootballPlayersService } from 'src/services/FootballPlayersService';



@Controller('player')
export class footballPlayersController {

  constructor(
    private footballPlayersService: FootballPlayersService,
  ){}

  @Post('new-player')
  async postNewTeam( @Body() body : PlayerDTO ) {
    return await this.footballPlayersService.createPlayer(body)
}
  @Delete('delete-player')
  async deleteTeam(@Body() body: PlayerDTO){
   return await this.footballPlayersService.deletePlayer(body)
  }

  @Post('list-players')
  async findTeams(@Body() body: PlayerDTO) {   
      return await this.footballPlayersService.findPlayer(body);
    }


  @Put('update-player')
  async updateTeam(@Body() body : PlayerDTO){
    return await this.footballPlayersService.updatePlayer(body)
  }
}