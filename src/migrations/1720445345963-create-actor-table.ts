import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateActorTable1720445345963 implements MigrationInterface {
    name = 'CreateActorTable1720445345963'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."actor_gender_enum" AS ENUM('Male', 'Female', 'Other')`);
        await queryRunner.query(`CREATE TABLE "actor" ("created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "id" BIGSERIAL NOT NULL, "first_name" character varying(255) NOT NULL, "last_name" character varying(255) NOT NULL, "birth_date" date NOT NULL, "gender" "public"."actor_gender_enum" NOT NULL, "bio" character varying(1000), "number_of_awards" bigint, "nationality" character varying(255), "uuid" character varying NOT NULL, "picture" character varying(1000), CONSTRAINT "UQ_3ada272ec56626c8965a4da07af" UNIQUE ("uuid"), CONSTRAINT "PK_05b325494fcc996a44ae6928e5e" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "actor"`);
        await queryRunner.query(`DROP TYPE "public"."actor_gender_enum"`);
    }

}
