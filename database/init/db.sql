/* 
 *  Create database schema
 */

-- GROCERY --

CREATE TABLE IF NOT EXISTS barcodes (
  id INTEGER PRIMARY KEY,
  name TEXT DEFAULT "" NOT NULL,
  code TEXT DEFAULT "" NOT NULL
);

INSERT INTO barcodes
  (name,code) 
VALUES 
  ("Kroger Green Beans","0011110802705"),
  ("Bush's Best Kidney Beans","0039400017349"),
  ("Shamrock fat free milk","0028300020306");

CREATE TABLE IF NOT EXISTS list (
  id INTEGER PRIMARY KEY,
  name TEXT DEFAULT "" NOT NULL,
  code TEXT DEFAULT "" NOT NULL,
  quantity INTEGER DEFAULT 1 NOT NULL
);