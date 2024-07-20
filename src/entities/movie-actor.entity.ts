import { Entity, Column, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Movie } from './movie.entity';
import { Actor } from './actor.entity';

@Entity('movie_actor')
export class MovieActor {
  @PrimaryColumn({ type: 'bigint' })
  movie_id: number;

  @PrimaryColumn({ type: 'bigint' })
  actor_id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  character: string;

  @ManyToOne(() => Movie, (movie) => movie.movieActors, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'movie_id' })
  movie: Movie;

  @ManyToOne(() => Actor, (actor) => actor.movieActors, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'actor_id' })
  actor: Actor;
}
