import 'package:flutter/material.dart';
import 'package:milliden_app/component/navbar.dart';

class Contact extends StatelessWidget {
  const Contact({super.key});

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
              'Contact Us',
              style: TextStyle(color: Colors.white,
                  fontWeight: FontWeight.bold,
                  fontSize: 22.0),
            )
          ),
          Container(
            alignment: Alignment.center,
            height: 350,
            child: Text(
              'Get in Touch with Us',
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