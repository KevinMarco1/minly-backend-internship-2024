import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMoveFestivalTable1720445250842 implements MigrationInterface {
    name = 'CreateMoveFestivalTable1720445250842'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movie_festival" ("movie_id" bigint NOT NULL, "festival_id" bigint NOT NULL, CONSTRAINT "PK_d991c68dd9bd2b74153cf1d8162" PRIMARY KEY ("movie_id", "festival_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5d9db9c773c7b818622228d9fa" ON "movie_festival" ("movie_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_2088304eddeef47464254284c7" ON "movie_festival" ("festival_id") `);
        await queryRunner.query(`ALTER TABLE "movie_festival" ADD CONSTRAINT "FK_5d9db9c773c7b818622228d9fab" FOREIGN KEY ("movie_id") REFERENCES "movie"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "movie_festival" ADD CONSTRAINT "FK_2088304eddeef47464254284c7b" FOREIGN KEY ("festival_id") REFERENCES "festival"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie_festival" DROP CONSTRAINT "FK_2088304eddeef47464254284c7b"`);
        await queryRunner.query(`ALTER TABLE "movie_festival" DROP CONSTRAINT "FK_5d9db9c773c7b818622228d9fab"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2088304eddeef47464254284c7"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_5d9db9c773c7b818622228d9fa"`);
        await queryRunner.query(`DROP TABLE "movie_festival"`);
    }

}
