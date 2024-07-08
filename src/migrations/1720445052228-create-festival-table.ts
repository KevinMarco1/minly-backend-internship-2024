import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFestivalTable1720445052228 implements MigrationInterface {
    name = 'CreateFestivalTable1720445052228'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "festival" ("id" BIGSERIAL NOT NULL, "title" character varying(255) NOT NULL, "date" date NOT NULL, "uuid" character varying NOT NULL, CONSTRAINT "UQ_1c96b1c30fcee5944e30e254a2e" UNIQUE ("uuid"), CONSTRAINT "PK_f1bcb856ab1c89180702ea0b47c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "festival"`);
    }

}
