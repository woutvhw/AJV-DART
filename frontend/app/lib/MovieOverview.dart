import 'dart:convert';
import 'package:flutter/material.dart';
import 'Movie.dart';
import 'MovieAdd.dart';
import 'package:http/http.dart' as http;

Color color = Colors.green;

class MovieOverview extends StatefulWidget {
  @override
  _MovieListState createState() => _MovieListState();
}

class _MovieListState extends State<MovieOverview> {
  List<Movie> movies = [];

  @override
  void initState() {
    super.initState();
    fetchMovies();
  }

  Future<void> fetchMovies() async {
    final response = await http.get(Uri.parse('http://localhost:3000/films'));

    if (response.statusCode == 200) {
      final List<dynamic> data = json.decode(response.body);
      final List<Movie> fetchedMovies = data.map((movieData) =>
          Movie.fromJson(movieData)).toList();

      print(fetchedMovies);

      setState(() {
        movies = fetchedMovies;
      });
    } else {
      throw Exception('Failed to load movie data');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Movie Overview'),
        leading: IconButton(
            onPressed: () => {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => const MovieAdd()),
              )
            },
            icon: const Icon(Icons.add)),
      ),
      body: GridView.count(
        crossAxisCount: 2,
        children: movies.map((movie) {
          return movieCard(movie);
        }).toList(),
      ),
    );
  }

}



Widget movieCard(Movie movie) {
  return Column(
    children: [
      Image.network(
        movie.poster, // Replace with movie.poster
        width: 150,
        height: 240,
        fit: BoxFit.cover,
      ),
      Container(
        padding: const EdgeInsets.all(32),
        child: Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Container(
                    padding: const EdgeInsets.only(bottom: 8),
                    alignment: Alignment.center,
                    child: Text(
                      movie.title, // Replace with movie.title
                      style: TextStyle(
                        fontWeight: FontWeight.bold,
                        fontSize: 23,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          Text('${movie.runtime} min.'), // Replace with movie.runtime
          Text('${movie.year}'), // Replace with movie.year
          RichText(
            text: TextSpan(
              children: [
                TextSpan(text: '${movie.imdbScore}'), // Replace with movie.imdbScore
                WidgetSpan(
                  child: Icon(
                    Icons.star,
                    size: 18,
                    color: Colors.red[500],
                  ),
                ),
              ],
            ),
          )
        ],
      ),
      Container(
        padding: const EdgeInsets.all(32),
        child: Column(
          children: [
            Text(
              movie.quote, // Replace with movie.quote
              softWrap: true,
            ),
            Text(
              'Starring: ${movie.actors.join(", ")}', // Replace with movie.actors
              style: TextStyle(
                color: Colors.grey[500],
              ),
            ),
            Text(
              'Director: ${movie.director}', // Replace with movie.director
              style: TextStyle(
                color: Colors.grey[500],
              ),
            ),
          ],
        ),
      ),
    ],
  );
}
