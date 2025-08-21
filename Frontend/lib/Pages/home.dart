// import 'package:flutter/material.dart';
// import 'package:milliden_app/component/main_layout.dart';
// import 'package:milliden_app/component/navbar.dart';

// class Home extends StatefulWidget {
//   final void Function()? onTap;
//   const Home({super.key, this.onTap});

//   @override
//   State<Home> createState() => _HomeState();
// }

// class _HomeState extends State<Home> {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
      
//       appBar: const CustomAppBar(),
//       endDrawer: const CustomDrawer(),
//       body: SafeArea(
//         child: MainLayout(), 
//       ),
//     );
//   }
// }
import 'package:flutter/material.dart';
import 'package:milliden_app/component/main_layout.dart';
import 'package:milliden_app/component/navbar.dart';

class Home extends StatefulWidget {
  final void Function()? onTap;
  const Home({super.key, this.onTap});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFFFAF9F7),
      appBar: const CustomAppBar(),
      endDrawer: const CustomDrawer(),
      body: const SafeArea(
        child: MainLayout(),
      ),
    );
  }
}