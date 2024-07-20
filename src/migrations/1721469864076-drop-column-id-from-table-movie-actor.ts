import { MigrationInterface, QueryRunner } from "typeorm";

export class DropColumnIdFromTableMovieActor1721469864076 implements MigrationInterface {
    name = 'DropColumnIdFromTableMovieActor1721469864076'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie_actor" DROP CONSTRAINT "PK_c578a5152d4c32b9ad0bfa7c867"`);
        await queryRunner.query(`ALTER TABLE "movie_actor" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "movie_actor" ADD CONSTRAINT "PK_57f7ec79e5080ab66c02e776832" PRIMARY KEY ("movie_id", "actor_id")`);
        await queryRunner.query(`ALTER TABLE "movie_actor" DROP CONSTRAINT "FK_3315be503ed4c23e4c12c2aba55"`);
        await queryRunner.query(`ALTER TABLE "movie_actor" DROP CONSTRAINT "FK_475e8562aad43168679b898ff56"`);
        await queryRunner.query(`ALTER TABLE "movie_actor" ALTER COLUMN "movie_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movie_actor" ALTER COLUMN "actor_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movie_actor" ADD CONSTRAINT "FK_3315be503ed4c23e4c12c2aba55" FOREIGN KEY ("movie_id") REFERENCES "movie"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movie_actor" ADD CONSTRAINT "FK_475e8562aad43168679b898ff56" FOREIGN KEY ("actor_id") REFERENCES "actor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie_actor" DROP CONSTRAINT "FK_475e8562aad43168679b898ff56"`);
        await queryRunner.query(`ALTER TABLE "movie_actor" DROP CONSTRAINT "FK_3315be503ed4c23e4c12c2aba55"`);
        await queryRunner.query(`ALTER TABLE "movie_actor" ALTER COLUMN "actor_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movie_actor" ALTER COLUMN "movie_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movie_actor" ADD CONSTRAINT "FK_475e8562aad43168679b898ff56" FOREIGN KEY ("actor_id") REFERENCES "actor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movie_actor" ADD CONSTRAINT "FK_3315be503ed4c23e4c12c2aba55" FOREIGN KEY ("movie_id") REFERENCES "movie"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movie_actor" DROP CONSTRAINT "PK_57f7ec79e5080ab66c02e776832"`);
        await queryRunner.query(`ALTER TABLE "movie_actor" ADD "id" BIGSERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movie_actor" ADD CONSTRAINT "PK_c578a5152d4c32b9ad0bfa7c867" PRIMARY KEY ("id")`);
    }

}
