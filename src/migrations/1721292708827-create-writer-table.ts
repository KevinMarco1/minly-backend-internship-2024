import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateWriterTable1721292708827 implements MigrationInterface {
    name = 'CreateWriterTable1721292708827'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."writer_gender_enum" AS ENUM('Male', 'Female', 'Other')`);
        await queryRunner.query(`CREATE TABLE "writer" ("created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "id" BIGSERIAL NOT NULL, "first_name" character varying(255) NOT NULL, "last_name" character varying(255) NOT NULL, "birth_date" date NOT NULL, "gender" "public"."writer_gender_enum" NOT NULL, "bio" character varying(1000), "number_of_awards" bigint, "nationality" character varying(255), "uuid" character varying NOT NULL, "picture" character varying(1000), CONSTRAINT "UQ_2d71ff733c7d53e100de633f1bf" UNIQUE ("uuid"), CONSTRAINT "PK_e43f7a41e79384a71f5e201c323" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "writer"`);
        await queryRunner.query(`DROP TYPE "public"."writer_gender_enum"`);
    }

}
