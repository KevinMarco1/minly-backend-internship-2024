import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMovieTable1720445177870 implements MigrationInterface {
    name = 'CreateMovieTable1720445177870'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movie" ("created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "id" BIGSERIAL NOT NULL, "uuid" character varying NOT NULL, "poster" character varying(1000), "title" character varying(255) NOT NULL, "average_rating" double precision, "release_date" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "trailer" character varying(1000), CONSTRAINT "UQ_476c2d437396d614280b60f082a" UNIQUE ("uuid"), CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movie"`);
    }

}
