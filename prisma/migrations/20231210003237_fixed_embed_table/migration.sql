/*
  Warnings:

  - You are about to drop the `_EmbedToSector` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_EmbedToService` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_EmbedToSector" DROP CONSTRAINT "_EmbedToSector_A_fkey";

-- DropForeignKey
ALTER TABLE "_EmbedToSector" DROP CONSTRAINT "_EmbedToSector_B_fkey";

-- DropForeignKey
ALTER TABLE "_EmbedToService" DROP CONSTRAINT "_EmbedToService_A_fkey";

-- DropForeignKey
ALTER TABLE "_EmbedToService" DROP CONSTRAINT "_EmbedToService_B_fkey";

-- AlterTable
ALTER TABLE "embeds" ADD COLUMN     "sectorId" TEXT,
ADD COLUMN     "serviceId" TEXT;

-- DropTable
DROP TABLE "_EmbedToSector";

-- DropTable
DROP TABLE "_EmbedToService";

-- AddForeignKey
ALTER TABLE "embeds" ADD CONSTRAINT "embeds_sectorId_fkey" FOREIGN KEY ("sectorId") REFERENCES "sectors"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "embeds" ADD CONSTRAINT "embeds_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE SET NULL ON UPDATE CASCADE;
