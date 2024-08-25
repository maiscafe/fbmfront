import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { FootballTeamsDTO } from 'src/dto/FootballTeamsDTO';


@Injectable()
export class FootballTeamsRepository {
  constructor(private prisma: PrismaService) {}

  // REGION CREATE TEAM
  async createTeam( body : FootballTeamsDTO ) {
    return await this.prisma.footballTeams.create({
      data: {
        name: body.name,
        created_at: new Date()
      }
    })
  }
  // END REGION CREATE TEAM

    // REGION FIND TEAM
    async findTeams(body: FootballTeamsDTO) {   
      // If `id`, `name` and `team_id` are not provided, return all team's.
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
  //END REGION FIND TEAM


// Region UPDATE TEAM
    async updateTeam( body : FootballTeamsDTO){
      return await this.prisma.footballTeams.update({
        where:{ id: body.id},
        data: { name: body.name}
      });
    }
//END REGION UPDATE TEAM


//REGION DELETE TEAM
    async deleteTeam( body: FootballTeamsDTO){
      await this.prisma.footballTeams.delete({
        where: {
            id: body.id
        }
      })
    }
//END REGION DELETE TEAM


}

