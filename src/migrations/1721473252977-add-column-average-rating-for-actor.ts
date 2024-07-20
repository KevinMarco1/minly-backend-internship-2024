import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnAverageRatingForActor1721473252977 implements MigrationInterface {
    name = 'AddColumnAverageRatingForActor1721473252977'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "actor" ADD "average_rating" double precision NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "actor" DROP COLUMN "average_rating"`);
    }

}
