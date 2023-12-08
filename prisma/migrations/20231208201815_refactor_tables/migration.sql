/*
  Warnings:

  - You are about to drop the column `administration` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the `_GuidelineToSector` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProtocolToSector` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `guidelines` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `protocols` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `title` to the `contacts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon` to the `infos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon` to the `sectors` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_GuidelineToSector" DROP CONSTRAINT "_GuidelineToSector_A_fkey";

-- DropForeignKey
ALTER TABLE "_GuidelineToSector" DROP CONSTRAINT "_GuidelineToSector_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProtocolToSector" DROP CONSTRAINT "_ProtocolToSector_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProtocolToSector" DROP CONSTRAINT "_ProtocolToSector_B_fkey";

-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "administration",
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "phone" DROP NOT NULL;

-- AlterTable
ALTER TABLE "infos" ADD COLUMN     "icon" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "sectors" ADD COLUMN     "icon" TEXT NOT NULL;

-- DropTable
DROP TABLE "_GuidelineToSector";

-- DropTable
DROP TABLE "_ProtocolToSector";

-- DropTable
DROP TABLE "guidelines";

-- DropTable
DROP TABLE "protocols";

-- CreateTable
CREATE TABLE "usefull_links" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "usefull_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "embeds" (
    "id" TEXT NOT NULL,
    "icon" TEXT,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "embeds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SectorToUsefullLink" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SectorToUsefullLink_AB_unique" ON "_SectorToUsefullLink"("A", "B");

-- CreateIndex
CREATE INDEX "_SectorToUsefullLink_B_index" ON "_SectorToUsefullLink"("B");

-- AddForeignKey
ALTER TABLE "_SectorToUsefullLink" ADD CONSTRAINT "_SectorToUsefullLink_A_fkey" FOREIGN KEY ("A") REFERENCES "sectors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SectorToUsefullLink" ADD CONSTRAINT "_SectorToUsefullLink_B_fkey" FOREIGN KEY ("B") REFERENCES "usefull_links"("id") ON DELETE CASCADE ON UPDATE CASCADE;
