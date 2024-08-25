import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { FootballTeamsDTO } from '../dto/FootballTeamsDTO';
import { FootballTeamService } from 'src/services/FootballTeamService';


@Controller('team')
export class FootballTeamController {

  constructor(
    private footballTeamService: FootballTeamService,
  ){}

  @Post('new-team')
  async postNewTeam( @Body() body : FootballTeamsDTO ) {
    return await this.footballTeamService.createTeam(body)
}
  @Delete('delete-team')
  async deleteTeam(@Body() body: FootballTeamsDTO){
   return await this.footballTeamService.deleteTeam(body)
  }

  @Get('list-teams')
  async findTeams(@Body() body: FootballTeamsDTO) {   
      return await this.footballTeamService.findTeams(body);
    }


  @Put('update-team')
  async updateTeam(@Body() body : FootballTeamsDTO){
    return await this.footballTeamService.updateTeam(body)
  }
}