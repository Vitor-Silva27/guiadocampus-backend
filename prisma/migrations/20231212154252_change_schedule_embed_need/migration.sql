-- DropForeignKey
ALTER TABLE "classes_schedule" DROP CONSTRAINT "classes_schedule_embedId_fkey";

-- AlterTable
ALTER TABLE "classes_schedule" ALTER COLUMN "embedId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "classes_schedule" ADD CONSTRAINT "classes_schedule_embedId_fkey" FOREIGN KEY ("embedId") REFERENCES "embeds"("id") ON DELETE SET NULL ON UPDATE CASCADE;
