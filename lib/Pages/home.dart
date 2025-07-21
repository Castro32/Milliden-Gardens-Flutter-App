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
      
      appBar: const CustomAppBar(),
      endDrawer: const CustomDrawer(),
      // appBar: AppBar(
      //   backgroundColor: Color.fromARGB(255, 79, 79, 71),
      //   title: Row(
      //     children: [
      //       SizedBox(
      //         width: 50,
      //         child: Image.asset(
      //           "lib/assets/images/Logo.jpeg",
      //           width: 200,
      //           height: 200,
      //           fit: BoxFit.contain,
      //         ),
      //       ),
      //       const SizedBox(width: 10), 
      //       const Expanded(
      //         child: Text(
      //           "The Milliden Gardens",
      //           style: TextStyle(
      //             fontSize: 18,
      //             fontWeight: FontWeight.bold,
      //             color: Color(0xFFE6E5E3)
      //           ),
      //           maxLines: 2,
      //           overflow: TextOverflow.ellipsis,
      //         ),
      //       ),
      //       //Icon(Icons.menu, color: Color(0xFFE6E5E3),)
      //     ],
      //   ),
      // ),
      // endDrawer: Drawer( 
        
      //   backgroundColor: Color.fromARGB(255, 79, 79, 71),
      //   child: ListView(
      //     padding: EdgeInsets.zero,
      //     children: [
      //       DrawerHeader(
      //         decoration: BoxDecoration(
      //           color: Color.fromARGB(255, 224, 224, 223),
      //         ),
      //           margin: EdgeInsets.zero,
      //           padding: EdgeInsets.zero,
      //           child: Container(
      //             alignment: Alignment.center,
      //             height: 50, // Set your desired height here
      //             child: Text('Drawer Header'),
      //           ),
      //       ),
      //       ListTile(
      //         leading: const Icon(Icons.home, color: Color.fromARGB(255, 206, 37, 37)),
      //         title: const Text('Home'),
      //         onTap: () {
      //           Navigator.pop(context);
      //         },
      //       ),
      //       ListTile(
      //         leading: const Icon(Icons.book, color: Color.fromARGB(255, 206, 37, 37)),
      //         title: const Text('About Us'),
      //         onTap: () {
      //           Navigator.of(context).pop();
      //           Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => const AboutUs()));
      //         },
      //       ),
      //       ListTile(
      //         leading: const Icon(Icons.phone, color: Color.fromARGB(255, 206, 37, 37)),
      //         title: const Text('Contact Us'),
      //         onTap: () {
      //           Navigator.of(context).pop();
      //           Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => const AboutUs()));
      //         },
      //       ),
      //       ListTile(
      //         leading: const Icon(Icons.camera, color: Color.fromARGB(255, 206, 37, 37)),
      //         title: const Text('Gallery'),
      //         onTap: () {
      //           Navigator.of(context).pop();
      //           Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => const AboutUs()));
      //         },
      //       ),
      //       ListTile(
      //         leading: const Icon(Icons.room, color: Color.fromARGB(255, 206, 37, 37)),
      //         title: const Text('Rooms'),
      //         onTap: () {
      //           Navigator.of(context).pop();
      //           Navigator.pushReplacement(context, MaterialPageRoute(builder: (context) => const AboutUs()));
      //         },
      //       ),
      //     ],
      //   ),
      // ),
      body: SafeArea(
        child: MainLayout(), 
      ),
    );
  }
}