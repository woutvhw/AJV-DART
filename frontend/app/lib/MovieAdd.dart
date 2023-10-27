import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:multiselect_formfield/multiselect_formfield.dart';

class MovieAdd extends StatelessWidget {
  const MovieAdd({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Add a movie'),
      ),
      body: const MovieAddForm(),
    );
  }
}

class MovieAddForm extends StatefulWidget {
  const MovieAddForm({super.key});

  @override
  MovieAddFormState createState() {
    return MovieAddFormState();
  }
}

class MovieAddFormState extends State<MovieAddForm> {
  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    // Build a Form widget using the _formKey created above.
    return Form(
      key: _formKey,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 16),
            child: TextFormField(
              decoration: const InputDecoration(
                border: UnderlineInputBorder(),
                labelText: 'Enter title',
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 16),
            child: TextFormField(
              decoration: const InputDecoration(
                border: UnderlineInputBorder(),
                labelText: 'Enter year',
              ),
              inputFormatters: <TextInputFormatter>[
                FilteringTextInputFormatter.digitsOnly
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 16),
            child: TextFormField(
              decoration: const InputDecoration(
                border: UnderlineInputBorder(),
                labelText: 'Enter duration in minutes',
              ),
              inputFormatters: <TextInputFormatter>[
                FilteringTextInputFormatter.digitsOnly
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 16),
            child: TextFormField(
              decoration: const InputDecoration(
                border: UnderlineInputBorder(),
                labelText: 'Enter director',
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 16),
            child: TextFormField(
              decoration: const InputDecoration(
                border: UnderlineInputBorder(),
                labelText: 'Enter IMDB score',
              ),
              inputFormatters: <TextInputFormatter>[
                FilteringTextInputFormatter.digitsOnly
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 16),
            child: ElevatedButton(
              onPressed: () {
                // Validate returns true if the form is valid, or false otherwise.
                if (_formKey.currentState!.validate()) {
                  // If the form is valid, display a snackbar. In the real world,
                  // you'd often call a server or save the information in a database.
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('Processing Data')),
                  );
                }
              },
              child: const Text('Submit'),
            ),
          ),
        ],
      ),
    );
  }
}