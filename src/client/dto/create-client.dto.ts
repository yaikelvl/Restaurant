import { Type } from "class-transformer";
import { IsEmail, IsNumber, IsPositive, IsString, IsUUID, Min, MinLength } from "class-validator";


export class CreateClientDto {

    @IsString()
    name: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(11) // Exsample: +5354381008
    phone: string;

    @IsNumber()
    @IsPositive()
    @Min(18, { message: 'You must be at least 18 years old' })
    @Type(() => Number)
    age: number;

    @IsString()
    @IsUUID()
    restaurantId: string;
}
