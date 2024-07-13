import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AutoTimestamp } from "./auto-time-stamp";
import { uuidv7 } from "@kripod/uuidv7";
import { Gender } from "./gender.enum";
import { Movie } from "./movie.entity";

@Entity()
export class Director extends AutoTimestamp {
  @PrimaryGeneratedColumn('increment', { type: 'bigint' })
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  first_name: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  last_name: string;

  @Column({ type: 'date', nullable: false })
  birth_date: Date;

  @Column({ type: 'enum', enum: Gender, nullable: false })
  gender: string;

  @Column({ type: 'varchar', length: 1000, nullable: true })
  bio: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  nationality: string;

  @Column({ type: 'varchar', unique: true })
  uuid: string;

  @Column({ type: 'varchar', length: 1000, nullable: true })
  picture: string;

  @Column({ type: 'bigint', nullable: true })
  number_of_awards: number;
 
  @OneToMany(() => Movie, (movie) => movie.director)
  movies: Movie[];

  @BeforeInsert()
  generateUUID() {
    this.uuid = uuidv7();
  }
  
}