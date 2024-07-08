import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMovieTable1720378781514 implements MigrationInterface {
    name = 'CreateMovieTable1720378781514'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movie" ("id" SERIAL NOT NULL, "poster" character varying(255) NOT NULL, "title" character varying(255) NOT NULL, "average_rate" integer NOT NULL DEFAULT '0', "number_of_ratings" integer NOT NULL DEFAULT '0', "release_date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "movie"`);
    }

}
