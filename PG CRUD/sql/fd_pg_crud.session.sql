CREATE TABLE "things"(
  "id" SERIAL PRIMARY KEY,
  "description" TEXT NOT NULL CHECK ("description" != ''),
  "createdAt" TIMESTAMP NOT NULL DEFAULT current_timestamp,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT current_timestamp
)


--create
INSERT INTO "things"("description") VALUES ('test thing') RETURNING *;
--read
SELECT * from "things" WHERE "id"=12;
--update
UPDATE "things" 
SET "description" = 'update test thing', "updatedAt" = current_timestamp 
WHERE "id"=12; 
--delete
DELETE FROM "things" WHERE "id"=12 RETURNING *;