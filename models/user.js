const db = require('../config/db');

const createUserTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      age INT,
      gender ENUM('Male', 'Female') NOT NULL,
      height DECIMAL(5, 2),
      weight DECIMAL(5, 2),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  await db.execute(query);
};

module.exports = {
  createUserTable,
};
