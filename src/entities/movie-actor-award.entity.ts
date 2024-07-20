import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm';
import { Movie } from './movie.entity';
import { Actor } from './actor.entity';
import { Award } from './award.entity';

@Entity('movie_actor_award')
export class MovieActorAward {
  @PrimaryColumn({ type: 'bigint' })
  movie_id: number;

  @PrimaryColumn({ type: 'bigint' })
  actor_id: number;

  @PrimaryColumn({ type: 'bigint' })
  award_id: number;

  @ManyToOne(() => Movie, (movie) => movie.movieActorAwards)
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @ManyToOne(() => Actor, (actor) => actor.movieActorAwards)
  @JoinColumn({ name: 'actor_id' })
  actor: Actor;

  @ManyToOne(() => Award, (award) => award.movieActorAwards)
  @JoinColumn({ name: 'award_id' })
  award: Award;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'int', nullable: false })
  year: number;
}
