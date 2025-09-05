// import 'package:flutter/material.dart';
// import 'package:milliden_app/Pages/About.dart';
// import 'package:milliden_app/Pages/Contact.dart';
// import 'package:milliden_app/Pages/Gallery.dart';
// import 'package:milliden_app/Pages/Rooms.dart';
// import 'package:milliden_app/Pages/home.dart';

// class CustomAppBar extends StatelessWidget implements PreferredSizeWidget {
//   final void Function()? onTap;
//   const CustomAppBar({super.key, this.onTap});

//   @override
//   Size get preferredSize => const Size.fromHeight(kToolbarHeight);

//   @override
//   Widget build(BuildContext context) {
//     return AppBar(
//       backgroundColor: const Color.fromARGB(255, 79, 79, 71),
//       title: Row(
//         children: [
//           SizedBox(
//             width: 50,
//             child: Image.asset(
//               "lib/assets/images/Logo.jpeg",
//               width: 200,
//               height: 200,
//               fit: BoxFit.contain,
//             ),
//           ),
//           const SizedBox(width: 10), 
//           const Expanded(
//             child: Text(
//               "The Milliden Gardens",
//               style: TextStyle(
//                 fontSize: 18,
//                 fontWeight: FontWeight.bold,
//                 color: Color(0xFFE6E5E3)
//               ),
//               maxLines: 2,
//               overflow: TextOverflow.ellipsis,
//             ),
//           ),
//         ],
//       ),
//       // drawer opening in appbar
//       actions: [
//         Builder(
//           builder: (context) => IconButton(
//             icon: const Icon(Icons.menu, color: Color(0xFFE6E5E3)),
//             onPressed: () => Scaffold.of(context).openEndDrawer(),
//           ),
//         ),
//       ],
//     );
//   }
// }


// class CustomDrawer extends StatelessWidget {
//   const CustomDrawer({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return Drawer(
//       backgroundColor: const Color.fromARGB(255, 79, 79, 71),
//       child: ListView(
//         padding: EdgeInsets.zero,
//         children: [
//           const DrawerHeader(
//             decoration: BoxDecoration(
//               color: Color.fromARGB(255, 224, 224, 223),
//             ),
//             margin: EdgeInsets.zero,
//             padding: EdgeInsets.zero,
//             child: SizedBox(
//               height: 50,
//               child: Center(
//                 child: Text(
//                   'Milliden Gardens',
//                   style: TextStyle(
//                     fontSize: 20,
//                     fontWeight: FontWeight.bold,
//                   ),
//                 ),
//               ),
//             ),
//           ),
//           ListTile(
//             leading: const Icon(Icons.home, color: Color.fromARGB(255, 206, 37, 37)),
//             title: const Text(
//               'Home',
//               style: TextStyle(color: Color(0xFFE6E5E3)),
//             ),
//             onTap: () {
//               Navigator.of(context).pop();
//               Navigator.pushReplacement(
//                 context, 
//                 MaterialPageRoute(builder: (context) => const Home())
//               );
//             },
//           ),
//           ListTile(
//             leading: const Icon(Icons.book, color: Color.fromARGB(255, 206, 37, 37)),
//             title: const Text(
//               'About Us',
//               style: TextStyle(color: Color(0xFFE6E5E3)),
//             ),
//             onTap: () {
//               Navigator.of(context).pop();
//               Navigator.pushReplacement(
//                 context, 
//                 MaterialPageRoute(builder: (context) => const AboutUs())
//               );
//             },
//           ),
//           ListTile(
//             leading: const Icon(Icons.phone, color: Color.fromARGB(255, 206, 37, 37)),
//             title: const Text(
//               'Contact Us',
//               style: TextStyle(color: Color(0xFFE6E5E3)),
//             ),
//             onTap: () {
//               Navigator.of(context).pop();
//               Navigator.pushReplacement(
//                 context, 
//                 MaterialPageRoute(builder: (context) => const Contact())
//               );
//             },
//           ),
//           ListTile(
//             leading: const Icon(Icons.camera, color: Color.fromARGB(255, 206, 37, 37)),
//             title: const Text(
//               'Gallery',
//               style: TextStyle(color: Color(0xFFE6E5E3)),
//             ),
//             onTap: () {
//               Navigator.of(context).pop();
              
//               Navigator.pushReplacement(
//                 context, 
//                 MaterialPageRoute(builder: (context) => const Gallery())
//               );
//             },
//           ),
//           ListTile(
//             leading: const Icon(Icons.room, color: Color.fromARGB(255, 206, 37, 37)),
//             title: const Text(
//               'Rooms',
//               style: TextStyle(color: Color(0xFFE6E5E3)),
//             ),
//             onTap: () {
//               Navigator.of(context).pop();
//               Navigator.pushReplacement(
//                 context, 
//                 MaterialPageRoute(builder: (context) => const Rooms())
//               );
//             },
//           ),
//         ],
//       ),
//     );
//   }
// }
import 'package:flutter/material.dart';
import 'package:milliden_app/Pages/About.dart';
import 'package:milliden_app/Pages/Contact.dart';
import 'package:milliden_app/Pages/Gallery.dart';
import 'package:milliden_app/Pages/Rooms.dart';
import 'package:milliden_app/Pages/home.dart';

class CustomAppBar extends StatelessWidget implements PreferredSizeWidget {
  final void Function()? onTap;
  const CustomAppBar({super.key, this.onTap});

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);

  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: const Color.fromARGB(255, 79, 79, 71),
      elevation: 2,
      title: Row(
        children: [
          Container(
            width: 50,
            height: 50,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(8),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(0.1),
                  blurRadius: 4,
                  offset: const Offset(0, 2),
                ),
              ],
            ),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(8),
              child: Image.asset(
                "lib/assets/images/Logo.jpeg",
                fit: BoxFit.cover,
              ),
            ),
          ),
          const SizedBox(width: 12), 
          const Expanded(
            child: Text(
              "The Milliden Gardens",
              style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.w600,
                color: Color(0xFFE6E5E3),
                letterSpacing: 0.5,
              ),
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
            ),
          ),
        ],
      ),
      actions: [
        Builder(
          builder: (context) => IconButton(
            icon: const Icon(Icons.menu, color: Color(0xFFE6E5E3), size: 28),
            onPressed: () => Scaffold.of(context).openEndDrawer(),
            tooltip: 'Menu',
          ),
        ),
        const SizedBox(width: 8),
      ],
    );
  }
}

class CustomDrawer extends StatelessWidget {
  const CustomDrawer({super.key});

  // Get current route name
  String _getCurrentRoute(BuildContext context) {
    return ModalRoute.of(context)?.settings.name ?? '/';
  }

  @override
  Widget build(BuildContext context) {
    final currentRoute = _getCurrentRoute(context);
    
    return Drawer(
      backgroundColor: const Color.fromARGB(255, 79, 79, 71),
      child: Column(
        children: [
          // Enhanced header with gradient and styled logo
          Container(
            height: 120,
            decoration: const BoxDecoration(
              gradient: LinearGradient(
                begin: Alignment.topRight,
                end: Alignment.bottomRight,
                colors: [
                  Color.fromARGB(255, 224, 224, 223),
                  Color.fromARGB(255, 200, 200, 199),
                ],
              ),
            ),
            child: SafeArea(
              child: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    // Logo with same styling as navbar
                    Container(
                      width: 60,
                      height: 60,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(8),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.black.withOpacity(0.1),
                            blurRadius: 4,
                            offset: const Offset(0, 2),
                          ),
                        ],
                      ),
                      child: ClipRRect(
                        borderRadius: BorderRadius.circular(8),
                        child: Image.asset(
                          "lib/assets/images/Logo.jpeg",
                          fit: BoxFit.cover,
                        ),
                      ),
                    ),
                    const SizedBox(height: 8),
                    // Optional: Add title text below logo
                    const Text(
                      'Milliden Gardens',
                      style: TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.w600,
                        color: Color.fromARGB(255, 79, 79, 71),
                        letterSpacing: 0.5,
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
          
          // Navigation items
          Expanded(
            child: ListView(
              padding: const EdgeInsets.symmetric(vertical: 8),
              children: [
                _buildNavItem(
                  context: context,
                  icon: Icons.home_rounded,
                  title: 'Home',
                  route: '/',
                  isActive: currentRoute == '/' || currentRoute.contains('Home'),
                  onTap: () => _navigateTo(context, const Home()),
                ),
                _buildNavItem(
                  context: context,
                  icon: Icons.info_rounded,
                  title: 'About Us',
                  route: '/about',
                  isActive: currentRoute.contains('About'),
                  onTap: () => _navigateTo(context, const AboutUs()),
                ),
                _buildNavItem(
                  context: context,
                  icon: Icons.phone_rounded,
                  title: 'Contact Us',
                  route: '/contact',
                  isActive: currentRoute.contains('Contact'),
                  onTap: () => _navigateTo(context, const Contact()),
                ),
                _buildNavItem(
                  context: context,
                  icon: Icons.photo_library_rounded,
                  title: 'Gallery',
                  route: '/gallery',
                  isActive: currentRoute.contains('Gallery'),
                  onTap: () => _navigateTo(context,  Gallery()),
                ),
                _buildNavItem(
                  context: context,
                  icon: Icons.hotel_rounded,
                  title: 'Rooms',
                  route: '/rooms',
                  isActive: currentRoute.contains('Rooms'),
                  onTap: () => _navigateTo(context, const Rooms()),
                ),
              ],
            ),
          ),
          
          // Footer
          Container(
            padding: const EdgeInsets.all(16),
            child: const Text(
              '© 2024 Milliden Gardens',
              style: TextStyle(
                color: Color(0xFFE6E5E3),
                fontSize: 12,
                fontWeight: FontWeight.w300,
              ),
              textAlign: TextAlign.center,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildNavItem({
    required BuildContext context,
    required IconData icon,
    required String title,
    required String route,
    required bool isActive,
    required VoidCallback onTap,
  }) {
    return Container(
      margin: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(12),
        color: isActive 
          ? const Color.fromARGB(255, 206, 37, 37).withOpacity(0.1)
          : Colors.transparent,
      ),
      child: ListTile(
        contentPadding: const EdgeInsets.symmetric(horizontal: 20, vertical: 4),
        leading: Icon(
          icon, 
          color: isActive 
            ? const Color.fromARGB(255, 206, 37, 37)
            : const Color(0xFFE6E5E3),
          size: 24,
        ),
        title: Text(
          title,
          style: TextStyle(
            color: isActive 
              ? const Color.fromARGB(255, 206, 37, 37)
              : const Color(0xFFE6E5E3),
            fontWeight: isActive ? FontWeight.w600 : FontWeight.w400,
            fontSize: 16,
          ),
        ),
        onTap: onTap,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(12),
        ),
        hoverColor: const Color.fromARGB(255, 206, 37, 37).withOpacity(0.05),
      ),
    );
  }

  void _navigateTo(BuildContext context, Widget page) {
    Navigator.of(context).pop(); // Close drawer first
    
    // Small delay to ensure drawer closes smoothly
    Future.delayed(const Duration(milliseconds: 250), () {
      Navigator.pushReplacement(
        // ignore: use_build_context_synchronously
        context, 
        PageRouteBuilder(
          pageBuilder: (context, animation, secondaryAnimation) => page,
          transitionsBuilder: (context, animation, secondaryAnimation, child) {
            return FadeTransition(opacity: animation, child: child);
          },
          transitionDuration: const Duration(milliseconds: 300),
        ),
      );
    });
  }
}