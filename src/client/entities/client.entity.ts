import { CommonEntity } from 'src/common/entities/common.entity';
import { Order } from 'src/order/entities/order.entity';
import { Restaurant } from 'src/restaurant/entities/restaurant.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';

@Entity()
export class Client extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column()
  age: number;

  @ManyToMany(() => Restaurant, (restaurant) => restaurant.clients)
  @JoinTable()
  restaurants: Restaurant[];

  @OneToMany(() => Order, (order) => order.client)
  orders: Order[];
}
