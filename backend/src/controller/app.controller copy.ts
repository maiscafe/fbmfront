import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { FootballTeamsDTO } from '../dto/FootballTeamsDTO';


@Controller('v1')
export class AppController {

  constructor(
    private prisma: PrismaService,
  ){}

  @Get('info')
    getInfoApp(){

      return {description: 'Aplicação back-end criada para teste em LUPIT',
              version: '1.0.0',
              serverDateTime: new Date()
             }
    }

  @Post('new-team')
  async postNewTeam( @Body() body : FootballTeamsDTO ) {

      console.log(body)
    const team = await this.prisma.footballTeams.create({
      data: {
        name: body.name,
        created_at: new Date()
      }
    })
    return {
      team
    };
  }

  @Delete('delete-team')
  async deleteTeam(@Body() body: FootballTeamsDTO){
    await this.prisma.footballTeams.delete({
      where: {
          id: body.id
      }
    })
  }


  @Get('list-teams')
  async getTeams(@Body() body: FootballTeamsDTO) {
    
    // Se o [id] e [name] não forem fornecidos, todos os registros serão retornados.
    if (!body.id && !body.name) {
      return this.prisma.footballTeams.findMany();
    } 
    else {
      return this.prisma.footballTeams.findFirstOrThrow({
        where: {
          OR: [
            { id: body.id },
            { name: body.name },
          ],
        },
      });
    }
  }

  @Put('update-team')
  async updateTeam(@Body() body : FootballTeamsDTO){
    return await this.prisma.footballTeams.update({
      where:{ id: body.id},
      data: { name: body.name}
  });
  }
}