// import 'package:flutter/material.dart';
// import 'package:milliden_app/component/navbar.dart';
// import 'package:url_launcher/url_launcher.dart';

// class CustomFooter extends StatelessWidget {
//   const CustomFooter({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return Container(
//       decoration: const BoxDecoration(
//         gradient: LinearGradient(
//           begin: Alignment.topCenter,
//           end: Alignment.bottomCenter,
//           colors: [
//             Color.fromARGB(255, 79, 79, 71),
//             Color.fromARGB(255, 60, 60, 54),
//           ],
//         ),
//       ),
//       child: Column(
//         children: [
//           // Main footer content
//           Padding(
//             padding: const EdgeInsets.all(24.0),
//             child: Column(
//               children: [
//                 // Logo and main info section
//                 Row(
//                   crossAxisAlignment: CrossAxisAlignment.start,
//                   children: [
//                     // Logo and business name
//                     Expanded(
//                       flex: 2,
//                       child: Column(
//                         crossAxisAlignment: CrossAxisAlignment.start,
//                         children: [
//                           Row(
//                             children: [
//                               Container(
//                                 width: 50,
//                                 height: 50,
//                                 decoration: BoxDecoration(
//                                   borderRadius: BorderRadius.circular(8),
//                                   boxShadow: [
//                                     BoxShadow(
//                                       color: Colors.black.withOpacity(0.2),
//                                       blurRadius: 6,
//                                       offset: const Offset(0, 3),
//                                     ),
//                                   ],
//                                 ),
//                                 child: ClipRRect(
//                                   borderRadius: BorderRadius.circular(8),
//                                   child: Image.asset(
//                                     "lib/assets/images/Logo.jpeg",
//                                     fit: BoxFit.cover,
//                                   ),
//                                 ),
//                               ),
//                               const SizedBox(width: 12),
//                               const Expanded(
//                                 child: Text(
//                                   'The Milliden Gardens',
//                                   style: TextStyle(
//                                     fontSize: 20,
//                                     fontWeight: FontWeight.bold,
//                                     color: Color(0xFFE6E5E3),
//                                     letterSpacing: 0.5,
//                                   ),
//                                 ),
//                               ),
//                             ],
//                           ),
//                           const SizedBox(height: 16),
//                           const Text(
//                             'Experience luxury and comfort in the heart of nature. Your perfect getaway awaits at Milliden Gardens.',
//                             style: TextStyle(
//                               fontSize: 14,
//                               color: Color(0xFFE6E5E3),
//                               height: 1.5,
//                             ),
//                           ),
//                           const SizedBox(height: 16),
//                           // Social media icons
//                           Row(
//                             children: [
//                               _buildSocialIcon(
//                                 icon: Icons.facebook,
//                                 onTap: () => _launchURL('https://facebook.com/millidengardens'),
//                               ),
//                               const SizedBox(width: 12),
//                               _buildSocialIcon(
//                                 icon: Icons.camera_alt,
//                                 onTap: () => _launchURL('https://instagram.com/millidengardens'),
//                               ),
//                               const SizedBox(width: 12),
//                               _buildSocialIcon(
//                                 icon: Icons.alternate_email,
//                                 onTap: () => _launchURL('https://twitter.com/millidengardens'),
//                               ),
//                               const SizedBox(width: 12),
//                               _buildSocialIcon(
//                                 icon: Icons.video_library,
//                                 onTap: () => _launchURL('https://youtube.com/millidengardens'),
//                               ),
//                             ],
//                           ),
//                         ],
//                       ),
//                     ),
//                     const SizedBox(width: 32),
                    
//                     // Quick Links
//                     Expanded(
//                       child: Column(
//                         crossAxisAlignment: CrossAxisAlignment.start,
//                         children: [
//                           const Text(
//                             'Quick Links',
//                             style: TextStyle(
//                               fontSize: 16,
//                               fontWeight: FontWeight.w600,
//                               color: Color(0xFFE6E5E3),
//                             ),
//                           ),
//                           const SizedBox(height: 16),
//                           _buildFooterLink('Home', () {}),
//                           _buildFooterLink('About Us', () {}),
//                           _buildFooterLink('Rooms & Suites', () {}),
//                           _buildFooterLink('Gallery', () {}),
//                           _buildFooterLink('Contact Us', () {}),
//                           _buildFooterLink('Reservations', () {}),
//                         ],
//                       ),
//                     ),
//                     const SizedBox(width: 32),
                    
//                     // Contact Info
//                     Expanded(
//                       child: Column(
//                         crossAxisAlignment: CrossAxisAlignment.start,
//                         children: [
//                           const Text(
//                             'Contact Info',
//                             style: TextStyle(
//                               fontSize: 16,
//                               fontWeight: FontWeight.w600,
//                               color: Color(0xFFE6E5E3),
//                             ),
//                           ),
//                           const SizedBox(height: 16),
//                           _buildContactItem(
//                             icon: Icons.location_on_rounded,
//                             text: '123 Garden Avenue\nNairobi, Kenya',
//                           ),
//                           const SizedBox(height: 12),
//                           _buildContactItem(
//                             icon: Icons.phone_rounded,
//                             text: '+254 700 123 456',
//                             onTap: () => _launchURL('tel:+254700123456'),
//                           ),
//                           const SizedBox(height: 12),
//                           _buildContactItem(
//                             icon: Icons.email_rounded,
//                             text: 'info@millidengardens.com',
//                             onTap: () => _launchURL('mailto:info@millidengardens.com'),
//                           ),
//                           const SizedBox(height: 12),
//                           _buildContactItem(
//                             icon: Icons.access_time_rounded,
//                             text: 'Open 24/7\nReception Available',
//                           ),
//                         ],
//                       ),
//                     ),
//                   ],
//                 ),
                
//                 const SizedBox(height: 32),
                
//                 // Services section
//                 Container(
//                   padding: const EdgeInsets.all(20),
//                   decoration: BoxDecoration(
//                     color: const Color.fromARGB(255, 50, 50, 45).withOpacity(0.5),
//                     borderRadius: BorderRadius.circular(12),
//                     border: Border.all(
//                       color: const Color.fromARGB(255, 206, 37, 37).withOpacity(0.3),
//                       width: 1,
//                     ),
//                   ),
//                   child: Column(
//                     children: [
//                       const Text(
//                         'Our Services',
//                         style: TextStyle(
//                           fontSize: 18,
//                           fontWeight: FontWeight.w600,
//                           color: Color(0xFFE6E5E3),
//                         ),
//                       ),
//                       const SizedBox(height: 16),
//                       Wrap(
//                         spacing: 24,
//                         runSpacing: 12,
//                         children: [
//                           _buildServiceChip('Luxury Accommodation'),
//                           _buildServiceChip('Fine Dining'),
//                           _buildServiceChip('Event Hosting'),
//                           _buildServiceChip('Garden Tours'),
//                           _buildServiceChip('Spa Services'),
//                           _buildServiceChip('Conference Facilities'),
//                         ],
//                       ),
//                     ],
//                   ),
//                 ),
//               ],
//             ),
//           ),
          
//           // Bottom copyright section
//           Container(
//             padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 24),
//             decoration: const BoxDecoration(
//               color: Color.fromARGB(255, 40, 40, 36),
//               border: Border(
//                 top: BorderSide(
//                   color: Color.fromARGB(255, 206, 37, 37),
//                   width: 2,
//                 ),
//               ),
//             ),
//             child: Row(
//               mainAxisAlignment: MainAxisAlignment.spaceBetween,
//               children: [
//                 const Text(
//                   '© 2024 The Milliden Gardens. All rights reserved.',
//                   style: TextStyle(
//                     color: Color(0xFFE6E5E3),
//                     fontSize: 12,
//                     fontWeight: FontWeight.w300,
//                   ),
//                 ),
//                 Row(
//                   children: [
//                     _buildBottomLink('Privacy Policy'),
//                     const Text(' • ', style: TextStyle(color: Color(0xFFE6E5E3))),
//                     _buildBottomLink('Terms of Service'),
//                     const Text(' • ', style: TextStyle(color: Color(0xFFE6E5E3))),
//                     _buildBottomLink('Sitemap'),
//                   ],
//                 ),
//               ],
//             ),
//           ),
//         ],
//       ),
//     );
//   }

//   Widget _buildSocialIcon({required IconData icon, required VoidCallback onTap}) {
//     return GestureDetector(
//       onTap: onTap,
//       child: Container(
//         width: 40,
//         height: 40,
//         decoration: BoxDecoration(
//           color: const Color.fromARGB(255, 206, 37, 37).withOpacity(0.1),
//           borderRadius: BorderRadius.circular(8),
//           border: Border.all(
//             color: const Color.fromARGB(255, 206, 37, 37).withOpacity(0.3),
//             width: 1,
//           ),
//         ),
//         child: Icon(
//           icon,
//           color: const Color(0xFFE6E5E3),
//           size: 20,
//         ),
//       ),
//     );
//   }

//   Widget _buildFooterLink(String text, VoidCallback onTap) {
//     return Padding(
//       padding: const EdgeInsets.only(bottom: 8.0),
//       child: GestureDetector(
//         onTap: onTap,
//         child: Text(
//           text,
//           style: const TextStyle(
//             color: Color(0xFFE6E5E3),
//             fontSize: 14,
//             height: 1.5,
//           ),
//         ),
//       ),
//     );
//   }

//   Widget _buildContactItem({
//     required IconData icon,
//     required String text,
//     VoidCallback? onTap,
//   }) {
//     return GestureDetector(
//       onTap: onTap,
//       child: Row(
//         crossAxisAlignment: CrossAxisAlignment.start,
//         children: [
//           Icon(
//             icon,
//             color: const Color.fromARGB(255, 206, 37, 37),
//             size: 18,
//           ),
//           const SizedBox(width: 8),
//           Expanded(
//             child: Text(
//               text,
//               style: const TextStyle(
//                 color: Color(0xFFE6E5E3),
//                 fontSize: 13,
//                 height: 1.4,
//               ),
//             ),
//           ),
//         ],
//       ),
//     );
//   }

//   Widget _buildServiceChip(String service) {
//     return Container(
//       padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
//       decoration: BoxDecoration(
//         color: const Color.fromARGB(255, 206, 37, 37).withOpacity(0.1),
//         borderRadius: BorderRadius.circular(20),
//         border: Border.all(
//           color: const Color.fromARGB(255, 206, 37, 37).withOpacity(0.3),
//           width: 1,
//         ),
//       ),
//       child: Text(
//         service,
//         style: const TextStyle(
//           color: Color(0xFFE6E5E3),
//           fontSize: 12,
//           fontWeight: FontWeight.w400,
//         ),
//       ),
//     );
//   }

//   Widget _buildBottomLink(String text) {
//     return GestureDetector(
//       onTap: () {
//         // Handle bottom link taps
//       },
//       child: Text(
//         text,
//         style: const TextStyle(
//           color: Color(0xFFE6E5E3),
//           fontSize: 12,
//           fontWeight: FontWeight.w300,
//           decoration: TextDecoration.underline,
//         ),
//       ),
//     );
//   }

//   void _launchURL(String url) async {
//     if (await canLaunch(url)) {
//       await launch(url);
//     }
//   }
// }

// // Usage example - Add this to your pages
// class ExamplePage extends StatelessWidget {
//   const ExamplePage({super.key});

// ignore_for_file: unused_element

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: const CustomAppBar(),
//       endDrawer: const CustomDrawer(),
//       body: Column(
//         children: [
//           // Your page content here
//           const Expanded(
//             child: Center(
//               child: Text('Your page content goes here'),
//             ),
//           ),
//           // Add the footer at the bottom
//           const CustomFooter(),
//         ],
//       ),
//     );
//   }
// }
import 'package:flutter/material.dart';
import 'package:milliden_app/component/navbar.dart';
import 'package:url_launcher/url_launcher.dart';

class CustomFooter extends StatelessWidget {
  const CustomFooter({super.key});

  // Constants for better maintainability
  static const Color _primaryColor = Color.fromARGB(255, 206, 37, 37);
  static const Color _textColor = Color(0xFFE6E5E3);
  static const Color _darkBgColor = Color.fromARGB(255, 40, 40, 36);
  // ignore: unused_field
  static const Color _mediumBgColor = Color.fromARGB(255, 50, 50, 45);
  
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topCenter,
          end: Alignment.bottomCenter,
          colors: [
            Color.fromARGB(255, 79, 79, 71),
            Color.fromARGB(255, 60, 60, 54),
          ],
        ),
      ),
      child: Column(
        children: [
          // Main footer content
          Padding(
            padding: const EdgeInsets.all(24.0),
            child: Column(
              children: [
                // Responsive layout for different screen sizes
                _buildResponsiveLayout(context),
                
                const SizedBox(height: 32),
                
                
                const SizedBox(height: 24),
                
                // Newsletter subscription section
                _buildNewsletterSection(),
              ],
            ),
          ),
          
          // Bottom copyright section
          _buildCopyrightSection(),
        ],
      ),
    );
  }

  Widget _buildResponsiveLayout(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    
    // Mobile layout
    if (screenWidth < 768) {
      return Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildBrandSection(),
          const SizedBox(height: 32),
        ],
      );
    }
    
    // Tablet and desktop layout
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Brand section
        Expanded(
          flex: 2,
          child: _buildBrandSection(),
        ),
        const SizedBox(width: 32),
        
        
      ],
    );
  }

  Widget _buildBrandSection() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        // Enhanced logo section
        Row(
          children: [
            Hero(
              tag: 'logo',
              child: Container(
                width: 60,
                height: 60,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(12),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.3),
                      blurRadius: 8,
                      offset: const Offset(0, 4),
                    ),
                  ],
                ),
                child: ClipRRect(
                  borderRadius: BorderRadius.circular(12),
                  child: Image.asset(
                    "lib/assets/images/Logo.jpeg",
                    fit: BoxFit.cover,
                    errorBuilder: (context, error, stackTrace) {
                      return Container(
                        color: _primaryColor,
                        child: const Icon(
                          Icons.hotel,
                          color: _textColor,
                          size: 30,
                        ),
                      );
                    },
                  ),
                ),
              ),
            ),
            const SizedBox(width: 16),
            const Expanded(
              child: Text(
                'The Milliden Gardens',
                style: TextStyle(
                  fontSize: 22,
                  fontWeight: FontWeight.bold,
                  color: _textColor,
                  letterSpacing: 0.5,
                ),
              ),
            ),
          ],
        ),
        
        const SizedBox(height: 20),
        
        // Enhanced description
        const Text(
          'Experience luxury and comfort in the heart of nature. Your perfect getaway awaits at Milliden Gardens, where every moment becomes a cherished memory.',
          style: TextStyle(
            fontSize: 15,
            color: _textColor,
            height: 1.6,
            fontWeight: FontWeight.w300,
          ),
        ),
        
        const SizedBox(height: 24),
        
        // Enhanced social media section
        Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            const Text(
              'Follow Us',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w600,
                color: _textColor,
              ),
            ),
            const SizedBox(height: 12),
            Wrap(
              spacing: 12,
              runSpacing: 12,
              children: [
                _buildSocialIcon(
                  icon: Icons.facebook,
                  label: 'Facebook',
                  url: 'https://facebook.com/millidengardens',
                ),
                _buildSocialIcon(
                  icon: Icons.camera_alt,
                  label: 'Instagram',
                  url: 'https://instagram.com/millidengardens',
                ),
                _buildSocialIcon(
                  icon: Icons.alternate_email,
                  label: 'Twitter',
                  url: 'https://twitter.com/millidengardens',
                ),
                _buildSocialIcon(
                  icon: Icons.video_library,
                  label: 'YouTube',
                  url: 'https://youtube.com/millidengardens',
                ),
                _buildSocialIcon(
                  icon: Icons.work,
                  label: 'LinkedIn',
                  url: 'https://linkedin.com/company/millidengardens',
                ),
              ],
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildNewsletterSection() {
    return Container(
      padding: const EdgeInsets.all(24),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            _primaryColor.withOpacity(0.1),
            _primaryColor.withOpacity(0.05),
          ],
        ),
        borderRadius: BorderRadius.circular(16),
        border: Border.all(
          color: _primaryColor.withOpacity(0.3),
          width: 1,
        ),
      ),
      child: Column(
        children: [
          const Text(
            'Stay Updated',
            style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.w600,
              color: _textColor,
            ),
          ),
          const SizedBox(height: 8),
          const Text(
            'Subscribe to our newsletter for exclusive offers and updates',
            style: TextStyle(
              fontSize: 14,
              color: _textColor,
              fontWeight: FontWeight.w300,
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 16),
          Row(
            children: [
              Expanded(
                child: TextField(
                  style: const TextStyle(color: _textColor),
                  decoration: InputDecoration(
                    hintText: 'Enter your email',
                    hintStyle: TextStyle(color: _textColor.withOpacity(0.7)),
                    filled: true,
                    fillColor: _darkBgColor.withOpacity(0.5),
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(8),
                      borderSide: BorderSide(color: _primaryColor.withOpacity(0.3)),
                    ),
                    enabledBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(8),
                      borderSide: BorderSide(color: _primaryColor.withOpacity(0.3)),
                    ),
                    focusedBorder: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(8),
                      borderSide: const BorderSide(color: _primaryColor),
                    ),
                    contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                  ),
                ),
              ),
              const SizedBox(width: 12),
              ElevatedButton(
                onPressed: () {
                  // Handle newsletter subscription
                },
                style: ElevatedButton.styleFrom(
                  backgroundColor: _primaryColor,
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(8),
                  ),
                ),
                child: const Text('Subscribe'),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildCopyrightSection() {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 20, horizontal: 24),
      decoration: const BoxDecoration(
        color: _darkBgColor,
        border: Border(
          top: BorderSide(
            color: _primaryColor,
            width: 2,
          ),
        ),
      ),
      child: LayoutBuilder(
        builder: (context, constraints) {
          if (constraints.maxWidth < 600) {
            // Mobile layout
            return Column(
              children: [
                const Text(
                  '© 2024 The Milliden Gardens. All rights reserved.',
                  style: TextStyle(
                    color: _textColor,
                    fontSize: 12,
                    fontWeight: FontWeight.w300,
                  ),
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 12),
                Wrap(
                  alignment: WrapAlignment.center,
                  children: [
                    _buildBottomLink('Privacy Policy'),
                    const Text(' • ', style: TextStyle(color: _textColor, fontSize: 12)),
                    _buildBottomLink('Terms of Service'),
                    const Text(' • ', style: TextStyle(color: _textColor, fontSize: 12)),
                    _buildBottomLink('Sitemap'),
                  ],
                ),
              ],
            );
          }
          
          // Desktop layout
          return Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              const Text(
                '© 2024 The Milliden Gardens. All rights reserved.',
                style: TextStyle(
                  color: _textColor,
                  fontSize: 12,
                  fontWeight: FontWeight.w300,
                ),
              ),
              Row(
                children: [
                  _buildBottomLink('Privacy Policy'),
                  const Text(' • ', style: TextStyle(color: _textColor, fontSize: 12)),
                  _buildBottomLink('Terms of Service'),
                  const Text(' • ', style: TextStyle(color: _textColor, fontSize: 12)),
                  _buildBottomLink('Sitemap'),
                ],
              ),
            ],
          );
        },
      ),
    );
  }

  Widget _buildSocialIcon({
    required IconData icon,
    required String label,
    required String url,
  }) {
    return Tooltip(
      message: label,
      child: GestureDetector(
        onTap: () => _launchURL(url),
        child: Semantics(
          label: label,
          button: true,
          child: Container(
            width: 44,
            height: 44,
            decoration: BoxDecoration(
              color: _primaryColor.withOpacity(0.1),
              borderRadius: BorderRadius.circular(12),
              border: Border.all(
                color: _primaryColor.withOpacity(0.3),
                width: 1,
              ),
            ),
            child: Icon(
              icon,
              color: _textColor,
              size: 22,
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildFooterLink(String text, IconData icon, VoidCallback onTap) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 10.0),
      child: GestureDetector(
        onTap: onTap,
        child: Semantics(
          label: text,
          button: true,
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(
                icon,
                color: _primaryColor,
                size: 16,
              ),
              const SizedBox(width: 8),
              Text(
                text,
                style: const TextStyle(
                  color: _textColor,
                  fontSize: 14,
                  height: 1.5,
                  fontWeight: FontWeight.w400,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildContactItem({
    required IconData icon,
    required String text,
    VoidCallback? onTap,
    String? semanticLabel,
  }) {
    return GestureDetector(
      onTap: onTap,
      child: Semantics(
        label: semanticLabel ?? text,
        button: onTap != null,
        child: Container(
          padding: const EdgeInsets.all(8),
          decoration: BoxDecoration(
            color: onTap != null ? _primaryColor.withOpacity(0.05) : null,
            borderRadius: BorderRadius.circular(8),
          ),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Icon(
                icon,
                color: _primaryColor,
                size: 20,
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Text(
                  text,
                  style: const TextStyle(
                    color: _textColor,
                    fontSize: 14,
                    height: 1.5,
                    fontWeight: FontWeight.w400,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildServiceChip(String service, IconData icon) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
      decoration: BoxDecoration(
        color: _primaryColor.withOpacity(0.1),
        borderRadius: BorderRadius.circular(25),
        border: Border.all(
          color: _primaryColor.withOpacity(0.3),
          width: 1,
        ),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(
            icon,
            color: _primaryColor,
            size: 16,
          ),
          const SizedBox(width: 8),
          Text(
            service,
            style: const TextStyle(
              color: _textColor,
              fontSize: 13,
              fontWeight: FontWeight.w500,
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildBottomLink(String text) {
    return GestureDetector(
      onTap: () {
        // Handle bottom link taps
      },
      child: Text(
        text,
        style: const TextStyle(
          color: _textColor,
          fontSize: 12,
          fontWeight: FontWeight.w300,
          decoration: TextDecoration.underline,
        ),
      ),
    );
  }

  Future<void> _launchURL(String url) async {
    final uri = Uri.parse(url);
    try {
      if (await canLaunchUrl(uri)) {
        await launchUrl(
          uri,
          mode: LaunchMode.externalApplication,
        );
      } else {
        debugPrint('Could not launch $url');
      }
    } catch (e) {
      debugPrint('Error launching URL: $e');
    }
  }
}

// Enhanced usage example with better structure
class ExamplePage extends StatelessWidget {
  const ExamplePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const CustomAppBar(),
      endDrawer: const CustomDrawer(),
      body: const SingleChildScrollView(
        child: Column(
          children: [
            // Your page content here
            SizedBox(
              height: 500,
              child: Center(
                child: Text(
                  'Your page content goes here',
                  style: TextStyle(fontSize: 18),
                ),
              ),
            ),
            // Add the enhanced footer at the bottom
            CustomFooter(),
          ],
        ),
      ),
    );
  }
}