import { JSONSchemaType } from 'ajv';
import { Film } from '../types/film';

export const filmSchema: JSONSchemaType<Film> = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    year: { type: 'number' },
    runtime: { type: 'number' },
    genres: {
      type: 'array',
      items: { type: 'string' },
    },
    directors: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          dateOfBirth: { type: 'string' },
          nationality: { type: 'string' },
          notableFilmography: {
            type: 'array',
            items: { type: 'string' },
            nullable: true,
          },
        },
        required: ['name', 'dateOfBirth', 'nationality'],
      },
    },
    notableActors: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          dateOfBirth: { type: 'string' },
          nationality: { type: 'string' },
          characterName: { type: 'string', nullable: true },
        },
        required: ['name', 'dateOfBirth', 'nationality'],
      },
    },
    description: { type: 'string' },
    IMDbScore: { type: 'number' },
    poster: { type: 'string', format: 'url' },
    quote: { type: 'string', nullable: true },
  },
  required: [
    'title',
    'year',
    'runtime',
    'genres',
    'directors',
    'notableActors',
    'description',
    'IMDbScore',
    'poster',
  ],
  additionalProperties: false,
};
