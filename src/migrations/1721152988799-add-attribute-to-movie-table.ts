import { MigrationInterface, QueryRunner } from "typeorm";

export class AddAttributeToMovieTable1721152988799 implements MigrationInterface {
    name = 'AddAttributeToMovieTable1721152988799'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" ADD "overview" text`);
        await queryRunner.query(`ALTER TABLE "movie" ADD "language" character varying(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "language"`);
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "overview"`);
    }

}
