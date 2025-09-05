// // // import 'package:flutter/material.dart';
// // // import 'package:milliden_app/component/navbar.dart';

// // // class AboutUs extends StatelessWidget {
// // //   const AboutUs({super.key});

// // //   @override
// // //   Widget build(BuildContext context) {
// // //     return Scaffold(
// // //       appBar: CustomAppBar(
// // //         onTap: () {
// // //           Navigator.pop(context); 
// // //         },
// // //       ),
// // //       endDrawer: const CustomDrawer(),
// // //       body: Stack(
// // //         children: [ 
// // //               Container(
// // //                 child: Image.asset(
// // //                     "lib/assets/images/l6.jpeg",
// // //                     width: double.infinity,
// // //                     height: 300,
// // //                     fit: BoxFit.cover,
// // //                   ),
// // //                 ),
// // //               Container( 
// // //                 alignment: Alignment.center,
// // //                 height: 300,
// // //                 child: Text(
// // //                   'About Us',
// // //                   style: TextStyle(color:Colors.white,
// // //                       fontWeight: FontWeight.bold,
// // //                       fontSize: 22.0),
// // //                 )
// // //               ),
// // //               Container( 
// // //                 alignment: Alignment.center,
// // //                 height: 350,
// // //                 child: Text(
// // //                   'Discover Who We Are and What We Do',
// // //                   style: TextStyle(color:Colors.white,
// // //                       fontWeight: FontWeight.bold,
// // //                       fontSize: 18.0),
// // //                 )
// // //               ),
// // //               Padding(
// // //                  padding: const EdgeInsets.only(left: 8.0),
// // //                 child: Container(
// // //                    padding: const EdgeInsets.only(left: 16.0),
// // //                   alignment: Alignment.centerLeft,
// // //                   height: 640,
// // //                   width: double.infinity,
// // //                   child: Text(
// // //                     "The Milliden Gardens",
// // //                     style: TextStyle(
// // //                       color: Color(0xFF393937),
// // //                       fontWeight: FontWeight.bold,
// // //                       fontSize: 20.0,
// // //                     ),
// // //                   ),
// // //                 ),
// // //               ),
// // //               Container(
// // //                 padding: const EdgeInsets.all(16.0),
// // //                 alignment: Alignment.center,
// // //                 height: 700,
// // //                 width: double.infinity,
// // //                 child: Text(
// // //                   'Welcome to The Milliden Gardens! We are dedicated to providing a serene and beautiful environment for all our visitors. Our gardens feature a variety of plants, flowers, and trees, creating a peaceful oasis in the heart of nature. Whether you are here to relax, take a stroll, or enjoy a picnic, we hope you find joy and tranquility in our gardens.',
// // //                   style: TextStyle(fontSize: 18, color: Colors.black87),
// // //                   textAlign: TextAlign.left,
// // //                 ),
// // //               )
// // //             ],
// // //       )
// // //     );
// // //   }
// // // }

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
// //       body: SingleChildScrollView(
// //         child: Column(
// //           children: [
// //             // Header Image with Overlay Text
// //             SizedBox(
// //               height: 300,
// //               width: double.infinity,
// //               child: Stack(
// //                 children: [
// //                   Image.asset(
// //                     "lib/assets/images/l6.jpeg",
// //                     width: double.infinity,
// //                     height: 300,
// //                     fit: BoxFit.cover,
// //                   ),
// //                   Container(
// //                     height: 300,
// //                     width: double.infinity,
// //                     color: Colors.black.withOpacity(0.3), 
// //                     child: Column(
// //                       mainAxisAlignment: MainAxisAlignment.center,
// //                       children: [
// //                         Text(
// //                           'About Us',
// //                           style: TextStyle(
// //                             color: Colors.white,
// //                             fontWeight: FontWeight.bold,
// //                             fontSize: 22.0,
// //                           ),
// //                         ),
// //                         SizedBox(height: 10),
// //                         Text(
// //                           'Discover Who We Are and What We Do',
// //                           style: TextStyle(
// //                             color: Colors.white,
// //                             fontWeight: FontWeight.bold,
// //                             fontSize: 18.0,
// //                           ),
// //                           textAlign: TextAlign.center,
// //                         ),
// //                       ],
// //                     ),
// //                   ),
// //                 ],
// //               ),
// //             ),
// //             Padding(
// //               padding: const EdgeInsets.all(8.0),
// //               child: Column(
// //                 crossAxisAlignment: CrossAxisAlignment.start,
// //                 children: [
// //                   SizedBox(height: 20),
// //                   Text(
// //                     "The Milliden Gardens",
// //                     style: TextStyle(
// //                       color: Color(0xFFA89284),
// //                       fontWeight: FontWeight.bold,
// //                       fontSize: 24.0,
// //                     ),
// //                   ),
// //                   SizedBox(
// //                     width: MediaQuery.of(context).size.width / 1,
// //                     child: Divider(
// //                       color: Color(0xFFA89284),
// //                       thickness: 4,
// //                       endIndent: 16,
                       
// //                     ),
// //                   ),
// //                   SizedBox(height: 16),
// //                   Text(
// //                     'Nestled just a few kilometers from Kabunde Airstrip along the Homabay-Rongo road, our castle combines accessibility with the seclusion of a private, serene environment. Surrounded by lush gardens and the breathtaking landscapes of Homabay County.',
// //                     style: TextStyle(
// //                       fontSize: 18,
// //                       color: Colors.black87,
// //                       height: 1.5, 
// //                     ),
// //                     textAlign: TextAlign.left,
// //                   ),
// //                   SizedBox(height: 20),
// //                 ],
// //               ),
// //             ),
// //             // Divider(
// //             //   color: Color(0xFFA89284),
// //             //   thickness: 4,
// //             //   indent: 16,
// //             //   endIndent: 16,
// //             // ),
// //             Padding(
// //               padding: const EdgeInsets.all(8.0),
// //               child: Column(
// //                 crossAxisAlignment: CrossAxisAlignment.start,
// //                 children: [
// //                   SizedBox(height: 20),
// //                   Text(
// //                     "Our Mission and Values",
// //                     style: TextStyle(
// //                       color: Color(0xFFA89284),
// //                       fontWeight: FontWeight.bold,
// //                       fontSize: 24.0,
// //                     ),
// //                   ),
// //                   Divider(
// //                     color: Color(0xFFA89284),
// //                     thickness: 4,
// //                     endIndent: 16,
// //                   ),
// //                   // SizedBox(height: 16),
// //                 ],
// //               ),
// //             ),
// //             SizedBox(
// //               child: Container(
// //                 padding: const EdgeInsets.all(16.0),
// //                 color: Color.fromRGBO(255, 255, 255, 1), // Light background for better readability
// //                 child: Padding(
// //                   padding: const EdgeInsets.all(6.0),
// //                   child: Column(
// //                     crossAxisAlignment: CrossAxisAlignment.start,
// //                     children: [
// //                       SizedBox(height: 20),
// //                       Text(
// //                         "Our Mission",
// //                         style: TextStyle(
// //                           color: Color(0xFFA89284),
// //                           fontWeight: FontWeight.bold,
// //                           fontSize: 24.0,
// //                         ),
// //                       ),
// //                       SizedBox(
// //                         width: MediaQuery.of(context).size.width / 1,
// //                         child: Divider(
// //                           color: Color.fromARGB(255, 235, 187, 157),
// //                           thickness: 4,
// //                           endIndent: 16,
                           
// //                         ),
// //                       ),
// //                       SizedBox(height: 16),
// //                       Container(
// //                         padding: const EdgeInsets.all(8.0),
// //                         alignment: Alignment.centerLeft,
                        
// //                         child: Text(
// //                           'Nestled just a few kilometers from Kabunde Airstrip along the Homabay-Rongo road, our castle combines accessibility with the seclusion of a private, serene environment. Surrounded by lush gardens and the breathtaking landscapes of Homabay County.',
// //                           style: TextStyle(
// //                             fontSize: 18,
// //                             color: Colors.black87,
// //                             height: 1.5, 
// //                           ),
// //                           textAlign: TextAlign.left,
// //                         ),
// //                       ),
// //                       SizedBox(height: 20),
// //                     ],
// //                   ),
                  
// //                 ),
// //               ),
              
// //             ),
// //             Container(
// //               padding: const EdgeInsets.all(8.0),
// //               color: Color.fromRGBO(255, 255, 255, 1),
// //               child: Padding(
// //                 padding: const EdgeInsets.all(8.0),
// //                 child: Column(
// //                   crossAxisAlignment: CrossAxisAlignment.start,
// //                   children: [
// //                     SizedBox(height: 20),
// //                     Text(
// //                       "Our Values",
// //                       style: TextStyle(
// //                         color: Color(0xFFA89284),
// //                         fontWeight: FontWeight.bold,
// //                         fontSize: 24.0,
// //                       ),
// //                     ),
// //                     SizedBox(height: 16),
// //                     Text(
// //                       'At The Milliden Gardens, we are committed to excellence, sustainability, and community engagement. Our gardens are designed to be a place of beauty and tranquility, where visitors can connect with nature and each other. We believe in preserving the natural environment while providing a welcoming space for all.',
// //                       style: TextStyle(
// //                         fontSize: 18,
// //                         color: Colors.black87,
// //                         height: 1.5, 
// //                       ),
// //                       textAlign: TextAlign.left,
// //                     ),
// //                   ],
// //                 ),
// //               ),
// //             ),
// //           ],
          
// //         ),
// //       ),
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
//                 ],
//               ),
//             ),
//             SizedBox(
//               child: Container(
//                 padding: const EdgeInsets.all(16.0),
//                 color: Color.fromRGBO(255, 255, 255, 1),
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
//             // CustomFooter(),
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
            _buildHeaderSection(),
            
            // Main Content
            _buildLocationSection(context),
            _buildMissionSection(context),
            _buildValuesSection(context),
            _buildTeamSection(),
            
            
            const SizedBox(height: 40),
            // CustomFooter(),
          ],
        ),
      ),
    );
  }

  Widget _buildHeaderSection() {
    return SizedBox(
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
            decoration: BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topCenter,
                end: Alignment.bottomCenter,
                colors: [
                  Colors.black.withOpacity(0.3),
                  Colors.black.withOpacity(0.5),
                ],
              ),
            ),
            child: const Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  'About Us',
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.bold,
                    fontSize: 28.0,
                    letterSpacing: 1.2,
                  ),
                ),
                SizedBox(height: 10),
                Padding(
                  padding: EdgeInsets.symmetric(horizontal: 20.0),
                  child: Text(
                    'Discover Who We Are and What We Do',
                    style: TextStyle(
                      color: Colors.white70,
                      fontWeight: FontWeight.w400,
                      fontSize: 18.0,
                    ),
                    textAlign: TextAlign.center,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildLocationSection(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(20.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const SizedBox(height: 20),
          _buildSectionTitle("The Milliden Gardens"),
          const SizedBox(height: 16),
          const Text(
            'Nestled just a few kilometers from Kabunde Airstrip along the Homabay-Rongo road, our castle combines accessibility with the seclusion of a private, serene environment. Surrounded by lush gardens and the breathtaking landscapes of Homabay County.',
            style: TextStyle(
              fontSize: 16,
              color: Colors.black87,
              height: 1.6,
            ),
            textAlign: TextAlign.left,
          ),
          const SizedBox(height: 30),
        ],
      ),
    );
  }

  Widget _buildMissionSection(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 20.0),
      padding: const EdgeInsets.all(24.0),
      decoration: BoxDecoration(
        color: const Color(0xFFF8F6F4),
        borderRadius: BorderRadius.circular(12.0),
        boxShadow: [
          BoxShadow(
            color: Colors.grey.withOpacity(0.1),
            spreadRadius: 1,
            blurRadius: 5,
            offset: const Offset(0, 2),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildSectionTitle("Our Mission"),
          const SizedBox(height: 16),
          const Text(
            'To create a sanctuary where nature\'s beauty meets exceptional hospitality. We strive to provide an unforgettable experience that connects our guests with the natural world while offering comfort, luxury, and personalized service in the heart of Homabay County.',
            style: TextStyle(
              fontSize: 16,
              color: Colors.black87,
              height: 1.6,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildValuesSection(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(20.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const SizedBox(height: 30),
          _buildSectionTitle("Our Core Values"),
          const SizedBox(height: 20),
          _buildValueItem(
            Icons.eco,
            "Sustainability",
            "Committed to preserving the natural environment and supporting eco-friendly practices.",
          ),
          _buildValueItem(
            Icons.star,
            "Excellence",
            "Delivering exceptional service and maintaining the highest standards in everything we do.",
          ),
          _buildValueItem(
            Icons.people,
            "Community",
            "Fostering connections with our local community and creating meaningful relationships.",
          ),
          _buildValueItem(
            Icons.favorite,
            "Hospitality",
            "Providing warm, genuine hospitality that makes every guest feel welcomed and valued.",
          ),
        ],
      ),
    );
  }

  Widget _buildValueItem(IconData icon, String title, String description) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 24.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: const EdgeInsets.all(12.0),
            decoration: BoxDecoration(
              color: const Color(0xFFA89284).withOpacity(0.1),
              borderRadius: BorderRadius.circular(50.0),
            ),
            child: Icon(
              icon,
              color: const Color(0xFFA89284),
              size: 24.0,
            ),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  title,
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFFA89284),
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  description,
                  style: const TextStyle(
                    fontSize: 14,
                    color: Colors.black87,
                    height: 1.5,
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildTeamSection() {
    return Container(
      margin: const EdgeInsets.all(20.0),
      padding: const EdgeInsets.all(24.0),
      decoration: BoxDecoration(
        color: const Color(0xFFA89284).withOpacity(0.05),
        borderRadius: BorderRadius.circular(12.0),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildSectionTitle("Our Team"),
          const SizedBox(height: 16),
          const Text(
            'Our dedicated team of hospitality professionals brings years of experience and passion for creating memorable experiences. From our gardens staff to our guest services team, everyone is committed to making your visit extraordinary.',
            style: TextStyle(
              fontSize: 16,
              color: Colors.black87,
              height: 1.6,
            ),
          ),
        ],
      ),
    );
  }



  Widget _buildSectionTitle(String title) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: const TextStyle(
            color: Color(0xFFA89284),
            fontWeight: FontWeight.bold,
            fontSize: 24.0,
          ),
        ),
        const SizedBox(height: 8),
        Container(
          height: 3,
          width: 50,
          decoration: BoxDecoration(
            color: const Color(0xFFA89284),
            borderRadius: BorderRadius.circular(2),
          ),
        ),
      ],
    );
  }
}