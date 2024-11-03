import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty()
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  clientId: string;

  @ApiProperty()
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  restaurantId: string;
}
