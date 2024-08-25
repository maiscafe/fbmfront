-- CreateTable
CREATE TABLE "FootballTeams" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "FootballPlayers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "team_id" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME NOT NULL,
    CONSTRAINT "FootballPlayers_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "FootballTeams" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
