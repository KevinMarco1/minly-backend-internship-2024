import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, BeforeInsert } from 'typeorm';
import { Gender } from './gender.enum';
import { AutoTimestamp } from './auto-time-stamp';
import { uuidv7 } from '@kripod/uuidv7';
import { Movie } from './movie.entity';


@Entity()
export class Writer extends AutoTimestamp {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  first_name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  last_name: string;

  @Column({ type: 'date', nullable: false })
  birth_date: Date;

  @Column({ type: 'enum', enum: Gender, nullable: false })
  gender: Gender;

  @Column({ type: 'varchar', length: 1000, nullable: true })
  bio: string;

  @Column({ type: 'bigint', nullable: true })
  number_of_awards: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  nationality: string;

  @Column({ type: 'varchar', unique: true })
  uuid: string;

  @Column({ type: 'varchar', length: 1000, nullable: true })
  picture: string;


  @ManyToMany(() => Movie, (movie) => movie.writers)
  movies: Movie[];

  @BeforeInsert()
  generateUUID() {
    this.uuid = uuidv7();
  }

  
}
