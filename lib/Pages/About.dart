// import 'package:flutter/material.dart';
// import 'package:milliden_app/component/navbar.dart';

// class AboutUs extends StatelessWidget {
//   const AboutUs({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: CustomAppBar(
//         onTap: () {
//           Navigator.pop(context); 
//         },
//       ),
//       endDrawer: const CustomDrawer(),
//       body: Container(
//         color: Color(0xFFD6D5D3),
//         child: Center(
//           child: Column(
//             mainAxisSize: MainAxisSize.min,
//             children: [
//               Image.asset(
//                 "lib/assets/images/r1.jpeg",
//                 width: double.infinity,
//                 height: 600,
//                 fit: BoxFit.cover,
//               ),
//               Padding(
//                 padding: const EdgeInsets.all(16.0),
//                 child: Text(
//                   'Welcome to The Milliden Gardens! We are dedicated to providing a serene and beautiful environment for all our visitors. Our gardens feature a variety of plants, flowers, and trees, creating a peaceful oasis in the heart of nature. Whether you are here to relax, take a stroll, or enjoy a picnic, we hope you find joy and tranquility in our gardens.',
//                   style: TextStyle(fontSize: 18, color: Colors.black87),
//                   textAlign: TextAlign.center,
//                 ),
//               ),
//             ],
//           ),
//         ),
//       ),
//     );
//   }
// }
import 'package:flutter/material.dart';
import 'package:milliden_app/component/navbar.dart';

class AboutUs extends StatelessWidget {
  const AboutUs({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(
        onTap: () {
          Navigator.pop(context); 
        },
      ),
      endDrawer: const CustomDrawer(),
      body: Stack(
        children: [ 
              Container(
                child: Image.asset(
                    "lib/assets/images/l6.jpeg",
                    width: double.infinity,
                    height: 300,
                    fit: BoxFit.cover,
                  ),
                ),
              Container( 
                alignment: Alignment.center,
                height: 300,
                child: Text(
                  'About Us',
                  style: TextStyle(color:Colors.white,
                      fontWeight: FontWeight.bold,
                      fontSize: 22.0),
                )
              ),
              Container( 
                alignment: Alignment.center,
                height: 350,
                child: Text(
                  'Discover Who We Are and What We Do',
                  style: TextStyle(color:Colors.white,
                      fontWeight: FontWeight.bold,
                      fontSize: 22.0),
                )
              ),
            ],
      )
    );
  }
}

