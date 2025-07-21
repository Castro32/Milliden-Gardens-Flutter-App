// import 'package:flutter/material.dart';
// import 'package:milliden_app/component/body.dart';
// import 'package:milliden_app/component/slider.dart';

// class MainLayout extends StatelessWidget {
//   const MainLayout({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return SingleChildScrollView(
//       child: Column(
//         children: [
//           MySlider(),
//           Expanded(child: myBody()) 
//         ],
//       ),
//     );
//   }
// }
import 'package:flutter/material.dart';
import 'package:milliden_app/component/body.dart';
import 'package:milliden_app/component/slider.dart';

class MainLayout extends StatelessWidget {
  const MainLayout({super.key});

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        children: [
          MySlider(),
          myBody()
        ],
      ),
    );
  }
}