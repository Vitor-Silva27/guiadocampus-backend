/*
  Warnings:

  - You are about to drop the `_InfoToSector` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_InfoToSector" DROP CONSTRAINT "_InfoToSector_A_fkey";

-- DropForeignKey
ALTER TABLE "_InfoToSector" DROP CONSTRAINT "_InfoToSector_B_fkey";

-- AlterTable
ALTER TABLE "infos" ADD COLUMN     "sectorId" TEXT;

-- DropTable
DROP TABLE "_InfoToSector";

-- AddForeignKey
ALTER TABLE "infos" ADD CONSTRAINT "infos_sectorId_fkey" FOREIGN KEY ("sectorId") REFERENCES "sectors"("id") ON DELETE SET NULL ON UPDATE CASCADE;
