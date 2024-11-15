import { OrderStatus } from "@prisma/client";
import { IsEnum, IsOptional, IsString, IsUUID } from "class-validator";

export class CreateOrderDto {

    @IsString()
    description: string;

    @IsEnum(OrderStatus, {
        message: `Possible status values are ${OrderStatus}`
    })
    @IsOptional()
    ordeStatus: OrderStatus = OrderStatus.PENDING

    @IsString()
    @IsUUID()
    restaurantId: string

    @IsString()
    @IsUUID()
    clientId: string

}
