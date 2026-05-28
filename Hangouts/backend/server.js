const express = require('express');
const cors = require('cors');
const path = require('path');
const { getDb, saveDb } = require('./database');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/api/places', async (req, res) => {
  try {
    const db = await getDb();
    const { vibe, food_type, activity } = req.query;

    let query = `
      SELECT DISTINCT p.*, GROUP_CONCAT(pv.vibe) as vibes
      FROM places p
      LEFT JOIN place_vibes pv ON p.id = pv.place_id
      WHERE p.status = 'approved'
    `;

    if (vibe) query += ` AND pv.vibe = '${vibe}'`;
    if (activity) query += ` AND p.activity = '${activity}'`;

    // Food filter:
    // - If user picks a specific food → show places with that food_type OR places with Skip (non-food places still shown)
    // - If user picks Skip or nothing → show everything
    if (food_type && food_type !== 'Skip') {
      query += ` AND (p.food_type = '${food_type}' OR p.food_type = 'Skip')`;
    }

    query += ` GROUP BY p.id`;

    const result = db.exec(query);
    if (result.length === 0) return res.json([]);

    const columns = result[0].columns;
    const rows = result[0].values.map(row => {
      const obj = {};
      columns.forEach((col, i) => obj[col] = row[i]);
      obj.vibes = obj.vibes ? obj.vibes.split(',') : [];
      return obj;
    });

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/suggest', async (req, res) => {
  try {
    const db = await getDb();
    const { name, area, city, vibes, food_type, activity, description, maps_link } = req.body;

    db.run(
      `INSERT INTO places (name, area, city, food_type, activity, description, maps_link, status) VALUES (?, ?, ?, ?, ?, ?, ?, 'pending')`,
      [name, area, city || 'Bangalore', food_type, activity, description, maps_link]
    );

    const result = db.exec("SELECT last_insert_rowid() as id");
    const placeId = result[0].values[0][0];

    if (vibes && vibes.length > 0) {
      vibes.forEach(vibe => db.run(`INSERT INTO place_vibes (place_id, vibe) VALUES (?, ?)`, [placeId, vibe]));
    }

    saveDb();
    res.json({ message: 'Thanks for the suggestion!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/feedback', async (req, res) => {
  try {
    const db = await getDb();
    const { name, email, message } = req.body;

    db.run(`CREATE TABLE IF NOT EXISTS feedback (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT, email TEXT, message TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    )`);

    db.run(`INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)`, [name, email, message]);
    saveDb();
    res.json({ message: 'Thanks for your feedback!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/places/bulk', async (req, res) => {
  try {
    const db = await getDb();
    const { places } = req.body;

    places.forEach(place => {
      const { name, area, city, vibes, food_type, activity, description, maps_link } = place;
      db.run(
        `INSERT INTO places (name, area, city, food_type, activity, description, maps_link, status) VALUES (?, ?, ?, ?, ?, ?, ?, 'approved')`,
        [name, area, city || 'Bangalore', food_type, activity, description, maps_link]
      );
      const result = db.exec("SELECT last_insert_rowid() as id");
      const placeId = result[0].values[0][0];
      if (vibes && vibes.length > 0) {
        vibes.forEach(vibe => db.run(`INSERT INTO place_vibes (place_id, vibe) VALUES (?, ?)`, [placeId, vibe]));
      }
    });

    saveDb();
    res.json({ message: `${places.length} places imported!` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/pending', async (req, res) => {
  try {
    const db = await getDb();
    const result = db.exec(`
      SELECT p.*, GROUP_CONCAT(pv.vibe) as vibes
      FROM places p LEFT JOIN place_vibes pv ON p.id = pv.place_id
      WHERE p.status = 'pending' GROUP BY p.id
    `);
    if (result.length === 0) return res.json([]);
    const columns = result[0].columns;
    const rows = result[0].values.map(row => {
      const obj = {};
      columns.forEach((col, i) => obj[col] = row[i]);
      obj.vibes = obj.vibes ? obj.vibes.split(',') : [];
      return obj;
    });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/feedback', async (req, res) => {
  try {
    const db = await getDb();
    db.run(`CREATE TABLE IF NOT EXISTS feedback (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT, email TEXT, message TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    )`);
    const result = db.exec(`SELECT * FROM feedback ORDER BY id DESC`);
    if (result.length === 0) return res.json([]);
    const columns = result[0].columns;
    const rows = result[0].values.map(row => {
      const obj = {};
      columns.forEach((col, i) => obj[col] = row[i]);
      return obj;
    });
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.patch('/api/places/:id/approve', async (req, res) => {
  try {
    const db = await getDb();
    db.run(`UPDATE places SET status = 'approved' WHERE id = ?`, [req.params.id]);
    saveDb();
    res.json({ message: 'Place approved!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Edit a place
app.patch('/api/places/:id', async (req, res) => {
  try {
    const db = await getDb();
    const { name, area, city, activity, food_type, description, maps_link } = req.body;
    db.run(
      `UPDATE places SET name=?, area=?, city=?, activity=?, food_type=?, description=?, maps_link=? WHERE id=?`,
      [name, area, city, activity, food_type, description, maps_link, req.params.id]
    );
    saveDb();
    res.json({ message: 'Place updated!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/places/:id', async (req, res) => {
  try {
    const db = await getDb();
    db.run(`DELETE FROM place_vibes WHERE place_id = ?`, [req.params.id]);
    db.run(`DELETE FROM places WHERE id = ?`, [req.params.id]);
    saveDb();
    res.json({ message: 'Place deleted!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
