import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Award {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ length: 100 })
  name: string;
}
