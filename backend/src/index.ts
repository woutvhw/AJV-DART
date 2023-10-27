import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { filmSchema } from './schemas/filmSchema';
import { initialFilms } from './initialFilms';
import { Film } from './types/film';
dotenv.config();

const app: Express = express();
app.use(cors());
app.use(express.json());

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
const validate = ajv.compile(filmSchema);
let films: Film[] = initialFilms;

// API endpoints

app.get('/films', (request, response) => {
  return response.json(initialFilms);
});

app.post('/films', (request, response) => {
  const valid = validate(request.body);
  if (!valid) return response.status(400).json(validate.errors);

  films.push(request.body);
  return response.status(201).end();
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
