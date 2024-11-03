import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { RestaurantService } from '../restaurant.service';

@ValidatorConstraint({ async: true })
export class IsUniqueRestaurantNameConstraint
  implements ValidatorConstraintInterface
{
  constructor(private restaurantService: RestaurantService) {}

  async validate(name: string) {
    const normalizedName = this.normalizeName(name);
    const existingRestaurant =
      await this.restaurantService.findByName(normalizedName);
    return !existingRestaurant;
  }

  private normalizeName(name: string): string {
    return name
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, '');
  }
}

export function IsUniqueRestaurantName(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUniqueRestaurantNameConstraint,
    });
  };
}
