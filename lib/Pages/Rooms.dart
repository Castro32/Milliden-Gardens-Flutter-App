import 'package:flutter/material.dart';
import 'package:milliden_app/component/navbar.dart';

class Rooms extends StatelessWidget {
  const Rooms({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(),
      endDrawer: const CustomDrawer(),
      body: Container(
        color: Colors.amber[500],
        child: Center(
          child: Text(
            'Rooms Page',
            style: TextStyle(fontSize: 24, color: Colors.white),
          ),
        ),
      ),
    );
  }
}