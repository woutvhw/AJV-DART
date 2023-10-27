import { Genre } from './genres';
import { Nationality } from './nationalities';

export type Person = {
  name: string;
  dateOfBirth: Date;
  nationality: Nationality;
};

export type Actor = {
  characterName: string;
} & Person;

export type Director = {
  notableFilmography: string[];
} & Person;

export type Film = {
  title: string;
  year: Date;
  runtime: number;
  genres: Genre[];
  directors: Director[];
  notableActors: Actor[];
  description: string;
  IMDbScore: number;
  poster: string;
};
