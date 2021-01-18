import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();

// Express congig
app.use(bodyParser.json({ limit: '30mb', extended: true }));

//
const CONNECTION_URL = 'mongodb+srv://admin:adminpassword@portfolio.fwy7c.mongodb.net/SANDBOX?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

// Db connection
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to DB'))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
