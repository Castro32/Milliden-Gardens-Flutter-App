// import 'package:flutter/material.dart';
// import 'package:milliden_app/component/navbar.dart';

// class Gallery extends StatelessWidget {
//    Gallery({super.key});
//   final List<String> imageUrls = [
//     "lib/assets/images/Logo.jpeg"
//     "lib/assets/images/o1.jpeg"
//     "lib/assets/images/l6.jpeg"
//     "lib/assets/images/r1.jpeg"
//     "lib/assets/images/lawn1.jpeg"
//     "lib/assets/images/bake.png"
//     "lib/assets/images/g7.jpeg"
//     "lib/assets/images/r1.png"
//     "lib/assets/images/i3.png"
//     "lib/assets/images/i2.png"
//     "lib/assets/images/i1.png"
//   ];

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: CustomAppBar(),
//       endDrawer: const CustomDrawer(),
//       body: Stack(
//         children: [
//           Container(
//             child: Image.asset(
//               "lib/assets/images/i3.png",
//               width: double.infinity,
//               height: 300,
//               fit: BoxFit.cover,
//             ),
//           ),
//           Container(
//             alignment: Alignment.center,
//             height: 300,
//             child: Text(
//               'Gallery',
//               style: TextStyle(color: Colors.white,
//                   fontWeight: FontWeight.bold,
//                   fontSize: 22.0),
//             )
//           ),
//           Container(
//             alignment: Alignment.center,
//             height: 350,
//             child: Text(
//               'Discover the beauty and experiences at Milliden Gardens',
//               style: TextStyle(color: Colors.white,
//                   fontWeight: FontWeight.bold,
//                   fontSize: 18.0),
//             )
//           ),
//           GridView.builder(
//           gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
//             crossAxisCount: 3, // Number of columns
//             crossAxisSpacing: 4.0,
//             mainAxisSpacing: 4.0,
//           ),
//           itemCount: imageUrls.length,
//           itemBuilder: (context, index) {
//             return Image.asset(
//               imageUrls[index],
//               fit: BoxFit.cover,
//               // Consider using CachedNetworkImage for better performance
//               // child: CachedNetworkImage(
//               //   imageUrl: imageUrls[index],
//               //   placeholder: (context, url) => CircularProgressIndicator(),
//               //   errorWidget: (context, url, error) => Icon(Icons.error),
//               // ),
//             );
//           },
//         ),
//         ],
//       )
//     );
//   }
// }
import 'package:flutter/material.dart';
import 'package:milliden_app/component/navbar.dart';

class Gallery extends StatelessWidget {
  Gallery({super.key});
  
  final List<String> imageUrls = [
    "lib/assets/images/o1.jpeg",
    "lib/assets/images/l6.jpeg",
    "lib/assets/images/r1.jpeg",
    "lib/assets/images/lawn1.jpeg",
    "lib/assets/images/bake.png",
    "lib/assets/images/g7.jpeg",
    "lib/assets/images/r1.png",
    "lib/assets/images/i3.png",
    "lib/assets/images/i2.png",
    "lib/assets/images/i1.png",
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(),
      endDrawer: const CustomDrawer(),
      body: Column(
        children: [
          // Header section with background image and text
          Container(
            height: 300,
            width: double.infinity,
            child: Stack(
              children: [
                Image.asset(
                  "lib/assets/images/i3.png",
                  width: double.infinity,
                  height: 300,
                  fit: BoxFit.cover,
                ),
                Container(
                  width: double.infinity,
                  height: 300,
                  decoration: BoxDecoration(
                    color: Colors.black.withOpacity(0.3), // Optional overlay for better text visibility
                  ),
                ),
                Center(
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        'Gallery',
                        style: TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.bold,
                          fontSize: 22.0,
                        ),
                      ),
                      SizedBox(height: 10),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 20.0),
                        child: Text(
                          'Discover the beauty and experiences at Milliden Gardens',
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.bold,
                            fontSize: 18.0,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          Center(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'Gallery',
                    style: TextStyle(
                      color: Colors.black,
                      fontWeight: FontWeight.bold,
                      fontSize: 22.0,
                    ),
                  ),
                  SizedBox(height: 10),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 20.0),
                    child: Text(
                      'Discover the beauty and experiences at Milliden Gardens',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        color: Colors.black,
                        fontWeight: FontWeight.bold,
                        fontSize: 18.0,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          
          Expanded(
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: GridView.builder(
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2,
                  crossAxisSpacing: 4.0,
                  mainAxisSpacing: 4.0,
                ),
                itemCount: imageUrls.length,
                itemBuilder: (context, index) {
                  return ClipRRect(
                    borderRadius: BorderRadius.circular(8.0),
                    child: Image.asset(
                      imageUrls[index],
                      fit: BoxFit.cover,
                      errorBuilder: (context, error, stackTrace) {
                        return Container(
                          color: Colors.grey[300],
                          child: Icon(
                            Icons.image_not_supported,
                            color: Colors.grey[600],
                          ),
                        );
                      },
                    ),
                  );
                },
              ),
            ),
            
          ),
        ],
      ),
    );
  }
}