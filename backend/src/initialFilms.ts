import { Genre } from './types/enums/genres';
import { Nationality } from './types/enums/nationalities';
import { Film } from './types/types';

export const initialFilms: Film[] = [
  {
    title: 'GoodFellas',
    year: 1990,
    runtime: 145,
    genres: [Genre.Drama, Genre.Crime],
    directors: [
      {
        name: 'Martin Scorsese',
        dateOfBirth: new Date(1942, 10, 16),
        nationality: Nationality.American,
        notableFilmography: ['Taxi Driver', 'Raging Bull', 'Shutter Island'],
      },
    ],
    notableActors: [
      {
        name: 'Ray Liotta',
        dateOfBirth: new Date(1954, 11, 17),
        nationality: Nationality.American,
        characterName: 'Henry Hill',
      },
      {
        name: 'Robert De Niro',
        dateOfBirth: new Date(1943, 7, 16),
        nationality: Nationality.American,
        characterName: 'James Conway',
      },
      {
        name: 'Joe Pesci',
        dateOfBirth: new Date(1943, 1, 8),
        nationality: Nationality.American,
        characterName: 'Tommy DeVito',
      },
    ],
    description:
      'The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.',
    IMDbScore: 8.7,
    poster:
      'https://www.themoviedb.org/t/p/w1280/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg',
    quote: 'THREE DECADES OF LIFE IN THE MAFIA.',
  },
  {
    title: 'The Incredibles',
    year: 2004,
    runtime: 115,
    genres: [Genre.Animation, Genre.Action, Genre.Adventure, Genre.Family],
    directors: [
      {
        name: 'Brad Bird',
        dateOfBirth: new Date(1957, 8, 14),
        nationality: Nationality.American,
        notableFilmography: ['Ratatouille', 'The Iron Giant', 'Incredibles 2'],
      },
    ],
    notableActors: [
      {
        name: 'Craig T. Nelson',
        dateOfBirth: new Date(1944, 3, 3),
        nationality: Nationality.American,
        characterName: 'Bob Parr / Mr. Incredible',
      },
      {
        name: 'Holly Hunter',
        dateOfBirth: new Date(1958, 2, 19),
        nationality: Nationality.American,
        characterName: 'Helen Parr / Elastigirl',
      },
      {
        name: 'Sarah Vowell',
        dateOfBirth: new Date(1969, 11, 26),
        nationality: Nationality.American,
        characterName: 'Violet Parr',
      },
    ],
    description:
      'Bob Parr has given up his superhero days to log in time as an insurance adjuster and raise his three children with his formerly heroic wife in suburbia. But when he receives a mysterious assignment, it’s time to get back into costume.',
    IMDbScore: 8.0,
    poster:
      'https://www.themoviedb.org/t/p/w1280/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg',
    quote: 'NO GUT, NO GLORY.',
  },
  {
    title: 'The Shining',
    year: 1980,
    runtime: 144,
    genres: [Genre.Horror, Genre.Thriller],
    directors: [
      {
        name: 'Stanley Kubrick',
        dateOfBirth: new Date(1928, 6, 25),
        nationality: Nationality.American,
        notableFilmography: [
          '2001: A Space Odyssey',
          'A Clockwork Orange',
          'Eyes Wide Shut',
        ],
      },
    ],
    notableActors: [
      {
        name: 'Jack Nicholson',
        dateOfBirth: new Date(1937, 3, 21),
        nationality: Nationality.American,
        characterName: 'Jack Torrance',
      },
      {
        name: 'Shelley Duvall',
        dateOfBirth: new Date(1949, 6, 6),
        nationality: Nationality.American,
        characterName: 'Wendy Torrance',
      },
      {
        name: 'Danny Lloyd',
        dateOfBirth: new Date(1973, 0, 10),
        nationality: Nationality.American,
        characterName: 'Danny Torrance',
      },
    ],
    description:
      'Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren’t prepared for the madness that lurks within.',
    IMDbScore: 8.4,
    poster:
      'https://www.themoviedb.org/t/p/w1280/xazWoLealQwEgqZ89MLZklLZD3k.jpg',
    quote:
      'HE CAME AS THE CARETAKER, BUT THIS HOTEL HAD ITS OWN GUARDIANS - WHO’D BEEN THERE A LONG TIME.',
  },
];
