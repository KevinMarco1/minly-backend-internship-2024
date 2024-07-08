import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateOneToManyDirectorWithMovie1720446581024 implements MigrationInterface {
    name = 'CreateOneToManyDirectorWithMovie1720446581024'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" ADD "director_id" bigint`);
        await queryRunner.query(`ALTER TABLE "movie" ADD CONSTRAINT "FK_706e4603ead757166724676efbc" FOREIGN KEY ("director_id") REFERENCES "director"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" DROP CONSTRAINT "FK_706e4603ead757166724676efbc"`);
        await queryRunner.query(`ALTER TABLE "movie" DROP COLUMN "director_id"`);
    }

}
