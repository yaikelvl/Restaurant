import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { restaurantProviders } from './restaurant.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [...restaurantProviders, RestaurantService],
  controllers: [RestaurantController],
  exports: [...restaurantProviders],
})
export class RestaurantModule {}
