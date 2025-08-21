// import 'package:flutter/material.dart';

// // ignore: camel_case_types
// class myBody extends StatelessWidget {
//   const myBody({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return Container(
//       color: const Color.fromARGB(255, 244, 239, 239),
//       padding: const EdgeInsets.all(16.0),
//       margin: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
//       width: double.infinity,
//       child: Column(
//         crossAxisAlignment: CrossAxisAlignment.start,
//         children: [
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
//             padding: const EdgeInsets.all(8.0),
//             child: Text(
//               "Curated Experiences at The Milliden Gardens",
//               textAlign: TextAlign.center,
//               style: TextStyle(
//                 fontSize: 16.5,
//                 fontWeight: FontWeight.bold,
//                 color: Colors.white,
//               ),
//             ),
//           ),
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

//           Divider(
//             color: Colors.grey,
//             thickness: 0.5,
//           ),
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
      margin: const EdgeInsets.all(16),
      child: Column(
        children: [
          _buildHeaderSection(),
          const SizedBox(height: 24),
          _buildExperienceCards(),
        ],
      ),
    );
  }

  Widget _buildHeaderSection() {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [
            const Color(0xFFC4AC9D),
            const Color(0xFFB39D8A),
          ],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        borderRadius: BorderRadius.circular(16),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.1),
            blurRadius: 10,
            offset: const Offset(0, 4),
          ),
        ],
      ),
      child: Column(
        children: [
          const Text(
            "Curated Experiences at The Milliden Gardens",
            textAlign: TextAlign.center,
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.bold,
              color: Colors.white,
              height: 1.3,
            ),
          ),
          const SizedBox(height: 16),
          Container(
            height: 2,
            width: 60,
            decoration: BoxDecoration(
              color: Colors.white.withOpacity(0.5),
              borderRadius: BorderRadius.circular(1),
            ),
          ),
          const SizedBox(height: 16),
          const Text(
            'Each moment at our retreat is crafted with intention—balancing luxury, nature, and authentic experiences that resonate with the soul.',
            textAlign: TextAlign.center,
            style: TextStyle(
              color: Colors.white,
              fontWeight: FontWeight.w400,
              fontSize: 16,
              height: 1.5,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildExperienceCards() {
    final experiences = [
      ExperienceData(
        imagePath: "lib/assets/images/r1.jpeg",
        title: "Luxury Events & Gatherings",
        description: "Transform ordinary moments into extraordinary memories with our tailored event packages. From sunset ceremonies to corporate gatherings under the stars.",
        icon: Icons.event_seat,
      ),
      ExperienceData(
        imagePath: "lib/assets/images/g7.jpeg",
        title: "Garden Wellness Retreat",
        description: "Immerse yourself in nature's healing embrace with guided meditation sessions, yoga classes, and therapeutic garden walks.",
        icon: Icons.spa,
      ),
      ExperienceData(
        imagePath: "lib/assets/images/o1.jpeg",
        title: "Farm-to-Table Dining",
        description: "Savor the finest organic cuisine prepared with ingredients fresh from our gardens, creating an authentic culinary journey.",
        icon: Icons.restaurant,
      ),
    ];

    return Column(
      children: experiences
          .map((experience) => _buildExperienceCard(experience))
          .toList(),
    );
  }

  Widget _buildExperienceCard(ExperienceData experience) {
    return Container(
      margin: const EdgeInsets.only(bottom: 20),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.08),
            blurRadius: 15,
            offset: const Offset(0, 5),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ClipRRect(
            borderRadius: const BorderRadius.only(
              topLeft: Radius.circular(16),
              topRight: Radius.circular(16),
            ),
            child: Stack(
              children: [
                Image.asset(
                  experience.imagePath,
                  width: double.infinity,
                  height: 200,
                  fit: BoxFit.cover,
                  errorBuilder: (context, error, stackTrace) => Container(
                    width: double.infinity,
                    height: 200,
                    color: Colors.grey[200],
                    child: const Center(
                      child: Icon(Icons.image_not_supported, size: 50, color: Colors.grey),
                    ),
                  ),
                ),
                Positioned(
                  top: 16,
                  right: 16,
                  child: Container(
                    padding: const EdgeInsets.all(8),
                    decoration: BoxDecoration(
                      color: Colors.white.withOpacity(0.9),
                      borderRadius: BorderRadius.circular(8),
                    ),
                    child: Icon(
                      experience.icon,
                      color: const Color(0xFFC4AC9D),
                      size: 24,
                    ),
                  ),
                ),
              ],
            ),
          ),
          Padding(
            padding: const EdgeInsets.all(20),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  experience.title,
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                    color: Colors.black87,
                    height: 1.2,
                  ),
                ),
                const SizedBox(height: 12),
                Text(
                  experience.description,
                  style: TextStyle(
                    fontSize: 15,
                    color: Colors.grey[600],
                    height: 1.5,
                  ),
                ),
                const SizedBox(height: 16),
                Row(
                  children: [
                    Expanded(
                      child: ElevatedButton(
                        onPressed: () {
                          // Handle button tap
                        },
                        style: ElevatedButton.styleFrom(
                          backgroundColor: const Color(0xFFC4AC9D),
                          foregroundColor: Colors.white,
                          elevation: 0,
                          padding: const EdgeInsets.symmetric(vertical: 12),
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(8),
                          ),
                        ),
                        child: const Text(
                          'Learn More',
                          style: TextStyle(
                            fontWeight: FontWeight.w600,
                            fontSize: 15,
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(width: 12),
                    OutlinedButton(
                      onPressed: () {
                        // Handle button tap
                      },
                      style: OutlinedButton.styleFrom(
                        foregroundColor: const Color(0xFFC4AC9D),
                        side: const BorderSide(color: Color(0xFFC4AC9D)),
                        padding: const EdgeInsets.symmetric(
                          horizontal: 16,
                          vertical: 12,
                        ),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(8),
                        ),
                      ),
                      child: const Icon(Icons.favorite_border),
                    ),
                  ],
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class ExperienceData {
  final String imagePath;
  final String title;
  final String description;
  final IconData icon;

  ExperienceData({
    required this.imagePath,
    required this.title,
    required this.description,
    required this.icon,
  });
}
