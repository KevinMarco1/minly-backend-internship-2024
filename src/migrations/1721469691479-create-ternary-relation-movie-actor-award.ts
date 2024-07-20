import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTernaryRelationMovieActorAward1721469691479 implements MigrationInterface {
    name = 'CreateTernaryRelationMovieActorAward1721469691479'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movie_actor_award" ("movie_id" bigint NOT NULL, "actor_id" bigint NOT NULL, "award_id" bigint NOT NULL, "description" text, "year" integer NOT NULL, CONSTRAINT "PK_21cb1d64de2e9c2f52468333e5f" PRIMARY KEY ("movie_id", "actor_id", "award_id"))`);
        await queryRunner.query(`ALTER TABLE "movie_actor_award" ADD CONSTRAINT "FK_c100571a9604d4cf8f5428f17d5" FOREIGN KEY ("movie_id") REFERENCES "movie"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movie_actor_award" ADD CONSTRAINT "FK_97a5ed66a79090a3d3561ed8e40" FOREIGN KEY ("actor_id") REFERENCES "actor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movie_actor_award" ADD CONSTRAINT "FK_09f1d5c5d7bb29079d7cd752c0c" FOREIGN KEY ("award_id") REFERENCES "award"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie_actor_award" DROP CONSTRAINT "FK_09f1d5c5d7bb29079d7cd752c0c"`);
        await queryRunner.query(`ALTER TABLE "movie_actor_award" DROP CONSTRAINT "FK_97a5ed66a79090a3d3561ed8e40"`);
        await queryRunner.query(`ALTER TABLE "movie_actor_award" DROP CONSTRAINT "FK_c100571a9604d4cf8f5428f17d5"`);
        await queryRunner.query(`DROP TABLE "movie_actor_award"`);
    }

}
