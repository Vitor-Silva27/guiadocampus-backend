-- CreateTable
CREATE TABLE "map" (
    "id" TEXT NOT NULL,
    "embedId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "map_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "map_embedId_key" ON "map"("embedId");

-- AddForeignKey
ALTER TABLE "map" ADD CONSTRAINT "map_embedId_fkey" FOREIGN KEY ("embedId") REFERENCES "embeds"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
