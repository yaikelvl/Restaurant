import { Column } from 'typeorm';

export class CommonEntity {
  @Column({ type: 'boolean', default: false })
  softDelete?: boolean;

  @Column({ type: 'date' })
  createAt: Date;
}
