import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, BeforeInsert } from 'typeorm';
import { AutoTimestamp } from './auto-time-stamp';
import { uuidv7 } from '@kripod/uuidv7';
import { Movie } from './movie.entity';


@Entity()
export class Festival  {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  title: string;

  @Column({ type: 'date', nullable: false })
  date: Date;

  @Column({ type: 'varchar', unique: true })
  uuid: string;

  @ManyToMany(() => Movie, (movie) => movie.festivals)
  movies: Movie[];

  @BeforeInsert()
  generateUUID() {
    this.uuid = uuidv7();
  }
}
