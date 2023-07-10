-- CreateTable
CREATE TABLE "Categorie" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Scategorie" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "categorieId" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Scategorie_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "Categorie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Indicateur" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "description" TEXT,
    "scategorieId" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Indicateur_scategorieId_fkey" FOREIGN KEY ("scategorieId") REFERENCES "Scategorie" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Collecte" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "frequence" TEXT NOT NULL,
    "zone" TEXT NOT NULL,
    "unite" TEXT NOT NULL,
    "annee_2019" INTEGER NOT NULL,
    "annee_2020" INTEGER NOT NULL,
    "annee_2021" INTEGER NOT NULL,
    "indicateurId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Collecte_indicateurId_fkey" FOREIGN KEY ("indicateurId") REFERENCES "Indicateur" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
