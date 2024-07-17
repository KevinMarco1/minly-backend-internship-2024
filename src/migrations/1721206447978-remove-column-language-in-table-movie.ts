import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveColumnLanguageInTableMovie1721206447978 implements MigrationInterface {
    name = 'RemoveColumnLanguageInTableMovie1721206447978'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "language"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" ADD "language" character varying(255)`);
    }

}
