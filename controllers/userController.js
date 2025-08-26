const db = require('../config/db');

const createUser = async (req, res) => {
  const { name, age, gender, height, weight } = req.body;
  try {
    const result = await db.execute(
      'INSERT INTO users (name, age, gender, height, weight) VALUES (?, ?, ?, ?, ?)',
      [name, age, gender, height, weight]
    );
    res.status(201).json({ id: result[0].insertId, name, age, gender, height, weight });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user', error });
  }
};

module.exports = {
  createUser,
  getUser,
};
