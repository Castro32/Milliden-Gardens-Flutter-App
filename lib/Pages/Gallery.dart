// ignore: file_names
import 'package:flutter/material.dart';
import 'package:milliden_app/component/navbar.dart';

class Gallery extends StatelessWidget {
  const Gallery({super.key});

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
              'Gallery',
              style: TextStyle(color: Colors.white,
                  fontWeight: FontWeight.bold,
                  fontSize: 22.0),
            )
          ),
          Container(
            alignment: Alignment.center,
            height: 350,
            child: Text(
              'Explore Our Beautiful Gallery',
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