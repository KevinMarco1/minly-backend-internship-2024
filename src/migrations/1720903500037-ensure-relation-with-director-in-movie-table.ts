import { MigrationInterface, QueryRunner } from "typeorm";

export class EnsureRelationWithDirectorInMovieTable1720903500037 implements MigrationInterface {
    name = 'EnsureRelationWithDirectorInMovieTable1720903500037'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" DROP CONSTRAINT "FK_706e4603ead757166724676efbc"`);
        await queryRunner.query(`ALTER TABLE "movie" ADD CONSTRAINT "FK_8aefbf59e604cdd127da5a093c5" FOREIGN KEY ("director_id") REFERENCES "director"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie" DROP CONSTRAINT "FK_8aefbf59e604cdd127da5a093c5"`);
        await queryRunner.query(`ALTER TABLE "movie" ADD CONSTRAINT "FK_706e4603ead757166724676efbc" FOREIGN KEY ("director_id") REFERENCES "director"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
