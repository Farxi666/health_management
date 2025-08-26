const db = require('../config/db');

const createExerciseTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS exercises (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      type VARCHAR(50) NOT NULL,
      duration DECIMAL(5, 2),
      calories_burned DECIMAL(5, 2),
      date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
    )
  `;
  await db.execute(query);
};

module.exports = {
  createExerciseTable,
};
