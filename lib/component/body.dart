import 'package:flutter/material.dart';

// ignore: camel_case_types
class myBody extends StatelessWidget {
  const myBody({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
            // ignore: avoid_unnecessary_containers
            Container(
              decoration: BoxDecoration(
                color: Color.fromARGB(255, 196, 172, 157),
                borderRadius: BorderRadius.circular(10),
                boxShadow: [
                  BoxShadow(
                    color: Colors.grey,
                    blurRadius:0.2,
                    offset: Offset(1.0, 1.0),
                  ),
                ],
              ),
              padding: const EdgeInsets.all(8.0),
              child: Text(
                "Curated Experiences at The Milliden Gardens",
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 16.5,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
              ),
            ),
          // Text(
          //   'Tailored Moments, Timeless Memories',
          //   textAlign: TextAlign.start,
          //   style: Theme.of(context).textTheme.headlineSmall?.copyWith(
          //     fontWeight: FontWeight.bold,
          //     color: Colors.black87,
          //   ),
          // ),
          const SizedBox(height: 16.0),
          Text(
            'Each moment at our retreat is crafted with intention—balancing luxury, nature, and authentic experiences that resonate with the soul.',
            style: Theme.of(context).textTheme.headlineSmall?.copyWith(
              color: Colors.black54,
            ),
          ),
          const SizedBox(height: 20.0),
          // Add more widgets here as need ed
          Image.asset(
            "lib/assets/images/r1.jpeg"
          )
        ],
      ),
    );
  }
}