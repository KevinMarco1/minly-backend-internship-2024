import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, BeforeInsert, OneToMany } from 'typeorm';
import { Gender } from './gender.enum';
import { AutoTimestamp } from './auto-time-stamp';
import { uuidv7 } from '@kripod/uuidv7';
import { Movie } from './movie.entity';
import { MovieActor } from './movie-actor.entity';
import { MovieActorAward } from './movie-actor-award.entity';


@Entity()
export class Actor extends AutoTimestamp {
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

  @Column({ type: 'float', default: 0 })
  average_rating: number;

  @BeforeInsert()
  generateUUID() {
    this.uuid = uuidv7();
  }

  @OneToMany(() => MovieActor, (movieActor) => movieActor.actor)
  movieActors: MovieActor[];


  @OneToMany(() => MovieActorAward, (movieActorAward) => movieActorAward.actor)
  movieActorAwards: MovieActorAward[]; 

  
}
