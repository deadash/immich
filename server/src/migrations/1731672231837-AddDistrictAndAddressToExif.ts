import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDistrictAndAddressToExif1731672231837 implements MigrationInterface {
    name = 'AddDistrictAndAddressToExif1731672231837'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exif" ADD "district" character varying`);
        await queryRunner.query(`ALTER TABLE "exif" ADD "address" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "exif" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "exif" DROP COLUMN "district"`);
    }

}
