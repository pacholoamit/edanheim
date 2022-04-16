/*
  Warnings:

  - You are about to drop the `SupabaseUser` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[supabaseId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Credential` table without a default value. This is not possible if the table is not empty.
  - Added the required column `supabaseId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Storage" DROP CONSTRAINT "Storage_userId_fkey";

-- DropForeignKey
ALTER TABLE "SupabaseUser" DROP CONSTRAINT "SupabaseUser_userId_fkey";

-- AlterTable
ALTER TABLE "Credential" ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Storage" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "supabaseId" TEXT NOT NULL,
ALTER COLUMN "updatedAt" DROP DEFAULT;

-- DropTable
DROP TABLE "SupabaseUser";

-- CreateIndex
CREATE UNIQUE INDEX "User_supabaseId_key" ON "User"("supabaseId");

-- AddForeignKey
ALTER TABLE "Storage" ADD CONSTRAINT "Storage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("supabaseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Credential" ADD CONSTRAINT "Credential_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("supabaseId") ON DELETE RESTRICT ON UPDATE CASCADE;
