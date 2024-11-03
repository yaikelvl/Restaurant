import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive, IsString } from 'class-validator';
import { CommonDto } from 'src/common/dto/common.dto';
import { IsUniqueRestaurantName } from '../decorator/restaurant-name.validator';
export class CreateRestaurantDto extends CommonDto {
  @ApiProperty()
  @IsString()
  @IsUniqueRestaurantName({ message: 'The restaurant name already exists.' })
  name: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  capacity: number;
}
