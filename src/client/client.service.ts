import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ClientService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('ClientService');
  onModuleInit() {
    this.$connect();
    this.logger.log('Database connected');
  }
  create(createClientDto: CreateClientDto) {
    return createClientDto;
  }

  findAll() {
    return `This action returns all client`;
  }

  findOne(id: number) {
    return `This action returns a #${id} client`;
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }
}
