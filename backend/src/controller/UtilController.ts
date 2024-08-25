import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';


@Controller('util')
export class UtilController {


  constructor(private prisma: PrismaService) {}

  @Get('info')
  getInfoApp(){

    return {description: 'Aplicação back-end criada para teste em LUPIT',
            version: '1.0.0',
            serverDateTime: new Date()
           }
    }

}