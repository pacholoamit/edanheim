-- AlterTable
ALTER TABLE "Credential" ADD COLUMN     "expiryDate" TIMESTAMP(3),
ADD COLUMN     "refreshToken" TEXT,
ADD COLUMN     "scope" TEXT,
ADD COLUMN     "tokenType" TEXT DEFAULT E'Bearer';
