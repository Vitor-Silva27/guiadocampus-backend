-- CreateTable
CREATE TABLE "classes_schedule" (
    "id" TEXT NOT NULL,
    "course" TEXT NOT NULL,
    "embedId" TEXT NOT NULL,

    CONSTRAINT "classes_schedule_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "classes_schedule" ADD CONSTRAINT "classes_schedule_embedId_fkey" FOREIGN KEY ("embedId") REFERENCES "embeds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
