import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { PlayerDTO } from '../dto/PlayerDTO';


@Injectable()
export class FootballPlayersRepository {

  constructor(private prisma: PrismaService) {}

  async createPlayer(data: PlayerDTO) {
    return this.prisma.footballPlayers.create({
      data: {
        name: data.name,
        age: data.age,
        team_id: data.team_id,
        created_at: new Date(),
      },
    });
  }

    // REGION FIND PLAYER
    async findPlayer(body: PlayerDTO) {
    // If `id`, `name` and `team_id` are not provided, return all players.
    if (!body.id && !body.name && !body.team_id) {
        return this.prisma.footballPlayers.findMany({
          include:{
            team: true
          }
        });
    }

    // Listing by `team_id`
    if (body.team_id) {
        return this.prisma.footballPlayers.findMany({
        where: {
            team_id: body.team_id,
        },
        });
    }

    // Search by name or id
    if (body.name || body.id) {
        return this.prisma.footballPlayers.findMany({
        where: {
            OR: [
            { id: body.id },
            { name: { contains: body.name} },
            ],
        },
        });
    }
    }
    //END REGION FIND PLAYER


// Region UPDATE PLAYER
  async updatePlayer(body : PlayerDTO){
    return await this.prisma.footballPlayers.update({
      where:{ id: body.id},
      data: { name: body.name,
              age: body.age,
              team_id: body.team_id
            }
  });
  }
//END REGION UPDATE PLAYER


//REGION DELETE PLAYER
  async deletePlayer( body: PlayerDTO){
    await this.prisma.footballPlayers.delete({
      where: {
          id: body.id
      }
    })
  }
//END REGION DELETE PLAYER


}

