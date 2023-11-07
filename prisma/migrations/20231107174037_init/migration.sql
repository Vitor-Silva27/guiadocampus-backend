-- CreateTable
CREATE TABLE "sectors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sectors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "protocols" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "protocols_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "services" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "guidelines" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ref" TEXT NOT NULL,

    CONSTRAINT "guidelines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contacts" (
    "id" TEXT NOT NULL,
    "administration" TEXT NOT NULL,
    "responsible" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "infos" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "infos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SectorToService" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ProtocolToSector" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_GuidelineToSector" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ContactToSector" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_InfoToSector" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "sectors_name_key" ON "sectors"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_SectorToService_AB_unique" ON "_SectorToService"("A", "B");

-- CreateIndex
CREATE INDEX "_SectorToService_B_index" ON "_SectorToService"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ProtocolToSector_AB_unique" ON "_ProtocolToSector"("A", "B");

-- CreateIndex
CREATE INDEX "_ProtocolToSector_B_index" ON "_ProtocolToSector"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_GuidelineToSector_AB_unique" ON "_GuidelineToSector"("A", "B");

-- CreateIndex
CREATE INDEX "_GuidelineToSector_B_index" ON "_GuidelineToSector"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ContactToSector_AB_unique" ON "_ContactToSector"("A", "B");

-- CreateIndex
CREATE INDEX "_ContactToSector_B_index" ON "_ContactToSector"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_InfoToSector_AB_unique" ON "_InfoToSector"("A", "B");

-- CreateIndex
CREATE INDEX "_InfoToSector_B_index" ON "_InfoToSector"("B");

-- AddForeignKey
ALTER TABLE "_SectorToService" ADD CONSTRAINT "_SectorToService_A_fkey" FOREIGN KEY ("A") REFERENCES "sectors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SectorToService" ADD CONSTRAINT "_SectorToService_B_fkey" FOREIGN KEY ("B") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProtocolToSector" ADD CONSTRAINT "_ProtocolToSector_A_fkey" FOREIGN KEY ("A") REFERENCES "protocols"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProtocolToSector" ADD CONSTRAINT "_ProtocolToSector_B_fkey" FOREIGN KEY ("B") REFERENCES "sectors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GuidelineToSector" ADD CONSTRAINT "_GuidelineToSector_A_fkey" FOREIGN KEY ("A") REFERENCES "guidelines"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_GuidelineToSector" ADD CONSTRAINT "_GuidelineToSector_B_fkey" FOREIGN KEY ("B") REFERENCES "sectors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContactToSector" ADD CONSTRAINT "_ContactToSector_A_fkey" FOREIGN KEY ("A") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ContactToSector" ADD CONSTRAINT "_ContactToSector_B_fkey" FOREIGN KEY ("B") REFERENCES "sectors"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InfoToSector" ADD CONSTRAINT "_InfoToSector_A_fkey" FOREIGN KEY ("A") REFERENCES "infos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_InfoToSector" ADD CONSTRAINT "_InfoToSector_B_fkey" FOREIGN KEY ("B") REFERENCES "sectors"("id") ON DELETE CASCADE ON UPDATE CASCADE;
