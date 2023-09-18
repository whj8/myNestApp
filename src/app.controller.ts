import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Zstack } from '@/types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('formatStorageNumberToObj')
  async create(@Body() data: Zstack.Input): Promise<Zstack.IStorage> {
    return this.appService.getStorageNumberToObj(data);
  }
}
