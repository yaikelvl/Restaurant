import { IsNumber, IsPositive, IsString } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateRestaurantDto {

    @IsString()
    name: string;

    @IsString()
    address: string;

    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    capacity: number;

}
