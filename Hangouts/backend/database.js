const initSqlJs = require('sql.js');
const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, 'places.db');
let db;

async function getDb() {
  if (db) return db;
  const SQL = await initSqlJs();

  if (fs.existsSync(DB_PATH)) {
    const fileBuffer = fs.readFileSync(DB_PATH);
    db = new SQL.Database(fileBuffer);
  } else {
    db = new SQL.Database();
  }

  db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      area TEXT,
      city TEXT DEFAULT 'Bangalore',
      food_type TEXT,
      activity TEXT,
      description TEXT,
      maps_link TEXT,
      status TEXT DEFAULT 'pending'
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS place_vibes (
      place_id INTEGER,
      vibe TEXT,
      FOREIGN KEY(place_id) REFERENCES places(id)
    );
  `);

  saveDb();
  return db;
}

function saveDb() {
  const data = db.export();
  fs.writeFileSync(DB_PATH, Buffer.from(data));
}

module.exports = { getDb, saveDb };
