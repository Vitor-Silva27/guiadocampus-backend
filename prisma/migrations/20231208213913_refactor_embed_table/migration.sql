/*
  Warnings:

  - You are about to drop the `_SectorToUsefullLink` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `usefull_links` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_SectorToUsefullLink" DROP CONSTRAINT "_SectorToUsefullLink_A_fkey";

-- DropForeignKey
ALTER TABLE "_SectorToUsefullLink" DROP CONSTRAINT "_SectorToUsefullLink_B_fkey";

-- DropTable
DROP TABLE "_SectorToUsefullLink";

-- DropTable
DROP TABLE "usefull_links";

-- CreateTable
CREATE TABLE "_EmbedToService" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_EmbedToSector" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EmbedToService_AB_unique" ON "_EmbedToService"("A", "B");

-- CreateIndex
CREATE INDEX "_EmbedToService_B_index" ON "_EmbedToService"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EmbedToSector_AB_unique" ON "_EmbedToSector"("A", "B");

-- CreateIndex
CREATE INDEX "_EmbedToSector_B_index" ON "_EmbedToSector"("B");

-- AddForeignKey
ALTER TABLE "_EmbedToService" ADD CONSTRAINT "_EmbedToService_A_fkey" FOREIGN KEY ("A") REFERENCES "embeds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmbedToService" ADD CONSTRAINT "_EmbedToService_B_fkey" FOREIGN KEY ("B") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmbedToSector" ADD CONSTRAINT "_EmbedToSector_A_fkey" FOREIGN KEY ("A") REFERENCES "embeds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmbedToSector" ADD CONSTRAINT "_EmbedToSector_B_fkey" FOREIGN KEY ("B") REFERENCES "sectors"("id") ON DELETE CASCADE ON UPDATE CASCADE;
