-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "publicatinoDate" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);
