// // import 'package:flutter/material.dart';
// // import 'package:milliden_app/component/navbar.dart';

// // class AboutUs extends StatelessWidget {
// //   const AboutUs({super.key});

// //   @override
// //   Widget build(BuildContext context) {
// //     return Scaffold(
// //       appBar: CustomAppBar(
// //         onTap: () {
// //           Navigator.pop(context); 
// //         },
// //       ),
// //       endDrawer: const CustomDrawer(),
// //       body: Stack(
// //         children: [ 
// //               Container(
// //                 child: Image.asset(
// //                     "lib/assets/images/l6.jpeg",
// //                     width: double.infinity,
// //                     height: 300,
// //                     fit: BoxFit.cover,
// //                   ),
// //                 ),
// //               Container( 
// //                 alignment: Alignment.center,
// //                 height: 300,
// //                 child: Text(
// //                   'About Us',
// //                   style: TextStyle(color:Colors.white,
// //                       fontWeight: FontWeight.bold,
// //                       fontSize: 22.0),
// //                 )
// //               ),
// //               Container( 
// //                 alignment: Alignment.center,
// //                 height: 350,
// //                 child: Text(
// //                   'Discover Who We Are and What We Do',
// //                   style: TextStyle(color:Colors.white,
// //                       fontWeight: FontWeight.bold,
// //                       fontSize: 18.0),
// //                 )
// //               ),
// //               Padding(
// //                  padding: const EdgeInsets.only(left: 8.0),
// //                 child: Container(
// //                    padding: const EdgeInsets.only(left: 16.0),
// //                   alignment: Alignment.centerLeft,
// //                   height: 640,
// //                   width: double.infinity,
// //                   child: Text(
// //                     "The Milliden Gardens",
// //                     style: TextStyle(
// //                       color: Color(0xFF393937),
// //                       fontWeight: FontWeight.bold,
// //                       fontSize: 20.0,
// //                     ),
// //                   ),
// //                 ),
// //               ),
// //               Container(
// //                 padding: const EdgeInsets.all(16.0),
// //                 alignment: Alignment.center,
// //                 height: 700,
// //                 width: double.infinity,
// //                 child: Text(
// //                   'Welcome to The Milliden Gardens! We are dedicated to providing a serene and beautiful environment for all our visitors. Our gardens feature a variety of plants, flowers, and trees, creating a peaceful oasis in the heart of nature. Whether you are here to relax, take a stroll, or enjoy a picnic, we hope you find joy and tranquility in our gardens.',
// //                   style: TextStyle(fontSize: 18, color: Colors.black87),
// //                   textAlign: TextAlign.left,
// //                 ),
// //               )
// //             ],
// //       )
// //     );
// //   }
// // }

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
//       body: SingleChildScrollView(
//         child: Column(
//           children: [
//             // Header Image with Overlay Text
//             SizedBox(
//               height: 300,
//               width: double.infinity,
//               child: Stack(
//                 children: [
//                   Image.asset(
//                     "lib/assets/images/l6.jpeg",
//                     width: double.infinity,
//                     height: 300,
//                     fit: BoxFit.cover,
//                   ),
//                   Container(
//                     height: 300,
//                     width: double.infinity,
//                     color: Colors.black.withOpacity(0.3), 
//                     child: Column(
//                       mainAxisAlignment: MainAxisAlignment.center,
//                       children: [
//                         Text(
//                           'About Us',
//                           style: TextStyle(
//                             color: Colors.white,
//                             fontWeight: FontWeight.bold,
//                             fontSize: 22.0,
//                           ),
//                         ),
//                         SizedBox(height: 10),
//                         Text(
//                           'Discover Who We Are and What We Do',
//                           style: TextStyle(
//                             color: Colors.white,
//                             fontWeight: FontWeight.bold,
//                             fontSize: 18.0,
//                           ),
//                           textAlign: TextAlign.center,
//                         ),
//                       ],
//                     ),
//                   ),
//                 ],
//               ),
//             ),
//             Padding(
//               padding: const EdgeInsets.all(8.0),
//               child: Column(
//                 crossAxisAlignment: CrossAxisAlignment.start,
//                 children: [
//                   SizedBox(height: 20),
//                   Text(
//                     "The Milliden Gardens",
//                     style: TextStyle(
//                       color: Color(0xFFA89284),
//                       fontWeight: FontWeight.bold,
//                       fontSize: 24.0,
//                     ),
//                   ),
//                   SizedBox(
//                     width: MediaQuery.of(context).size.width / 1,
//                     child: Divider(
//                       color: Color(0xFFA89284),
//                       thickness: 4,
//                       endIndent: 16,
                       
//                     ),
//                   ),
//                   SizedBox(height: 16),
//                   Text(
//                     'Nestled just a few kilometers from Kabunde Airstrip along the Homabay-Rongo road, our castle combines accessibility with the seclusion of a private, serene environment. Surrounded by lush gardens and the breathtaking landscapes of Homabay County.',
//                     style: TextStyle(
//                       fontSize: 18,
//                       color: Colors.black87,
//                       height: 1.5, 
//                     ),
//                     textAlign: TextAlign.left,
//                   ),
//                   SizedBox(height: 20),
//                 ],
//               ),
//             ),
//             // Divider(
//             //   color: Color(0xFFA89284),
//             //   thickness: 4,
//             //   indent: 16,
//             //   endIndent: 16,
//             // ),
//             Padding(
//               padding: const EdgeInsets.all(8.0),
//               child: Column(
//                 crossAxisAlignment: CrossAxisAlignment.start,
//                 children: [
//                   SizedBox(height: 20),
//                   Text(
//                     "Our Mission and Values",
//                     style: TextStyle(
//                       color: Color(0xFFA89284),
//                       fontWeight: FontWeight.bold,
//                       fontSize: 24.0,
//                     ),
//                   ),
//                   Divider(
//                     color: Color(0xFFA89284),
//                     thickness: 4,
//                     endIndent: 16,
//                   ),
//                   // SizedBox(height: 16),
//                 ],
//               ),
//             ),
//             SizedBox(
//               child: Container(
//                 padding: const EdgeInsets.all(16.0),
//                 color: Color.fromRGBO(255, 255, 255, 1), // Light background for better readability
//                 child: Padding(
//                   padding: const EdgeInsets.all(6.0),
//                   child: Column(
//                     crossAxisAlignment: CrossAxisAlignment.start,
//                     children: [
//                       SizedBox(height: 20),
//                       Text(
//                         "Our Mission",
//                         style: TextStyle(
//                           color: Color(0xFFA89284),
//                           fontWeight: FontWeight.bold,
//                           fontSize: 24.0,
//                         ),
//                       ),
//                       SizedBox(
//                         width: MediaQuery.of(context).size.width / 1,
//                         child: Divider(
//                           color: Color.fromARGB(255, 235, 187, 157),
//                           thickness: 4,
//                           endIndent: 16,
                           
//                         ),
//                       ),
//                       SizedBox(height: 16),
//                       Container(
//                         padding: const EdgeInsets.all(8.0),
//                         alignment: Alignment.centerLeft,
                        
//                         child: Text(
//                           'Nestled just a few kilometers from Kabunde Airstrip along the Homabay-Rongo road, our castle combines accessibility with the seclusion of a private, serene environment. Surrounded by lush gardens and the breathtaking landscapes of Homabay County.',
//                           style: TextStyle(
//                             fontSize: 18,
//                             color: Colors.black87,
//                             height: 1.5, 
//                           ),
//                           textAlign: TextAlign.left,
//                         ),
//                       ),
//                       SizedBox(height: 20),
//                     ],
//                   ),
                  
//                 ),
//               ),
              
//             ),
//             Container(
//               padding: const EdgeInsets.all(8.0),
//               color: Color.fromRGBO(255, 255, 255, 1),
//               child: Padding(
//                 padding: const EdgeInsets.all(8.0),
//                 child: Column(
//                   crossAxisAlignment: CrossAxisAlignment.start,
//                   children: [
//                     SizedBox(height: 20),
//                     Text(
//                       "Our Values",
//                       style: TextStyle(
//                         color: Color(0xFFA89284),
//                         fontWeight: FontWeight.bold,
//                         fontSize: 24.0,
//                       ),
//                     ),
//                     SizedBox(height: 16),
//                     Text(
//                       'At The Milliden Gardens, we are committed to excellence, sustainability, and community engagement. Our gardens are designed to be a place of beauty and tranquility, where visitors can connect with nature and each other. We believe in preserving the natural environment while providing a welcoming space for all.',
//                       style: TextStyle(
//                         fontSize: 18,
//                         color: Colors.black87,
//                         height: 1.5, 
//                       ),
//                       textAlign: TextAlign.left,
//                     ),
//                   ],
//                 ),
//               ),
//             ),
//           ],
          
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
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Header Image with Overlay Text
            SizedBox(
              height: 300,
              width: double.infinity,
              child: Stack(
                children: [
                  Image.asset(
                    "lib/assets/images/l6.jpeg",
                    width: double.infinity,
                    height: 300,
                    fit: BoxFit.cover,
                  ),
                  Container(
                    height: 300,
                    width: double.infinity,
                    color: Colors.black.withOpacity(0.3), 
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(
                          'About Us',
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.bold,
                            fontSize: 22.0,
                          ),
                        ),
                        SizedBox(height: 10),
                        Text(
                          'Discover Who We Are and What We Do',
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.bold,
                            fontSize: 18.0,
                          ),
                          textAlign: TextAlign.center,
                        ),
                      ],
                    ),
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  SizedBox(height: 20),
                  Text(
                    "The Milliden Gardens",
                    style: TextStyle(
                      color: Color(0xFFA89284),
                      fontWeight: FontWeight.bold,
                      fontSize: 24.0,
                    ),
                  ),
                  SizedBox(
                    width: MediaQuery.of(context).size.width / 1,
                    child: Divider(
                      color: Color(0xFFA89284),
                      thickness: 4,
                      endIndent: 16,
                       
                    ),
                  ),
                  SizedBox(height: 16),
                  Text(
                    'Nestled just a few kilometers from Kabunde Airstrip along the Homabay-Rongo road, our castle combines accessibility with the seclusion of a private, serene environment. Surrounded by lush gardens and the breathtaking landscapes of Homabay County.',
                    style: TextStyle(
                      fontSize: 18,
                      color: Colors.black87,
                      height: 1.5, 
                    ),
                    textAlign: TextAlign.left,
                  ),
                  SizedBox(height: 20),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  SizedBox(height: 20),
                  Text(
                    "Our Mission and Values",
                    style: TextStyle(
                      color: Color(0xFFA89284),
                      fontWeight: FontWeight.bold,
                      fontSize: 24.0,
                    ),
                  ),
                  Divider(
                    color: Color(0xFFA89284),
                    thickness: 4,
                    endIndent: 16,
                  ),
                ],
              ),
            ),
            SizedBox(
              child: Container(
                padding: const EdgeInsets.all(16.0),
                color: Color.fromRGBO(255, 255, 255, 1),
                child: Padding(
                  padding: const EdgeInsets.all(6.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      SizedBox(height: 20),
                      Text(
                        "Our Mission",
                        style: TextStyle(
                          color: Color(0xFFA89284),
                          fontWeight: FontWeight.bold,
                          fontSize: 24.0,
                        ),
                      ),
                      SizedBox(
                        width: MediaQuery.of(context).size.width / 1,
                        child: Divider(
                          color: Color.fromARGB(255, 235, 187, 157),
                          thickness: 4,
                          endIndent: 16,
                        ),
                      ),
                      SizedBox(height: 16),
                      Container(
                        padding: const EdgeInsets.all(8.0),
                        alignment: Alignment.centerLeft,
                        child: Text(
                          'Nestled just a few kilometers from Kabunde Airstrip along the Homabay-Rongo road, our castle combines accessibility with the seclusion of a private, serene environment. Surrounded by lush gardens and the breathtaking landscapes of Homabay County.',
                          style: TextStyle(
                            fontSize: 18,
                            color: Colors.black87,
                            height: 1.5, 
                          ),
                          textAlign: TextAlign.left,
                        ),
                      ),
                      SizedBox(height: 20),
                    ],
                  ),
                ),
              ),
            ),
            Container(
              padding: const EdgeInsets.all(8.0),
              color: Color.fromRGBO(255, 255, 255, 1),
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    SizedBox(height: 20),
                    Text(
                      "Our Values",
                      style: TextStyle(
                        color: Color(0xFFA89284),
                        fontWeight: FontWeight.bold,
                        fontSize: 24.0,
                      ),
                    ),
                    SizedBox(height: 16),
                    Text(
                      'At The Milliden Gardens, we are committed to excellence, sustainability, and community engagement. Our gardens are designed to be a place of beauty and tranquility, where visitors can connect with nature and each other. We believe in preserving the natural environment while providing a welcoming space for all.',
                      style: TextStyle(
                        fontSize: 18,
                        color: Colors.black87,
                        height: 1.5, 
                      ),
                      textAlign: TextAlign.left,
                    ),
                  ],
                ),
              ),
            ),
            // CustomFooter(),
          ],
        ),
      ),
    );
  }
}