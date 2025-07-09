import 'package:flutter/material.dart';
import 'package:milliden_app/component/body.dart';
import 'package:milliden_app/component/slider.dart';

class MainLayout extends StatelessWidget {
  const MainLayout({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      // children: [
      //   Image.asset("lib/assets/images/o1.jpeg")
      // ],
      children: [
        MySlider(),
        myBody()
      ],
    );
  }
}