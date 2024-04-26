-- CreateTable
CREATE TABLE "Album" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "year" INTEGER NOT NULL,
    "bandId" INTEGER NOT NULL,

    CONSTRAINT "Album_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Track" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "trackNumber" INTEGER,
    "length" INTEGER NOT NULL,
    "albumId" INTEGER NOT NULL,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Band" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "foundedAt" INTEGER,

    CONSTRAINT "Band_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GroupMember" (
    "id" SERIAL NOT NULL,
    "joined" INTEGER NOT NULL,
    "left" DATE,
    "bandId" INTEGER NOT NULL,
    "musicianId" INTEGER NOT NULL,

    CONSTRAINT "GroupMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Musician" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "birthDate" DATE,

    CONSTRAINT "Musician_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AlbumGenrePivot" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AlbumGenrePivot_AB_unique" ON "_AlbumGenrePivot"("A", "B");

-- CreateIndex
CREATE INDEX "_AlbumGenrePivot_B_index" ON "_AlbumGenrePivot"("B");

-- AddForeignKey
ALTER TABLE "Album" ADD CONSTRAINT "Album_bandId_fkey" FOREIGN KEY ("bandId") REFERENCES "Band"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Track" ADD CONSTRAINT "Track_albumId_fkey" FOREIGN KEY ("albumId") REFERENCES "Album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMember" ADD CONSTRAINT "GroupMember_bandId_fkey" FOREIGN KEY ("bandId") REFERENCES "Band"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupMember" ADD CONSTRAINT "GroupMember_musicianId_fkey" FOREIGN KEY ("musicianId") REFERENCES "Musician"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlbumGenrePivot" ADD CONSTRAINT "_AlbumGenrePivot_A_fkey" FOREIGN KEY ("A") REFERENCES "Album"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AlbumGenrePivot" ADD CONSTRAINT "_AlbumGenrePivot_B_fkey" FOREIGN KEY ("B") REFERENCES "Genre"("id") ON DELETE CASCADE ON UPDATE CASCADE;
