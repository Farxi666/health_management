const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const exerciseRoutes = require('./routes/exerciseRoutes');
const { createUserTable } = require('./models/user');
const { createExerciseTable } = require('./models/exercise');

dotenv.config();
const app = express();
app.use(express.json());

// 初始化数据库
createUserTable();
createExerciseTable();

// 路由
app.use('/api', userRoutes);
app.use('/api', exerciseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
