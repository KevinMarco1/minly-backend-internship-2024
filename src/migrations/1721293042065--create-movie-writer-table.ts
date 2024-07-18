import { MigrationInterface, QueryRunner } from "typeorm";

export class  CreateMovieWriterTable1721293042065 implements MigrationInterface {
    name = ' CreateMovieWriterTable1721293042065'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "movie_writer" ("movie_id" bigint NOT NULL, "writer_id" bigint NOT NULL, CONSTRAINT "PK_64ffd119b1e69dacb4febcb6f81" PRIMARY KEY ("movie_id", "writer_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_150defc42ea014605fcbc3c274" ON "movie_writer" ("movie_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_82795e0578c495556cf22040b3" ON "movie_writer" ("writer_id") `);
        await queryRunner.query(`ALTER TABLE "movie_writer" ADD CONSTRAINT "FK_150defc42ea014605fcbc3c2747" FOREIGN KEY ("movie_id") REFERENCES "movie"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "movie_writer" ADD CONSTRAINT "FK_82795e0578c495556cf22040b32" FOREIGN KEY ("writer_id") REFERENCES "writer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movie_writer" DROP CONSTRAINT "FK_82795e0578c495556cf22040b32"`);
        await queryRunner.query(`ALTER TABLE "movie_writer" DROP CONSTRAINT "FK_150defc42ea014605fcbc3c2747"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_82795e0578c495556cf22040b3"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_150defc42ea014605fcbc3c274"`);
        await queryRunner.query(`DROP TABLE "movie_writer"`);
    }

}
