import { Injectable, Logger, NotFoundException, OnModuleInit } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaClient } from '@prisma/client';
import { PaginationDto } from 'src/common';

@Injectable()
export class ClientService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger('ClientService');
  onModuleInit() {
    this.$connect();
    this.logger.log('Database connected');
  }
  create(createClientDto: CreateClientDto) {

    return this.client.create({ data: createClientDto });
  }

  async findAll(paginationDto: PaginationDto) {

    const { page, limit } = paginationDto;

    const totalPages = await this.client.count({
      where: {
        available: true
      }
    });
    const lastPage = Math.ceil(totalPages / limit);

    return {
      data: await this.client.findMany({
        skip: (page - 1) * limit,
        take: limit,
        where: {
          available: true
        }
      }),
      meta: {
        total: totalPages,
        page: page,
        lastPage: lastPage
      }
    }
  }

  async findOne(id: string) {
    const client = await this.client.findFirst({ 
      where: { id, available: true } });

    if (!client) {
      throw new NotFoundException(`Client with id #${id} not found`);
    }
    return client;
  }

  async updateClient(id: string, updateClientDto: UpdateClientDto) {

    await this.findOne(id);

    return this.client.update({
      where: { id },
      data: updateClientDto
    })
  }

  async remove(id: string) {

    await this.findOne(id);

    // return this.client.delete({
    //   where: { id }
    // })

    const deleteCLient = await this.client.update({
      where: { id },
      data: {
        available: false
      }
    });
    return deleteCLient;
  }
}
