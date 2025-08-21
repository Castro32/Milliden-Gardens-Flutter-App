// // // import 'package:flutter/material.dart';
// // // import 'package:carousel_slider/carousel_slider.dart';

// // // class Slider extends StatefulWidget {
// // //   const Slider({super.key});

// // //   @override
// // //   State<Slider> createState() => _SliderState();
// // // }

// // // class _SliderState extends State<Slider> {
// // //   final urlImages=[
// // //     Image.asset("lib/assets/images/Logo.jpeg"),
// // //     Image.asset("lib/assets/images/o1.jpeg"),
// // //     Image.asset("lib/assets/images/l6.jpeg"),
// // //     Image.asset("lib/assets/images/r1.jpeg"),
// // //     Image.asset("lib/assets/images/lawn1.jpeg"),
// // //     Image.asset("lib/assets/images/bake.png"),
// // //     Image.asset("lib/assets/images/g7.jpeg")
// // //   ];
// // //   @override
// // //   Widget build(BuildContext context) {
// // //     return Center(
// // //       child: CarouselSlider.builder(
// // //         options: CarouselOptions(height: 400),
// // //         itemCount: urlImages.length,
// // //         itemBuilder: (context, index, realIndex) {
// // //           final urlImage = urlImages[index];
// // //         },
// // //       ),
// // //     );
// // //   }
// // // }
// // import 'package:flutter/material.dart';
// // import 'package:carousel_slider/carousel_slider.dart';

// // class MySlider extends StatefulWidget {
// //   const MySlider({super.key});

// //   @override
// //   State<MySlider> createState() => _SliderState();
// // }

// // class _SliderState extends State<MySlider> {
// //   final urlImages=[
// //     Image.network("https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXxlbnwwfHwwfHx8MA%3D%3D"),
// //     Image.network("https://images.unsplash.com/photo-1522444195799-478538b28823?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D"),
// //     Image.network("https://plus.unsplash.com/premium_photo-1661964014750-963a28aeddea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D"),
// //     Image.network("https://plus.unsplash.com/premium_photo-1676321046449-5fc72b124490?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHx8MA%3D%3D"),
// //     Image.asset("lib/assets/images/bake.png"),
// //     Image.asset("lib/assets/images/g7.jpeg")
// //   ];
// //   @override
// //   Widget build(BuildContext context) {
// //   return Center(
// //     child: CarouselSlider.builder(
// //       options: CarouselOptions(
// //         height: 200,
// //         autoPlay: true,
// //         enlargeCenterPage: true,
// //         enableInfiniteScroll: true,
// //         viewportFraction: 0.8,
// //       ),
// //       itemCount: urlImages.length,
// //       itemBuilder: (context, index, realIndex) {
// //         final urlImage = urlImages[index];
// //         return Container(
// //           margin: EdgeInsets.symmetric(horizontal: 5),
// //           decoration: BoxDecoration(
// //             borderRadius: BorderRadius.circular(10),
// //           ),
// //           child: ClipRRect(
// //             borderRadius: BorderRadius.circular(10),
// //             child: urlImage,
// //           ),
// //         );
// //       },
// //     ),
// //   );
// // }
// // }
// import 'package:flutter/material.dart';
// import 'package:carousel_slider/carousel_slider.dart';

// class MySlider extends StatefulWidget {
//   const MySlider({super.key});

//   @override
//   State<MySlider> createState() => _SliderState();
// }

// class _SliderState extends State<MySlider> {
//   final imageUrls = [
//     // "lib/assets/images/Logo.jpeg",
//     "lib/assets/images/o1.jpeg",
//     "lib/assets/images/l6.jpeg",
//     "lib/assets/images/r1.jpeg",
//     "lib/assets/images/bake.png",
//     "lib/assets/images/g7.jpeg"
//   ];

//   @override
//   Widget build(BuildContext context) {
//     return Center(
//       child: CarouselSlider.builder(
//         options: CarouselOptions(
//           height: 200,
//           autoPlay: true,
//           enlargeCenterPage: true,
//           enableInfiniteScroll: true,
//           viewportFraction: 0.8, 
//         ),
//         itemCount: imageUrls.length,
//         itemBuilder: (context, index, realIndex) {
//           final imageUrl = imageUrls[index];
//           return Padding(
//             padding: const EdgeInsets.only(top: 10.0),
//             child: Container(
//               width: double.infinity,
//               height: 1200,
//               margin: const EdgeInsets.symmetric(horizontal: 5),
//               decoration: BoxDecoration(
//                 borderRadius: BorderRadius.circular(10),
//               ),
//               child: ClipRRect(
//                 borderRadius: BorderRadius.circular(10),
//                 child: imageUrl.startsWith('lib/assets/') 
//                   ? Image.asset(
//                       imageUrl,
//                       width: double.infinity,
//                       height: 200,
//                       fit: BoxFit.cover,
//                     )
//                   : Image.network(
//                       imageUrl,
//                       width: double.infinity,
//                       height: 200,
//                       fit: BoxFit.cover,
//                       errorBuilder: (context, error, stackTrace) {
//                         return Container(
//                           width: double.infinity,
//                           height: 200,
//                           color: Colors.grey[300],
//                           child: const Icon(Icons.error, size: 50, color: Colors.red),
//                         );
//                       },
//                       loadingBuilder: (context, child, loadingProgress) {
//                         if (loadingProgress == null) return child;
//                         return Container(
//                           width: double.infinity,
//                           height: 200,
//                           color: Colors.grey[200],
//                           child: Center(
//                             child: CircularProgressIndicator(
//                               value: loadingProgress.expectedTotalBytes != null
//                                   ? loadingProgress.cumulativeBytesLoaded / loadingProgress.expectedTotalBytes!
//                                   : null,
//                             ),
//                           ),
//                         );
//                       },
//                     ),
//               ),
//             ),
//           );
//         },
//       ),
//     );
//   }
// }
import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';

class MySlider extends StatefulWidget {
  const MySlider({super.key});

  @override
  State<MySlider> createState() => _SliderState();
}

class _SliderState extends State<MySlider> {
  int _currentIndex = 0;
  final CarouselSliderController _carouselController = CarouselSliderController();

  final List<SlideData> _slides = [
    SlideData(
      imagePath: "lib/assets/images/o1.jpeg",
      title: "Organic Gardens",
      subtitle: "Farm-to-table dining experience",
    ),
    SlideData(
      imagePath: "lib/assets/images/l6.jpeg",
      title: "Luxury Accommodation",
      subtitle: "Comfort meets nature",
    ),
    SlideData(
      imagePath: "lib/assets/images/r1.jpeg",
      title: "Relaxation Spaces",
      subtitle: "Peaceful retreat areas",
    ),
    SlideData(
      imagePath: "lib/assets/images/bake.png",
      title: "Artisan Bakery",
      subtitle: "Fresh daily preparations",
    ),
    SlideData(
      imagePath: "lib/assets/images/g7.jpeg",
      title: "Garden Views",
      subtitle: "Breathtaking landscapes",
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 20),
      child: Column(
        children: [
          CarouselSlider.builder(
            carouselController: _carouselController,
            options: CarouselOptions(
              height: 280,
              autoPlay: true,
              autoPlayInterval: const Duration(seconds: 4),
              autoPlayAnimationDuration: const Duration(milliseconds: 800),
              enlargeCenterPage: true,
              enableInfiniteScroll: true,
              viewportFraction: 0.85,
              onPageChanged: (index, reason) {
                setState(() {
                  _currentIndex = index;
                });
              },
            ),
            itemCount: _slides.length,
            itemBuilder: (context, index, realIndex) {
              final slide = _slides[index];
              return _buildSlideItem(slide, index);
            },
          ),
          const SizedBox(height: 16),
          _buildIndicators(),
        ],
      ),
    );
  }

  Widget _buildSlideItem(SlideData slide, int index) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 8),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.15),
            blurRadius: 15,
            offset: const Offset(0, 5),
          ),
        ],
      ),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(20),
        child: Stack(
          fit: StackFit.expand,
          children: [
            _buildImage(slide.imagePath),
            _buildGradientOverlay(),
            _buildSlideContent(slide),
          ],
        ),
      ),
    );
  }

  Widget _buildImage(String imagePath) {
    return imagePath.startsWith('lib/assets/')
        ? Image.asset(
            imagePath,
            fit: BoxFit.cover,
            errorBuilder: (context, error, stackTrace) => _buildErrorWidget(),
          )
        : Image.network(
            imagePath,
            fit: BoxFit.cover,
            loadingBuilder: (context, child, loadingProgress) {
              if (loadingProgress == null) return child;
              return _buildLoadingWidget(loadingProgress);
            },
            errorBuilder: (context, error, stackTrace) => _buildErrorWidget(),
          );
  }

  Widget _buildGradientOverlay() {
    return Container(
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [
            Colors.transparent,
            Colors.black.withOpacity(0.7),
          ],
          stops: const [0.5, 1.0],
        ),
      ),
    );
  }

  Widget _buildSlideContent(SlideData slide) {
    return Positioned(
      bottom: 20,
      left: 20,
      right: 20,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            slide.title,
            style: const TextStyle(
              color: Colors.white,
              fontSize: 24,
              fontWeight: FontWeight.bold,
              shadows: [
                Shadow(
                  offset: Offset(1, 1),
                  blurRadius: 3,
                  color: Colors.black54,
                ),
              ],
            ),
          ),
          const SizedBox(height: 8),
          Text(
            slide.subtitle,
            style: const TextStyle(
              color: Colors.white70,
              fontSize: 16,
              fontWeight: FontWeight.w400,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildIndicators() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.center,
      children: List.generate(
        _slides.length,
        (index) => GestureDetector(
          onTap: () => _carouselController.animateToPage(index),
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 300),
            width: _currentIndex == index ? 24 : 8,
            height: 8,
            margin: const EdgeInsets.symmetric(horizontal: 4),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(4),
              color: _currentIndex == index
                  ? const Color(0xFFC4AC9D)
                  : Colors.grey.withOpacity(0.4),
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildLoadingWidget(ImageChunkEvent loadingProgress) {
    return Container(
      color: Colors.grey[200],
      child: Center(
        child: CircularProgressIndicator(
          value: loadingProgress.expectedTotalBytes != null
              ? loadingProgress.cumulativeBytesLoaded / loadingProgress.expectedTotalBytes!
              : null,
          color: const Color(0xFFC4AC9D),
        ),
      ),
    );
  }

  Widget _buildErrorWidget() {
    return Container(
      color: Colors.grey[300],
      child: const Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.broken_image, size: 50, color: Colors.grey),
            SizedBox(height: 8),
            Text(
              'Image not available',
              style: TextStyle(color: Colors.grey, fontSize: 14),
            ),
          ],
        ),
      ),
    );
  }
}

class SlideData {
  final String imagePath;
  final String title;
  final String subtitle;

  SlideData({
    required this.imagePath,
    required this.title,
    required this.subtitle,
  });
}