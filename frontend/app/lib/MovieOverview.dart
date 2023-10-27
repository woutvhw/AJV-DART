import 'package:flutter/material.dart';
import 'MovieAdd.dart';

Color color = Colors.green;

class MovieOverview extends StatelessWidget {
  const MovieOverview({super.key});

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
        //TODO lijst ophalen van backend
        children: List.generate(3, (index) {
          return movieCard;
        }),
      ),
    );
  }
}

Widget movieCard = Column(
  children: [
    pictureSection,
    titleSection,
    dataSection,
    textSection,
  ],
);

Image pictureSection = Image.asset(
  'images/incredibles.jpeg',
  width: 600,
  height: 240,
  fit: BoxFit.cover,
);

Widget titleSection = Container(
  padding: const EdgeInsets.all(32),
  child: Row(
    children: [
      Expanded(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              padding: const EdgeInsets.only(bottom: 8),
              child: const Text(
                'The incredibles',
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
);

Column _buildButtonColumn(Color color, IconData icon, String label) {
  return Column(
    mainAxisSize: MainAxisSize.min,
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      Icon(icon, color: color),
      Container(
        margin: const EdgeInsets.only(top: 8),
        child: Text(
          label,
          style: TextStyle(
            fontSize: 12,
            fontWeight: FontWeight.w400,
            color: color,
          ),
        ),
      ),
    ],
  );
}

Widget dataSection = Row(
  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
  children: [
    const Text('115 min.'),
    const Text('2004'),
    RichText(
      text: TextSpan(
        children: [
          const TextSpan(text: '4,5'),
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
);

Widget textSection = Container(
    padding: const EdgeInsets.all(32),
    child: Column(
      children: [
        const Text(
          'While trying to lead a quiet suburban life, a family of undercover superheroes are forced into action to save the world.',
          softWrap: true,
        ),
        Text(
          'Starring: Craig T. Nelson, Holly Hunter and Sarah Vowell',
          style: TextStyle(
            color: Colors.grey[500],
          ),
        ),
        Text(
          'Director: Brad Bird',
          style: TextStyle(
            color: Colors.grey[500],
          ),
        ),
      ],
    ));
