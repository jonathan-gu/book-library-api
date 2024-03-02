-- CreateTable
CREATE TABLE "Book" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "publicationDate" TIMESTAMP(3) NOT NULL,
    "kind" TEXT NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Borrow" (
    "id" SERIAL NOT NULL,
    "borrowerName" TEXT NOT NULL,
    "borrowDate" TIMESTAMP(3) NOT NULL,
    "scheduledReturnDate" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "bookId" INTEGER NOT NULL,

    CONSTRAINT "Borrow_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Borrow" ADD CONSTRAINT "Borrow_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
