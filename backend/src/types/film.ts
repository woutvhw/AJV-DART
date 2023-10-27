import { Genre } from './enums/genres';
import { Nationality } from './enums/nationalities';

// type Person = {
//   name: string;
//   dateOfBirth: Date;
//   nationality: Nationality;
// };

type Actor = {
  name: string;
  dateOfBirth: string;
  nationality: Nationality;
  characterName?: string;
};

type Director = {
  name: string;
  dateOfBirth: string;
  nationality: Nationality;
  notableFilmography?: string[];
};

export type Film = {
  title: string;
  year: number;
  runtime: number;
  genres: Genre[];
  directors: Director[];
  notableActors: Actor[];
  description: string;
  IMDbScore: number;
  poster: string;
  quote?: string;
};
