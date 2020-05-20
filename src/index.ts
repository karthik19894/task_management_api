
import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import cookieParser from 'cookie-parser';
import cors from 'cors';

import authRouter from "./routes/auth";
import { COOKIE_SECRET } from './config/secrets'

dotenv.config();

dotenv.config();
const app = express();
const port = process.env.SERVER_PORT || 5000; // default port to listen
const uri = process.env.ATLAS_URI;

app.use(cookieParser(COOKIE_SECRET))
app.use(cors({ credentials: true, origin: 'http://tasks.com:3000' }))

mongoose
  .connect(uri, { useNewUrlParser: true })
  .then(() => console.log("mongo connection established successfully"))
  .catch((err: any) => console.log(err));

app.use("/oauth2", authRouter);
// define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`hoooHooo!! server started at http://localhost:${port}`);
});
