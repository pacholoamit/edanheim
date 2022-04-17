-- DropForeignKey
ALTER TABLE "Credential" DROP CONSTRAINT "Credential_storageId_fkey";

-- AlterTable
ALTER TABLE "Credential" ALTER COLUMN "storageId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Credential" ADD CONSTRAINT "Credential_storageId_fkey" FOREIGN KEY ("storageId") REFERENCES "Storage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
