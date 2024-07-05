-- -------------------------------------------------------------
-- Database: postgres
-- -------------------------------------------------------------

DROP TABLE "public"."SequelizeMeta";
-- Table Definition
CREATE TABLE "public"."SequelizeMeta" (
    "name" varchar NOT NULL,
    PRIMARY KEY ("name")
);

DROP TABLE "public"."parkingSpots";
-- Sequences
CREATE SEQUENCE IF NOT EXISTS "parkingSpots_id_seq";
-- Table Definition
CREATE TABLE "public"."parkingSpots" (
    "id" int4 NOT NULL DEFAULT nextval('"parkingSpots_id_seq"'::regclass),
    "name" varchar NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE "public"."users";
-- Sequences
CREATE SEQUENCE IF NOT EXISTS users_id_seq;
-- Table Definition
CREATE TABLE "public"."users" (
    "id" int4 NOT NULL DEFAULT nextval('users_id_seq'::regclass),
    "firstName" varchar NOT NULL,
    "lastName" varchar NOT NULL,
    "email" varchar NOT NULL,
    "role" varchar NOT NULL,
    "token" varchar NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    PRIMARY KEY ("id")
);

DROP TABLE "public"."bookings";
-- Sequences
CREATE SEQUENCE IF NOT EXISTS bookings_id_seq;
-- Table Definition
CREATE TABLE "public"."bookings" (
    "id" int4 NOT NULL DEFAULT nextval('bookings_id_seq'::regclass),
    "userId" int4 NOT NULL,
    "parkingSpotId" int4 NOT NULL,
    "startedAt" timestamptz NOT NULL,
    "endedAt" timestamptz NOT NULL,
    "createdAt" timestamptz NOT NULL,
    "updatedAt" timestamptz NOT NULL,
    PRIMARY KEY ("id")
);

INSERT INTO "public"."SequelizeMeta" ("name") VALUES 
('20240703115944-create-users-table.ts'),
('20240703122346-create-parkingSpots-table.ts'),
('20240703130308-create-bookings-table.ts');

INSERT INTO "public"."parkingSpots" ("id","name","createdAt","updatedAt") VALUES 
(1,'Parking Spot 1','2024-07-03 15:44:49.939+03','2024-07-04 12:54:06.891+03'),
(2,'Parking Spot 2','2024-07-03 15:44:49.981+03','2024-07-04 12:54:06.931+03'),
(3,'Parking Spot 3','2024-07-03 15:44:49.984+03','2024-07-04 12:54:06.934+03'),
(4,'Parking Spot 4','2024-07-03 15:44:49.988+03','2024-07-04 12:54:06.939+03'),
(5,'Parking Spot 5','2024-07-03 15:44:49.992+03','2024-07-04 12:54:06.943+03'),
(6,'Parking Spot 6','2024-07-03 15:44:49.997+03','2024-07-04 12:54:06.947+03'),
(7,'Parking Spot 7','2024-07-03 15:44:50.001+03','2024-07-04 12:54:06.951+03'),
(8,'Parking Spot 8','2024-07-03 15:44:50.004+03','2024-07-04 12:54:06.954+03'),
(9,'Parking Spot 9','2024-07-03 15:44:50.007+03','2024-07-04 12:54:06.957+03'),
(10,'Parking Spot 10','2024-07-03 15:44:50.01+03','2024-07-04 12:54:06.96+03');


INSERT INTO "public"."users" ("id","firstName","lastName","email","role","token","createdAt","updatedAt") VALUES 
(1,'John','Doe','john.doe@example.com','admin','token1','2024-07-03 15:18:19.244+03','2024-07-04 12:54:06.891+03'),
(2,'Jane','Smith','jane.smith@example.com','admin','token2','2024-07-03 15:18:19.282+03','2024-07-04 12:54:06.932+03'),
(3,'Alice','Johnson','alice.johnson@example.com','standard','token3','2024-07-03 15:18:19.286+03','2024-07-04 12:54:06.937+03'),
(4,'Bob','Brown','bob.brown@example.com','standard','token4','2024-07-03 15:18:19.288+03','2024-07-04 12:54:06.941+03'),
(5,'Charlie','Davis','charlie.davis@example.com','standard','token5','2024-07-03 15:18:19.291+03','2024-07-04 12:54:06.945+03');

INSERT INTO "public"."bookings" ("id","userId","parkingSpotId","startedAt","endedAt","createdAt","updatedAt") VALUES 
(2,1,2,'2024-07-02 09:00:00+03','2024-07-02 15:30:00+03','2024-07-03 16:15:38.564+03','2024-07-03 16:15:38.564+03'),
(3,2,5,'2024-07-02 09:00:00+03','2024-07-02 15:30:00+03','2024-07-03 16:15:38.567+03','2024-07-03 16:15:38.567+03'),
(4,2,6,'2024-07-02 09:00:00+03','2024-07-02 15:30:00+03','2024-07-03 16:15:38.572+03','2024-07-03 16:15:38.572+03'),
(5,2,8,'2024-07-03 09:00:00+03','2024-07-03 15:30:00+03','2024-07-03 16:15:38.576+03','2024-07-03 16:15:38.576+03'),
(1,4,3,'2024-07-03 10:00:00+03','2024-07-03 14:30:00+03','2024-07-03 16:15:38.511+03','2024-07-04 12:46:53.746+03'),
(41,1,10,'2024-07-05 09:00:00+03','2024-07-05 15:30:00+03','2024-07-04 16:35:42.108+03','2024-07-04 16:35:42.108+03'),
(42,1,10,'2024-07-05 09:00:00+03','2024-07-05 15:30:00+03','2024-07-04 16:35:53.445+03','2024-07-04 16:35:53.445+03'),
(43,4,10,'2024-07-05 09:00:00+03','2024-07-05 15:30:00+03','2024-07-04 16:36:10.396+03','2024-07-04 16:36:10.396+03'),
(44,4,10,'2024-07-05 09:00:00+03','2024-07-05 15:30:00+03','2024-07-04 16:36:16.834+03','2024-07-04 16:36:16.834+03'),
(46,4,9,'2024-07-03 10:00:00+03','2024-07-03 14:00:00+03','2024-07-05 12:24:14.485+03','2024-07-05 12:24:14.485+03'),
(47,4,9,'2024-07-03 14:30:00+03','2024-07-03 18:30:00+03','2024-07-05 12:25:02.916+03','2024-07-05 12:25:02.916+03');

