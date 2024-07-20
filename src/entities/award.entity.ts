import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { MovieActorAward } from './movie-actor-award.entity';

@Entity()
export class Award {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ length: 100 })
  name: string;

  @OneToMany(() => MovieActorAward, (movieActorAward) => movieActorAward.award)
  movieActorAwards: MovieActorAward[]; 
}
