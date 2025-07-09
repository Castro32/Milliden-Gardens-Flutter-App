import 'package:flutter/material.dart';
import 'package:milliden_app/component/main_layout.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      // appBar: AppBar(
      //   backgroundColor: Theme.of(context).colorScheme.inversePrimary,
      //   title: 
      //   Container(
      //     width: 50,
      //     child: Image.asset(
      //         "lib/assets/images/Logo.jpeg",
      //         width: 200,
      //         height: 200,
      //         fit: BoxFit.contain,
      //       ),
      //   ),              
      // ),
      // const Text(
      //   "Your App Name",
      //   style: TextStyle(
      //     fontSize: 18,
      //     fontWeight: FontWeight.bold,
      //   ),
      // ),
      appBar: AppBar(
        backgroundColor: Color.fromARGB(255, 79, 79, 71),
        title: Row(
          children: [
            SizedBox(
              width: 50,
              child: Image.asset(
                "lib/assets/images/Logo.jpeg",
                width: 200,
                height: 200,
                fit: BoxFit.contain,
              ),
            ),
            const SizedBox(width: 10), 
            const Expanded(
              child: Text(
                "The Milliden Gardens",
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: FontWeight.bold,
                  color: Color(0xFFE6E5E3)
                ),
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
              ),
            ),

            Icon(Icons.menu, color: Color(0xFFE6E5E3),)
          ],
        ),
      ),


      body: SafeArea(
        child: Column(
          children: [
            MainLayout()
          ],
        ),
      ),
    );
  }
}

Widget _buildTitle() => Text(
  "MainLayout()",
);