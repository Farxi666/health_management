const db = require('../config/db');

const addExercise = async (req, res) => {
  const { user_id, type, duration, calories_burned } = req.body;
  try {
    const result = await db.execute(
      'INSERT INTO exercises (user_id, type, duration, calories_burned) VALUES (?, ?, ?, ?)',
      [user_id, type, duration, calories_burned]
    );
    res.status(201).json({
      id: result[0].insertId,
      user_id,
      type,
      duration,
      calories_burned,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error adding exercise', error });
  }
};

const getUserExercises = async (req, res) => {
  const { userId } = req.params;
  try {
    const [rows] = await db.execute('SELECT * FROM exercises WHERE user_id = ?', [userId]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'No exercise records found' });
    }
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving exercises', error });
  }
};

module.exports = {
  addExercise,
  getUserExercises,
};
