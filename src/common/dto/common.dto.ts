import { Type } from 'class-transformer';

export class CommonDto {
  @Type(() => Boolean)
  softDelete?: boolean;

  @Type(() => Date)
  createAt?: Date;
}
