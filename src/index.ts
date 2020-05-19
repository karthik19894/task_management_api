import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import exampleRoute from "./routes/example";
import mongoose from 'mongoose';

const app = express();
const port = (process.env.SERVER_PORT || 3001); // default port to listen

// const db = mongoose.connect(process.env.MONGO_URL);

app.use("/example", exampleRoute);
// define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`hoooHooo!! server started at http://localhost:${port}`);
});
