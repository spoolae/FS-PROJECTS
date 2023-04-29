CREATE TABLE "things" (
  "id" SERIAL PRIMARY KEY,
  "description" TEXT NOT NULL CHECK ("description" != ''),
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO "things" ("description")
VALUES ('test thing')
RETURNING *;

SELECT *
FROM "things"
WHERE "id" = 12;

UPDATE "things"
SET "description" = 'update test thing',
  "updatedAt" = CURRENT_TIMESTAMP
WHERE "id" = 12;

DELETE FROM "things"
WHERE "id" = 12
RETURNING *;