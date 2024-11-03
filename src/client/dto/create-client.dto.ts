import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNumber,
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateClientDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  @MinLength(11) // Exsample: +5354381008
  phone: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @Min(18, { message: 'You must be at least 18 years old' })
  @Type(() => Number)
  age: number;
}
