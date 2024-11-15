/*
  Warnings:

  - Made the column `description` on table `Order` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'TRANSPORTING', 'DELIVERING', 'CANCELED');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "ordeStatus" "OrderStatus" NOT NULL DEFAULT 'PENDING',
ALTER COLUMN "description" SET NOT NULL;
