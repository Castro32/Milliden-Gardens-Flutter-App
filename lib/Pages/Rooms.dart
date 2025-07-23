import 'package:flutter/material.dart';
import 'package:milliden_app/component/navbar.dart';

class Rooms extends StatelessWidget {
  const Rooms({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(),
      endDrawer: const CustomDrawer(),
      body: Stack(
        children: [
          Container(
            child: Image.asset(
              "lib/assets/images/lawn1.jpeg",
              width: double.infinity,
              height: 300,
              fit: BoxFit.cover,
            ),
          ),
          Container(
            alignment: Alignment.center,
            height: 300,
            child: Text(
              'Rooms',
              style: TextStyle(color: Colors.white,
                  fontWeight: FontWeight.bold,
                  fontSize: 22.0),
            )
          ),
          Container(
            alignment: Alignment.center,
            height: 350,
            child: Text(
              'Explore Our Comfortable Rooms',
              style: TextStyle(color: Colors.white,
                  fontWeight: FontWeight.bold,
                  fontSize: 22.0),
            )
          ),
        ],
      )
    );
  }
}