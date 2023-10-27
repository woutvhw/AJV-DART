class Movie {
  final String title;
  final int year;
  final int runtime;
  final List<String> genres;
  final String director;
  final List<String> actors;
  final String description;
  final double imdbScore;
  final String poster;
  final String quote;

  Movie({
    required this.title,
    required this.year,
    required this.runtime,
    required this.genres,
    required this.director,
    required this.actors,
    required this.description,
    required this.imdbScore,
    required this.poster,
    required this.quote,
  });

  factory Movie.fromJson(Map<String, dynamic> json) {
    // Extract the director name from the directors list
    final directorName = json['directors'][0]['name'];

    // Extract actor names from the notableActors list
    final actorNames = List<String>.from(json['notableActors'].map((actor) => actor['name']));

    return Movie(
      title: json['title'],
      year: json['year'],
      runtime: json['runtime'],
      genres: List<String>.from(json['genres']),
      director: directorName,
      actors: actorNames,
      description: json['description'],
      imdbScore: json['IMDbScore'].toDouble(),
      poster: json['poster'],
      quote: json['quote'],
    );
  }
}
