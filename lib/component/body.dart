// import 'package:flutter/material.dart';

// // ignore: camel_case_types
// class myBody extends StatelessWidget {
//   const myBody({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return Container(
//       color: const Color.fromARGB(255, 244, 239, 239),  //gray: "#3D3D3D",
//       padding: const EdgeInsets.all(16.0),
//       margin: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
//       width: double.infinity,
//       child: Column(
//         crossAxisAlignment: CrossAxisAlignment.start,
//         children: [
//             // ignore: avoid_unnecessary_containers
//             Container(
//               decoration: BoxDecoration(
//                 color: Color.fromARGB(255, 196, 172, 157),
//                 borderRadius: BorderRadius.circular(8),
//                 boxShadow: [
//                   BoxShadow(
//                     color: Colors.grey,
//                     blurRadius:0.2,
//                     offset: Offset(1.0, 1.0),
//                   ),
//                 ],
//               ),
//               padding: const EdgeInsets.all(8.0),
//               child: Text(
//                 "Curated Experiences at The Milliden Gardens",
//                 textAlign: TextAlign.center,
//                 style: TextStyle(
//                   fontSize: 16.5,
//                   fontWeight: FontWeight.bold,
//                   color: Colors.white,
//                 ),
//               ),
//             ),
//           // Text(
//           //   'Tailored Moments, Timeless Memories',
//           //   textAlign: TextAlign.start,
//           //   style: Theme.of(context).textTheme.headlineSmall?.copyWith(
//           //     fontWeight: FontWeight.bold,
//           //     color: Colors.black87,
//           //   ),
//           // ),
//           const SizedBox(height: 16.0),
//           Text(
//             'Each moment at our retreat is crafted with intention—balancing luxury, nature, and authentic experiences that resonate with the soul.',
//             style: TextStyle(
//               color: Colors.black54,
//               fontWeight: FontWeight.w400,
//               fontSize: 16.0,
//             ),
//           ),
//           const SizedBox(height: 20.0),
//           // Add more widgets here as need ed
//           // Image.asset(
//           //   "lib/assets/images/r1.jpeg"
//           // )
//           Container(
//             decoration: BoxDecoration(
//               color: Color.fromARGB(255, 196, 172, 157),
//               borderRadius: BorderRadius.circular(8),
//               boxShadow: [
//                 BoxShadow(
//                   color: Colors.grey,
//                   blurRadius: 0.2,
//                   offset: Offset(1.0, 1.0),
//                 ),
//               ],
//             ),
//             child: Column(
//               children: [
//                 Image.asset(
//                   "lib/assets/images/r1.jpeg",
//                   width: double.infinity,
//                   height: 200,
//                   fit: BoxFit.cover,
//                 ),
//                 const SizedBox(height: 8.0),
//                 Text(
//                   "Transform ordinary moments into extraordinary memories with our tailored event packages. From sunset ceremonies to corporate gatherings under the stars.",
//                   textAlign: TextAlign.center,
//                   style: TextStyle(
//                     fontSize: 16.5,
//                     fontWeight: FontWeight.bold,
//                     color: Colors.black87,
//                   ),
//                 ),
//               ],
//             ),
//           )
//         ],
//       ),
//     );
//   }
// }
import 'package:flutter/material.dart';

class myBody extends StatelessWidget {
  const myBody({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      color: const Color.fromARGB(255, 244, 239, 239),
      padding: const EdgeInsets.all(16.0),
      margin: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
      width: double.infinity,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            decoration: BoxDecoration(
              color: Color.fromARGB(255, 196, 172, 157),
              borderRadius: BorderRadius.circular(8),
              boxShadow: [
                BoxShadow(
                  color: Colors.grey,
                  blurRadius: 0.2,
                  offset: Offset(1.0, 1.0),
                ),
              ],
            ),
            padding: const EdgeInsets.all(8.0),
            child: Text(
              "Curated Experiences at The Milliden Gardens",
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: 16.5,
                fontWeight: FontWeight.bold,
                color: Colors.white,
              ),
            ),
          ),
          const SizedBox(height: 16.0),
          Text(
            'Each moment at our retreat is crafted with intention—balancing luxury, nature, and authentic experiences that resonate with the soul.',
            style: TextStyle(
              color: Colors.black54,
              fontWeight: FontWeight.w400,
              fontSize: 16.0,
            ),
          ),
          const SizedBox(height: 20.0),

          Divider(
            color: Colors.grey,
            thickness: 0.5,
          ),
          Container(
            decoration: BoxDecoration(
              color: Color.fromARGB(255, 196, 172, 157),
              borderRadius: BorderRadius.circular(8),
              boxShadow: [
                BoxShadow(
                  color: Colors.grey,
                  blurRadius: 0.2,
                  offset: Offset(1.0, 1.0),
                ),
              ],
            ),
            child: Column(
              children: [
                Image.asset(
                  "lib/assets/images/r1.jpeg",
                  width: double.infinity,
                  height: 200,
                  fit: BoxFit.cover,
                ),
                const SizedBox(height: 8.0),
                Text(
                  "Transform ordinary moments into extraordinary memories with our tailored event packages. From sunset ceremonies to corporate gatherings under the stars.",
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: 16.5,
                    fontWeight: FontWeight.bold,
                    color: Colors.black87,
                  ),
                ),
                Image.asset(
                  "lib/assets/images/r1.jpeg",
                  width: double.infinity,
                  height: 200,
                  fit: BoxFit.cover,
                ),
                const SizedBox(height: 8.0),
                Text(
                  "Transform ordinary moments into extraordinary memories with our tailored event packages. From sunset ceremonies to corporate gatherings under the stars.",
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    fontSize: 16.5,
                    fontWeight: FontWeight.bold,
                    color: Colors.black87,
                  ),
                ),
              ],
            ),
          )
        ],
      ),
    );
  }
}