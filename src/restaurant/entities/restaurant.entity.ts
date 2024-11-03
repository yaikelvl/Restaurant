import { CommonEntity } from 'src/common/entities/common.entity';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('restaurants')
export class Restaurant extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 150 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  address: string;

  @Column({ type: 'int' })
  capacity: number;
}
