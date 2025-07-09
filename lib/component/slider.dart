// // import 'package:flutter/material.dart';
// // import 'package:carousel_slider/carousel_slider.dart';

// // class Slider extends StatefulWidget {
// //   const Slider({super.key});

// //   @override
// //   State<Slider> createState() => _SliderState();
// // }

// // class _SliderState extends State<Slider> {
// //   final urlImages=[
// //     Image.asset("lib/assets/images/Logo.jpeg"),
// //     Image.asset("lib/assets/images/o1.jpeg"),
// //     Image.asset("lib/assets/images/l6.jpeg"),
// //     Image.asset("lib/assets/images/r1.jpeg"),
// //     Image.asset("lib/assets/images/lawn1.jpeg"),
// //     Image.asset("lib/assets/images/bake.png"),
// //     Image.asset("lib/assets/images/g7.jpeg")
// //   ];
// //   @override
// //   Widget build(BuildContext context) {
// //     return Center(
// //       child: CarouselSlider.builder(
// //         options: CarouselOptions(height: 400),
// //         itemCount: urlImages.length,
// //         itemBuilder: (context, index, realIndex) {
// //           final urlImage = urlImages[index];
// //         },
// //       ),
// //     );
// //   }
// // }
// import 'package:flutter/material.dart';
// import 'package:carousel_slider/carousel_slider.dart';

// class MySlider extends StatefulWidget {
//   const MySlider({super.key});

//   @override
//   State<MySlider> createState() => _SliderState();
// }

// class _SliderState extends State<MySlider> {
//   final urlImages=[
//     Image.network("https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXxlbnwwfHwwfHx8MA%3D%3D"),
//     Image.network("https://images.unsplash.com/photo-1522444195799-478538b28823?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D"),
//     Image.network("https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D"),
//     Image.network("https://plus.unsplash.com/premium_photo-1676321046449-5fc72b124490?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D"),
//     Image.asset("lib/assets/images/bake.png"),
//     Image.asset("lib/assets/images/g7.jpeg")
//   ];
//   @override
//   Widget build(BuildContext context) {
//   return Center(
//     child: CarouselSlider.builder(
//       options: CarouselOptions(
//         height: 200,
//         autoPlay: true,
//         enlargeCenterPage: true,
//         enableInfiniteScroll: true,
//         viewportFraction: 0.8,
//       ),
//       itemCount: urlImages.length,
//       itemBuilder: (context, index, realIndex) {
//         final urlImage = urlImages[index];
//         return Container(
//           margin: EdgeInsets.symmetric(horizontal: 5),
//           decoration: BoxDecoration(
//             borderRadius: BorderRadius.circular(10),
//           ),
//           child: ClipRRect(
//             borderRadius: BorderRadius.circular(10),
//             child: urlImage,
//           ),
//         );
//       },
//     ),
//   );
// }
// }
import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';

class MySlider extends StatefulWidget {
  const MySlider({super.key});

  @override
  State<MySlider> createState() => _SliderState();
}

class _SliderState extends State<MySlider> {
  final imageUrls = [
    // "lib/assets/images/Logo.jpeg",
    "lib/assets/images/o1.jpeg",
    "lib/assets/images/l6.jpeg",
    "lib/assets/images/r1.jpeg",
    "lib/assets/images/bake.png",
    "lib/assets/images/g7.jpeg"
  ];

  @override
  Widget build(BuildContext context) {
    return Center(
      child: CarouselSlider.builder(
        options: CarouselOptions(
          height: 200,
          autoPlay: true,
          enlargeCenterPage: true,
          enableInfiniteScroll: true,
          viewportFraction: 0.8, 
        ),
        itemCount: imageUrls.length,
        itemBuilder: (context, index, realIndex) {
          final imageUrl = imageUrls[index];
          return Padding(
            padding: const EdgeInsets.only(top: 10.0),
            child: Container(
              width: double.infinity,
              height: 1200,
              margin: const EdgeInsets.symmetric(horizontal: 5),
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(10),
              ),
              child: ClipRRect(
                borderRadius: BorderRadius.circular(10),
                child: imageUrl.startsWith('lib/assets/') 
                  ? Image.asset(
                      imageUrl,
                      width: double.infinity,
                      height: 200,
                      fit: BoxFit.cover,
                    )
                  : Image.network(
                      imageUrl,
                      width: double.infinity,
                      height: 200,
                      fit: BoxFit.cover,
                      errorBuilder: (context, error, stackTrace) {
                        return Container(
                          width: double.infinity,
                          height: 200,
                          color: Colors.grey[300],
                          child: const Icon(Icons.error, size: 50, color: Colors.red),
                        );
                      },
                      loadingBuilder: (context, child, loadingProgress) {
                        if (loadingProgress == null) return child;
                        return Container(
                          width: double.infinity,
                          height: 200,
                          color: Colors.grey[200],
                          child: Center(
                            child: CircularProgressIndicator(
                              value: loadingProgress.expectedTotalBytes != null
                                  ? loadingProgress.cumulativeBytesLoaded / loadingProgress.expectedTotalBytes!
                                  : null,
                            ),
                          ),
                        );
                      },
                    ),
              ),
            ),
          );
        },
      ),
    );
  }
}