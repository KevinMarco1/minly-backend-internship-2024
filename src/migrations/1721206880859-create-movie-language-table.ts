import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMovieLanguageTable1721206880859 implements MigrationInterface {
    name = 'CreateMovieLanguageTable1721206880859'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" ADD "language_id" integer`);
        await queryRunner.query(`ALTER TABLE "movie" ADD CONSTRAINT "FK_f67ce232a045846cbb32af73757" FOREIGN KEY ("language_id") REFERENCES "language"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" DROP CONSTRAINT "FK_f67ce232a045846cbb32af73757"`);
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "language_id"`);
    }

}
