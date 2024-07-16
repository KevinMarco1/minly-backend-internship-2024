import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMovieCategoryTable1721153160335 implements MigrationInterface {
    name = 'CreateMovieCategoryTable1721153160335'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movie_category" ("movie_id" bigint NOT NULL, "category_id" integer NOT NULL, CONSTRAINT "PK_863112691ec73f8eddee559d777" PRIMARY KEY ("movie_id", "category_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_772fbff485e9541a9b4d7fec88" ON "movie_category" ("movie_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_22bbd4d33dbc49b240df412d28" ON "movie_category" ("category_id") `);
        await queryRunner.query(`ALTER TABLE "movie_category" ADD CONSTRAINT "FK_772fbff485e9541a9b4d7fec888" FOREIGN KEY ("movie_id") REFERENCES "movie"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "movie_category" ADD CONSTRAINT "FK_22bbd4d33dbc49b240df412d28e" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie_category" DROP CONSTRAINT "FK_22bbd4d33dbc49b240df412d28e"`);
        await queryRunner.query(`ALTER TABLE "movie_category" DROP CONSTRAINT "FK_772fbff485e9541a9b4d7fec888"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_22bbd4d33dbc49b240df412d28"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_772fbff485e9541a9b4d7fec88"`);
        await queryRunner.query(`DROP TABLE "movie_category"`);
    }

}
