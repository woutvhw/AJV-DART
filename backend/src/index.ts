import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { Film } from './types/film';
import { initialFilms } from './initialFilms';
import { filmSchema } from './schemas/filmSchema';

const app: Express = express();
dotenv.config();
app.use(cors());
app.use(express.json());

const ajv = new Ajv({ allErrors: true, strictTuples: false });
addFormats(ajv);
const validate = ajv.compile(filmSchema);
const films: Film[] = initialFilms;

// API endpoints

app.get('/films', (request, response) => {
  response.json(initialFilms);
});

app.post('/films', (request, response) => {
  const valid = validate(request.body);
  if (!valid) return response.status(404).json(validate.errors);

  films.push(request.body);
  return response.status(201).end();
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
