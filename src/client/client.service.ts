import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PaginationDto } from 'src/common';
import { Repository } from 'typeorm';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @Inject('CLIENT_REPOSITORY')
    private clientRepository: Repository<Client>,
  ) {}

  create(createClientDto: CreateClientDto) {
    return this.clientRepository.create(createClientDto);
  }

  async findAll(paginationDto: PaginationDto, softDelete: boolean) {
    const { page, limit } = paginationDto;

    const totalPages = await this.clientRepository.count({
      where: {
        softDelete,
      },
    });
    const lastPage = Math.ceil(totalPages / limit);

    return {
      data: await this.clientRepository.find({
        skip: (page - 1) * limit,
        take: limit,
        where: {
          softDelete: true,
        },
      }),
      meta: {
        total: totalPages,
        page: page,
        lastPage: lastPage,
      },
    };
  }

  async findOne(id: string) {
    const client = await this.clientRepository.findOne({
      where: { id, softDelete: true },
    });

    if (!client) {
      throw new NotFoundException(`Client with id #${id} not found`);
    }
    return client;
  }

  async updateClient(
    id: string,
    updateClientDto: UpdateClientDto,
  ): Promise<void> {
    const result = await this.clientRepository.update(id, updateClientDto);

    if (result.affected === 0) {
      throw new NotFoundException(`Client with ID ${id} not found`);
    }
  }

  async remove(id: string) {
    await this.findOne(id);

    const deleteCLient = await this.clientRepository.update(id, {
      softDelete: true,
    });
    return deleteCLient;
  }
}
