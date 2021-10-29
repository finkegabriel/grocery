/* 
 *  Create database schema
 */

-- GROCERY --

CREATE TABLE IF NOT EXISTS barcodes (
  id INTEGER PRIMARY KEY,
  code TEXT DEFAULT "" NOT NULL,
);

-- INSERT INTO barcodes
--   (code) 
-- VALUES 
--   (""),
--   ("");

CREATE TABLE IF NOT EXISTS list (
  id INTEGER PRIMARY KEY,
  name TEXT DEFAULT "" NOT NULL,
  code TEXT DEFAULT "" NOT NULL,
  quantity INTEGER DEFAULT 1 NOT NULL
);