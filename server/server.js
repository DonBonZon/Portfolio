/* eslint-disable import/extensions */
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import exercisesRoutes from './routes/exercises.js';
import bodyPartsRoutes from './routes/bodyParts.js';

dotenv.config();
const app = express();

// Express congig
app.use(express.json());
app.use('/exercises', exercisesRoutes);
app.use('/bodyParts', bodyPartsRoutes);
const { PORT } = process.env;

// Db connection
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.DB_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to DB'))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
