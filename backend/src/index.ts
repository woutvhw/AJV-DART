import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Film } from './types/types';
import { initialFilms } from './initialFilms';
dotenv.config();

const app: Express = express();
const films: Film[] = initialFilms;

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
});

app.get('/films', (request, response) => {
  response.json(films);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
