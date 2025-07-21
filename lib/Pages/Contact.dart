import 'package:flutter/material.dart';
import 'package:milliden_app/component/navbar.dart';

class Contact extends StatelessWidget {
  const Contact({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(),
      endDrawer: const CustomDrawer(),
      body: Container(
        color: Colors.amber[500],
        child: Center(
          child: Text(
            'Contact Page',
            style: TextStyle(fontSize: 24, color: Colors.white),
          ),
        ),
      ),
    );
  }
}