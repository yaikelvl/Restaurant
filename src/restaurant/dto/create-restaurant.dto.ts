import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';
import { CommonDto } from 'src/common/dto/common.dto';
export class CreateRestaurantDto extends CommonDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  capacity: number;
}
