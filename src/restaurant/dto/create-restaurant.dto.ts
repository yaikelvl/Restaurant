import { IsNumber, IsPositive, IsString } from 'class-validator';
import { AppModule } from '../../app.module';
export class CreateRestaurantDto {

    @IsString()
    name: string;

    @IsString()
    Address: string;

    @IsNumber()
    @IsPositive()
    Capasity: number;

}
