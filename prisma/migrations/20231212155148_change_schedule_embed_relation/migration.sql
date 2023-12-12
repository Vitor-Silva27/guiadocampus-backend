/*
  Warnings:

  - A unique constraint covering the columns `[embedId]` on the table `classes_schedule` will be added. If there are existing duplicate values, this will fail.
  - Made the column `embedId` on table `classes_schedule` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "classes_schedule" DROP CONSTRAINT "classes_schedule_embedId_fkey";

-- AlterTable
ALTER TABLE "classes_schedule" ALTER COLUMN "embedId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "classes_schedule_embedId_key" ON "classes_schedule"("embedId");

-- AddForeignKey
ALTER TABLE "classes_schedule" ADD CONSTRAINT "classes_schedule_embedId_fkey" FOREIGN KEY ("embedId") REFERENCES "embeds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
