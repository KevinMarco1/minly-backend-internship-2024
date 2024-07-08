import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDirectorTable1720445838293 implements MigrationInterface {
    name = 'CreateDirectorTable1720445838293'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."director_gender_enum" AS ENUM('Male', 'Female', 'Other')`);
        await queryRunner.query(`CREATE TABLE "director" ("created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "id" BIGSERIAL NOT NULL, "first_name" character varying(255) NOT NULL, "last_name" character varying(255) NOT NULL, "birth_date" date NOT NULL, "gender" "public"."director_gender_enum" NOT NULL, "bio" character varying(1000), "nationality" character varying(255), "uuid" character varying NOT NULL, "picture" character varying(1000), "number_of_awards" bigint, CONSTRAINT "UQ_df89f81bac8fa9709d270a424bf" UNIQUE ("uuid"), CONSTRAINT "PK_b85b179882f31c43324ef124fea" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "director"`);
        await queryRunner.query(`DROP TYPE "public"."director_gender_enum"`);
    }

}
