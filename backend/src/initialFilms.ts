import { Genre } from './types/genres';
import { Nationality } from './types/nationalities';

export const initialFilms = [
  {
    title: 'GoodFellas',
    year: new Date(1990),
    runtime: 145,
    genres: [Genre.Drama, Genre.Crime],
    directors: [
      {
        name: 'Martin Scorsese',
        dateOfBirth: new Date(1942, 10, 17),
        nationality: Nationality.American,
        notableFilmography: ['Taxi Driver', 'Raging Bull', 'Shutter Island'],
      },
    ],
    notableActors: [
      {
        name: 'Ray Liotta',
        dateOfBirth: new Date(1954, 11, 18),
        nationality: Nationality.American,
        characterName: 'Henry Hill',
      },
      {
        name: 'Robert De Niro',
        dateOfBirth: new Date(1943, 7, 17),
        nationality: Nationality.American,
        characterName: 'James Conway',
      },
      {
        name: 'Joe Pesci',
        dateOfBirth: new Date(1943, 1, 9),
        nationality: Nationality.American,
        characterName: 'Tommy DeVito',
      },
    ],
    description:
      'The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.',
    IMDbScore: 8.7,
    poster:
      'https://www.themoviedb.org/t/p/w1280/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
  },
];
