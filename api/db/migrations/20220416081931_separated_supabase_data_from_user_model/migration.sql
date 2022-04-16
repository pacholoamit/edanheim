/*
  Warnings:

  - You are about to drop the column `supabaseId` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_supabaseId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "supabaseId",
ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updatedAt" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "SupabaseUser" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "supabaseId" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "updatedAt" TEXT NOT NULL,

    CONSTRAINT "SupabaseUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SupabaseUser_id_key" ON "SupabaseUser"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SupabaseUser_userId_key" ON "SupabaseUser"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "SupabaseUser_supabaseId_key" ON "SupabaseUser"("supabaseId");

-- AddForeignKey
ALTER TABLE "SupabaseUser" ADD CONSTRAINT "SupabaseUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
