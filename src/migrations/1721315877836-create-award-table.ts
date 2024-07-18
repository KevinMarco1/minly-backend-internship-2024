import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAwardTable1721315877836 implements MigrationInterface {
    name = 'CreateAwardTable1721315877836'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "award" ("id" BIGSERIAL NOT NULL, "name" character varying(100) NOT NULL, CONSTRAINT "PK_e887e4e69663925ebb60d3a7775" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "movie_actor" DROP CONSTRAINT "FK_3315be503ed4c23e4c12c2aba55"`);
        await queryRunner.query(`ALTER TABLE "movie_actor" DROP CONSTRAINT "FK_475e8562aad43168679b898ff56"`);
        await queryRunner.query(`ALTER TABLE "movie_actor" ALTER COLUMN "movie_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movie_actor" ALTER COLUMN "actor_id" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movie_actor" ADD CONSTRAINT "FK_3315be503ed4c23e4c12c2aba55" FOREIGN KEY ("movie_id") REFERENCES "movie"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movie_actor" ADD CONSTRAINT "FK_475e8562aad43168679b898ff56" FOREIGN KEY ("actor_id") REFERENCES "actor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie_actor" DROP CONSTRAINT "FK_475e8562aad43168679b898ff56"`);
        await queryRunner.query(`ALTER TABLE "movie_actor" DROP CONSTRAINT "FK_3315be503ed4c23e4c12c2aba55"`);
        await queryRunner.query(`ALTER TABLE "movie_actor" ALTER COLUMN "actor_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movie_actor" ALTER COLUMN "movie_id" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movie_actor" ADD CONSTRAINT "FK_475e8562aad43168679b898ff56" FOREIGN KEY ("actor_id") REFERENCES "actor"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "movie_actor" ADD CONSTRAINT "FK_3315be503ed4c23e4c12c2aba55" FOREIGN KEY ("movie_id") REFERENCES "movie"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`DROP TABLE "award"`);
    }

}
