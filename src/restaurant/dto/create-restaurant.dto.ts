import { IsNumber, IsPositive, IsString } from 'class-validator';
import { CommonDto } from 'src/common/dto/common.dto';
export class CreateRestaurantDto extends CommonDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsNumber()
  @IsPositive()
  capacity: number;
}
