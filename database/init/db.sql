/* 
 *  Create database schema
 */

-- GROCERY --

CREATE TABLE IF NOT EXISTS barcodes (
  id INTEGER PRIMARY KEY,
  name TEXT DEFAULT "" NOT NULL,
  code TEXT DEFAULT "" NOT NULL UNIQUE
);

INSERT INTO barcodes
  (name,code) 
VALUES 
  ("Kroger Green Beans","0011110802705"),
  ("Shamrock fat free milk","0028300020306");

CREATE TABLE IF NOT EXISTS list (
  id INTEGER PRIMARY KEY,
  name TEXT DEFAULT "" NOT NULL,
  code TEXT DEFAULT "" NOT NULL UNIQUE,
  quantity INTEGER DEFAULT 1 NOT NULL
);