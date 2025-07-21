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
      body: Container(
        color: Colors.amber[500],
        child: Center(
          child: Text(
            'Gallery Page',
            style: TextStyle(fontSize: 24, color: Colors.white),
          ),
        ),
      ),
    );
  }
}