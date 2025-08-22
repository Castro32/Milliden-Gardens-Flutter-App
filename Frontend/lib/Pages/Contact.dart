// import 'package:flutter/material.dart';
// import 'package:milliden_app/component/navbar.dart';
// import 'package:font_awesome_flutter/font_awesome_flutter.dart';
// import 'package:url_launcher/url_launcher.dart';

// class Contact extends StatefulWidget {
//   const Contact({super.key});

//   @override
//   State<Contact> createState() => _ContactState();
// }

// class _ContactState extends State<Contact> {
//   final _formKey = GlobalKey<FormState>();
//   final _nameController = TextEditingController();
//   final _emailController = TextEditingController();
//   final _subjectController = TextEditingController();
//   final _messageController = TextEditingController();

//   @override
//   void dispose() {
//     _nameController.dispose();
//     _emailController.dispose();
//     _subjectController.dispose();
//     _messageController.dispose();
//     super.dispose();
//   }

//   Future<void> _launchUrl(String url) async {
//     final Uri uri = Uri.parse(url);
//     if (!await launchUrl(uri)) {
//       throw 'Could not launch $url';
//     }
//   }

//   void _submitForm() {
//     if (_formKey.currentState!.validate()) {
//       // Handle form submission here
//       ScaffoldMessenger.of(context).showSnackBar(
//         const SnackBar(
//           content: Text('Message sent successfully!'),
//           backgroundColor: Color(0xFFA89284),
//         ),
//       );
//       // Clear form
//       _nameController.clear();
//       _emailController.clear();
//       _subjectController.clear();
//       _messageController.clear();
//     }
//   }

//   Widget _buildSectionTitle(String title) {
//     return Column(
//       crossAxisAlignment: CrossAxisAlignment.start,
//       children: [
//         Text(
//           title,
//           style: const TextStyle(
//             fontSize: 20,
//             fontWeight: FontWeight.bold,
//             color: Color(0xFFA89284),
//           ),
//         ),
//         Container(
//           width: 60,
//           height: 4,
//           margin: const EdgeInsets.only(top: 8, bottom: 16),
//           decoration: const BoxDecoration(
//             color: Color.fromARGB(255, 235, 187, 157),
//             borderRadius: BorderRadius.all(Radius.circular(2)),
//           ),
//         ),
//       ],
//     );
//   }

//   Widget _buildContactInfo(IconData icon, String label, String info) {
//     return Padding(
//       padding: const EdgeInsets.symmetric(vertical: 8.0),
//       child: Row(
//         crossAxisAlignment: CrossAxisAlignment.start,
//         children: [
//           Container(
//             padding: const EdgeInsets.all(8),
//             decoration: BoxDecoration(
//               color: const Color(0xFFA89284).withOpacity(0.1),
//               borderRadius: BorderRadius.circular(8),
//             ),
//             child: Icon(
//               icon,
//               size: 24,
//               color: const Color(0xFF393937),
//             ),
//           ),
//           const SizedBox(width: 16),
//           Expanded(
//             child: Column(
//               crossAxisAlignment: CrossAxisAlignment.start,
//               children: [
//                 Text(
//                   label,
//                   style: const TextStyle(
//                     fontSize: 16,
//                     fontWeight: FontWeight.bold,
//                     color: Color(0xFFA89284),
//                   ),
//                 ),
//                 const SizedBox(height: 4),
//                 Text(
//                   info,
//                   style: const TextStyle(
//                     fontSize: 16,
//                     color: Colors.black87,
//                   ),
//                 ),
//               ],
//             ),
//           ),
//         ],
//       ),
//     );
//   }

//   Widget _buildBusinessHours(String days, String hours) {
//     return Padding(
//       padding: const EdgeInsets.symmetric(vertical: 4.0),
//       child: Row(
//         crossAxisAlignment: CrossAxisAlignment.start,
//         children: [
//           Expanded(
//             flex: 3,
//             child: Text(
//               days,
//               style: const TextStyle(
//                 fontSize: 16,
//                 fontWeight: FontWeight.bold,
//                 color: Color(0xFFA89284),
//               ),
//             ),
//           ),
//           Expanded(
//             flex: 2,
//             child: Text(
//               hours,
//               style: const TextStyle(
//                 fontSize: 16,
//                 color: Colors.black87,
//               ),
//             ),
//           ),
//         ],
//       ),
//     );
//   }

//   Widget _buildFormField({
//     required TextEditingController controller,
//     required String label,
//     required String hint,
//     required IconData icon,
//     int maxLines = 1,
//     String? Function(String?)? validator,
//   }) {
//     return Padding(
//       padding: const EdgeInsets.symmetric(vertical: 8.0),
//       child: TextFormField(
//         controller: controller,
//         maxLines: maxLines,
//         validator: validator,
//         decoration: InputDecoration(
//           labelText: label,
//           hintText: hint,
//           prefixIcon: Icon(icon, color: const Color(0xFFA89284)),
//           border: OutlineInputBorder(
//             borderRadius: BorderRadius.circular(8),
//             borderSide: const BorderSide(color: Color(0xFFA89284)),
//           ),
//           focusedBorder: OutlineInputBorder(
//             borderRadius: BorderRadius.circular(8),
//             borderSide: const BorderSide(color: Color(0xFFA89284), width: 2),
//           ),
//           enabledBorder: OutlineInputBorder(
//             borderRadius: BorderRadius.circular(8),
//             borderSide: BorderSide(color: Colors.grey.shade300),
//           ),
//         ),
//       ),
//     );
//   }

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: CustomAppBar(),
//       endDrawer: const CustomDrawer(),
//       body: SingleChildScrollView(
//         child: Column(
//           children: [
//             // Hero Section
//             SizedBox(
//               height: 300,
//               width: double.infinity,
//               child: Stack(
//                 children: [
//                   Image.asset(
//                     "lib/assets/images/lawn1.jpeg",
//                     width: double.infinity,
//                     height: 300,
//                     fit: BoxFit.cover,
//                   ),
//                   Container(
//                     height: 300,
//                     width: double.infinity,
//                     color: Colors.black.withOpacity(0.5),
//                     child: const Column(
//                       mainAxisAlignment: MainAxisAlignment.center,
//                       children: [
//                         Text(
//                           'Contact Us',
//                           style: TextStyle(
//                             color: Colors.white,
//                             fontWeight: FontWeight.bold,
//                             fontSize: 32.0,
//                           ),
//                         ),
//                         SizedBox(height: 10),
//                         Text(
//                           'Need Assistance? Contact Our Support Team',
//                           style: TextStyle(
//                             color: Colors.white,
//                             fontSize: 18.0,
//                           ),
//                           textAlign: TextAlign.center,
//                         ),
//                       ],
//                     ),
//                   )
//                 ],
//               ),
//             ),

//             // Introduction Section
//             Padding(
//               padding: const EdgeInsets.all(16.0),
//               child: Column(
//                 crossAxisAlignment: CrossAxisAlignment.start,
//                 children: [
//                   const Text(
//                     'Get In Touch With Milliden Gardens',
//                     style: TextStyle(
//                       color: Color(0xFFA89284),
//                       fontWeight: FontWeight.bold,
//                       fontSize: 24.0,
//                     ),
//                   ),
//                   Container(
//                     width: double.infinity,
//                     height: 4,
//                     margin: const EdgeInsets.only(top: 8, bottom: 16),
//                     decoration: const BoxDecoration(
//                       color: Color(0xFFA89284),
//                       borderRadius: BorderRadius.all(Radius.circular(2)),
//                     ),
//                   ),
//                   const Text(
//                     'We are here to answer any questions you may have about our gardens, services, or events. Whether you\'re planning a visit, interested in our landscaping services, or looking to host an event, our friendly team is ready to assist you. Reach out through any of the methods below or fill out our contact form, and we will get back to you as soon as possible.',
//                     style: TextStyle(
//                       fontSize: 16,
//                       color: Colors.black87,
//                       height: 1.6,
//                     ),
//                     textAlign: TextAlign.left,
//                   ),
//                 ],
//               ),
//             ),

//             // Contact Form Section
//             Container(
//               margin: const EdgeInsets.all(16.0),
//               padding: const EdgeInsets.all(20.0),
//               decoration: BoxDecoration(
//                 color: Colors.white,
//                 borderRadius: BorderRadius.circular(12),
//                 boxShadow: [
//                   BoxShadow(
//                     color: Colors.grey.withOpacity(0.1),
//                     spreadRadius: 1,
//                     blurRadius: 10,
//                     offset: const Offset(0, 3),
//                   ),
//                 ],
//               ),
//               child: Form(
//                 key: _formKey,
//                 child: Column(
//                   crossAxisAlignment: CrossAxisAlignment.start,
//                   children: [
//                     _buildSectionTitle('Contact Form'),
//                     _buildFormField(
//                       controller: _nameController,
//                       label: 'Full Name',
//                       hint: 'Enter your full name',
//                       icon: Icons.person,
//                       validator: (value) {
//                         if (value == null || value.isEmpty) {
//                           return 'Please enter your name';
//                         }
//                         return null;
//                       },
//                     ),
//                     _buildFormField(
//                       controller: _emailController,
//                       label: 'Email Address',
//                       hint: 'Enter your email address',
//                       icon: Icons.email,
//                       validator: (value) {
//                         if (value == null || value.isEmpty) {
//                           return 'Please enter your email';
//                         }
//                         if (!RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$').hasMatch(value)) {
//                           return 'Please enter a valid email';
//                         }
//                         return null;
//                       },
//                     ),
//                     _buildFormField(
//                         controller: _subjectController,
//                         label: 'Subject',
//                         hint: 'Enter your subject',
//                         icon: Icons.message,
//                         maxLines: 4,
//                         validator: (value) {
//                           if (value == null || value.isEmpty) {
//                             return 'Please enter the subject of your message';
//                           }
//                           return null;
//                         },
//                       ),
//                       const SizedBox(height: 20),
//                       SizedBox(
//                         width: double.infinity,
//                         height: 50,
//                         child: ElevatedButton(
//                           onPressed: _submitForm,
//                           style: ElevatedButton.styleFrom(
//                             backgroundColor: const Color(0xFFA89284),
//                             foregroundColor: Colors.white,
//                             shape: RoundedRectangleBorder(
//                               borderRadius: BorderRadius.circular(8),
//                             ),
//                           ),
//                           child: const Text(
//                             'Send Message',
//                             style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
//                           ),
//                         ),
//                       ),
//                     _buildFormField(
//                       controller: _messageController,
//                       label: 'Message',
//                       hint: 'Enter your message',
//                       icon: Icons.message,
//                       maxLines: 4,
//                       validator: (value) {
//                         if (value == null || value.isEmpty) {
//                           return 'Please enter your message';
//                         }
//                         return null;
//                       },
//                     ),
//                     const SizedBox(height: 20),
//                     SizedBox(
//                       width: double.infinity,
//                       height: 50,
//                       child: ElevatedButton(
//                         onPressed: _submitForm,
//                         style: ElevatedButton.styleFrom(
//                           backgroundColor: const Color(0xFFA89284),
//                           foregroundColor: Colors.white,
//                           shape: RoundedRectangleBorder(
//                             borderRadius: BorderRadius.circular(8),
//                           ),
//                         ),
//                         child: const Text(
//                           'Send Message',
//                           style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
//                         ),
//                       ),
//                     ),
//                   ],
//                 ),
//               ),
//             ),

//             // Contact Information Section
//             Container(
//               margin: const EdgeInsets.all(16.0),
//               padding: const EdgeInsets.all(20.0),
//               decoration: BoxDecoration(
//                 color: Colors.white,
//                 borderRadius: BorderRadius.circular(12),
//                 boxShadow: [
//                   BoxShadow(
//                     color: Colors.grey.withOpacity(0.1),
//                     spreadRadius: 1,
//                     blurRadius: 10,
//                     offset: const Offset(0, 3),
//                   ),
//                 ],
//               ),
//               child: Column(
//                 crossAxisAlignment: CrossAxisAlignment.start,
//                 children: [
//                   _buildSectionTitle('Contact Information'),
//                   _buildContactInfo(
//                     Icons.location_on,
//                     'Address',
//                     'Rodi, Homa-Bay, Kenya',
//                   ),
//                   _buildContactInfo(
//                     Icons.phone,
//                     'Phone',
//                     '+254 753 755 016',
//                   ),
//                   _buildContactInfo(
//                     Icons.email,
//                     'Email',
//                     'millidengroupltd@gmail.com',
//                   ),
//                 ],
//               ),
//             ),
//             // Business Hours Section
//             Container(
//               margin: const EdgeInsets.all(16.0),
//               padding: const EdgeInsets.all(20.0),
//               decoration: BoxDecoration(
//                 color: Colors.white,
//                 borderRadius: BorderRadius.circular(12),
//                 boxShadow: [
//                   BoxShadow(
//                     color: Colors.grey.withOpacity(0.1),
//                     spreadRadius: 1,
//                     blurRadius: 10,
//                     offset: const Offset(0, 3),
//                   ),
//                 ],
//               ),
//               child: Column(
//                 crossAxisAlignment: CrossAxisAlignment.start,
//                 children: [
//                   _buildSectionTitle('Business Hours'),
//                   _buildBusinessHours('Sunday - Wednesday:', '9:00 AM - 10:30 PM'),
//                   _buildBusinessHours('Thursday - Saturday:', '9:00 AM - 12:30 AM'),
//                   const SizedBox(height: 20),
//                   const Text(
//                     'Follow Us On Social Media',
//                     style: TextStyle(
//                       fontSize: 16,
//                       fontWeight: FontWeight.bold,
//                       color: Color(0xFFA89284),
//                     ),
//                   ),
//                   const SizedBox(height: 12),
//                   Row(
//                     children: [
//                       IconButton(
//                         icon: const FaIcon(FontAwesomeIcons.instagram),
//                         color: const Color(0xFFA89284),
//                         onPressed: () => _launchUrl('https://www.instagram.com/milliden_gardens?igsh=NTc4MTIwNjQ2YQ=='),
//                       ),
//                       IconButton(
//                         icon: const FaIcon(FontAwesomeIcons.facebook),
//                         color: const Color(0xFFA89284),
//                         onPressed: () => _launchUrl("https://www.facebook.com/p/Milliden-Gardens-61555924461081/"),
//                       ),
//                       IconButton(
//                         icon: const FaIcon(FontAwesomeIcons.tiktok),
//                         color: const Color(0xFFA89284),
//                         onPressed: () => _launchUrl("https://www.tiktok.com/@millidengardens"),
//                       ),
//                       IconButton(
//                         icon: const FaIcon(FontAwesomeIcons.whatsapp),
//                         color: const Color(0xFFA89284),
//                         onPressed: () => _launchUrl("https://wa.me/254753755016"),
//                       ),
//                     ],
//                   ),
//                 ],
//               ),
//             ),
//             const SizedBox(height: 20),
//             // CustomFooter()
//           ],
//         ),
//       ),
//     );
//   }
// }
import 'package:flutter/material.dart';
import 'package:milliden_app/component/navbar.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';
import 'dart:io' show Platform;
import 'package:flutter/foundation.dart' show kIsWeb;

class Contact extends StatefulWidget {
  const Contact({super.key});

  @override
  State<Contact> createState() => _ContactState();
}

class _ContactState extends State<Contact> {
  final _formKey = GlobalKey<FormState>();
  final _nameController = TextEditingController();
  final _emailController = TextEditingController();
  final _subjectController = TextEditingController();
  final _messageController = TextEditingController();

  // Milliden Gardens location coordinates and address
  static const String millidenLocation = 'Milliden Gardens, Rodi, Homa-Bay, Kenya';
  static const String millidenMapsLink = 'https://maps.app.goo.gl/3aabr24YSpS5xeag9';
  static const double latitude = -0.5270; // Approximate coordinates for Rodi, Homa-Bay
  static const double longitude = 34.4590;

  @override
  void dispose() {
    _nameController.dispose();
    _emailController.dispose();
    _subjectController.dispose();
    _messageController.dispose();
    super.dispose();
  }

  Future<void> _launchUrl(String url) async {
    final Uri uri = Uri.parse(url);
    if (!await launchUrl(uri, mode: LaunchMode.externalApplication)) {
      if (mounted) {
        _showErrorSnackBar('Could not launch $url');
      }
    }
  }

  Future<void> _openMaps() async {
    try {
      if (kIsWeb) {
        // For web, open the Google Maps link directly
        await launchUrl(Uri.parse(millidenMapsLink), mode: LaunchMode.externalApplication);
      } else if (Platform.isAndroid) {
        // For Android, try Google Maps app with coordinates first
        final Uri googleMapsUri = Uri.parse('geo:$latitude,$longitude?q=${Uri.encodeComponent(millidenLocation)}');
        final Uri googleMapsWebUri = Uri.parse('https://www.google.com/maps/search/?api=1&query=${Uri.encodeComponent(millidenLocation)}');
        
        if (await canLaunchUrl(googleMapsUri)) {
          await launchUrl(googleMapsUri);
        } else {
          await launchUrl(googleMapsWebUri, mode: LaunchMode.externalApplication);
        }
      } else if (Platform.isIOS) {
        // For iOS, try Apple Maps first, then Google Maps
        final Uri appleMapsUri = Uri.parse('http://maps.apple.com/?ll=$latitude,$longitude&q=${Uri.encodeComponent(millidenLocation)}');
        final Uri googleMapsWebUri = Uri.parse('https://www.google.com/maps/search/?api=1&query=${Uri.encodeComponent(millidenLocation)}');
        
        if (await canLaunchUrl(appleMapsUri)) {
          await launchUrl(appleMapsUri);
        } else {
          await launchUrl(googleMapsWebUri, mode: LaunchMode.externalApplication);
        }
      } else {
        // Fallback for other platforms - use the direct Google Maps link
        await launchUrl(Uri.parse(millidenMapsLink), mode: LaunchMode.externalApplication);
      }
    } catch (e) {
      if (mounted) {
        _showErrorSnackBar('Could not open maps. Please try again.');
      }
    }
  }

  void _showErrorSnackBar(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message),
        backgroundColor: Colors.red,
        duration: const Duration(seconds: 3),
      ),
    );
  }

  void _showSuccessSnackBar(String message) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text(message),
        backgroundColor: const Color(0xFFA89284),
        duration: const Duration(seconds: 3),
      ),
    );
  }

  void _submitForm() {
    if (_formKey.currentState!.validate()) {
      // TODO: Implement actual form submission logic here
      // You might want to send this to your backend or email service
      
      _showSuccessSnackBar('Message sent successfully! We\'ll get back to you soon.');
      
      // Clear form
      _nameController.clear();
      _emailController.clear();
      _subjectController.clear();
      _messageController.clear();
    }
  }

  Widget _buildSectionTitle(String title) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          title,
          style: const TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
            color: Color(0xFFA89284),
          ),
        ),
        Container(
          width: 60,
          height: 4,
          margin: const EdgeInsets.only(top: 8, bottom: 16),
          decoration: const BoxDecoration(
            color: Color.fromARGB(255, 235, 187, 157),
            borderRadius: BorderRadius.all(Radius.circular(2)),
          ),
        ),
      ],
    );
  }

  Widget _buildContactInfo(IconData icon, String label, String info, {VoidCallback? onTap}) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(8),
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                padding: const EdgeInsets.all(8),
                decoration: BoxDecoration(
                  color: const Color(0xFFA89284).withOpacity(0.1),
                  borderRadius: BorderRadius.circular(8),
                ),
                child: Icon(
                  icon,
                  size: 24,
                  color: const Color(0xFF393937),
                ),
              ),
              const SizedBox(width: 16),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      label,
                      style: const TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                        color: Color(0xFFA89284),
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      info,
                      style: TextStyle(
                        fontSize: 16,
                        color: onTap != null ? const Color(0xFFA89284) : Colors.black87,
                        decoration: onTap != null ? TextDecoration.underline : null,
                      ),
                    ),
                  ],
                ),
              ),
              if (onTap != null)
                const Icon(
                  Icons.launch,
                  size: 16,
                  color: Color(0xFFA89284),
                ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildBusinessHours(String days, String hours) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4.0),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
            flex: 3,
            child: Text(
              days,
              style: const TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
                color: Color(0xFFA89284),
              ),
            ),
          ),
          Expanded(
            flex: 2,
            child: Text(
              hours,
              style: const TextStyle(
                fontSize: 16,
                color: Colors.black87,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildFormField({
    required TextEditingController controller,
    required String label,
    required String hint,
    required IconData icon,
    int maxLines = 1,
    String? Function(String?)? validator,
  }) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: TextFormField(
        controller: controller,
        maxLines: maxLines,
        validator: validator,
        decoration: InputDecoration(
          labelText: label,
          hintText: hint,
          prefixIcon: Icon(icon, color: const Color(0xFFA89284)),
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: const BorderSide(color: Color(0xFFA89284)),
          ),
          focusedBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: const BorderSide(color: Color(0xFFA89284), width: 2),
          ),
          enabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: BorderSide(color: Colors.grey.shade300),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(),
      endDrawer: const CustomDrawer(),
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Hero Section
            SizedBox(
              height: 300,
              width: double.infinity,
              child: Stack(
                children: [
                  Image.asset(
                    "lib/assets/images/lawn1.jpeg",
                    width: double.infinity,
                    height: 300,
                    fit: BoxFit.cover,
                  ),
                  Container(
                    height: 300,
                    width: double.infinity,
                    color: Colors.black.withOpacity(0.5),
                    child: const Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(
                          'Contact Us',
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.bold,
                            fontSize: 32.0,
                          ),
                        ),
                        SizedBox(height: 10),
                        Text(
                          'Need Assistance? Contact Our Support Team',
                          style: TextStyle(
                            color: Colors.white,
                            fontSize: 18.0,
                          ),
                          textAlign: TextAlign.center,
                        ),
                      ],
                    ),
                  )
                ],
              ),
            ),

            // Introduction Section
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'Get In Touch With Milliden Gardens',
                    style: TextStyle(
                      color: Color(0xFFA89284),
                      fontWeight: FontWeight.bold,
                      fontSize: 24.0,
                    ),
                  ),
                  Container(
                    width: double.infinity,
                    height: 4,
                    margin: const EdgeInsets.only(top: 8, bottom: 16),
                    decoration: const BoxDecoration(
                      color: Color(0xFFA89284),
                      borderRadius: BorderRadius.all(Radius.circular(2)),
                    ),
                  ),
                  const Text(
                    'We are here to answer any questions you may have about our gardens, services, or events. Whether you\'re planning a visit, interested in our landscaping services, or looking to host an event, our friendly team is ready to assist you. Reach out through any of the methods below or fill out our contact form, and we will get back to you as soon as possible.',
                    style: TextStyle(
                      fontSize: 16,
                      color: Colors.black87,
                      height: 1.6,
                    ),
                    textAlign: TextAlign.left,
                  ),
                ],
              ),
            ),

            // Contact Form Section
            Container(
              margin: const EdgeInsets.all(16.0),
              padding: const EdgeInsets.all(20.0),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(12),
                boxShadow: [
                  BoxShadow(
                    color: Colors.grey.withOpacity(0.1),
                    spreadRadius: 1,
                    blurRadius: 10,
                    offset: const Offset(0, 3),
                  ),
                ],
              ),
              child: Form(
                key: _formKey,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    _buildSectionTitle('Contact Form'),
                    _buildFormField(
                      controller: _nameController,
                      label: 'Full Name',
                      hint: 'Enter your full name',
                      icon: Icons.person,
                      validator: (value) {
                        if (value == null || value.trim().isEmpty) {
                          return 'Please enter your name';
                        }
                        return null;
                      },
                    ),
                    _buildFormField(
                      controller: _emailController,
                      label: 'Email Address',
                      hint: 'Enter your email address',
                      icon: Icons.email,
                      validator: (value) {
                        if (value == null || value.trim().isEmpty) {
                          return 'Please enter your email';
                        }
                        if (!RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$').hasMatch(value.trim())) {
                          return 'Please enter a valid email';
                        }
                        return null;
                      },
                    ),
                    _buildFormField(
                      controller: _subjectController,
                      label: 'Subject',
                      hint: 'Enter your subject',
                      icon: Icons.subject,
                      validator: (value) {
                        if (value == null || value.trim().isEmpty) {
                          return 'Please enter the subject of your message';
                        }
                        return null;
                      },
                    ),
                    _buildFormField(
                      controller: _messageController,
                      label: 'Message',
                      hint: 'Enter your message',
                      icon: Icons.message,
                      maxLines: 4,
                      validator: (value) {
                        if (value == null || value.trim().isEmpty) {
                          return 'Please enter your message';
                        }
                        if (value.trim().length < 10) {
                          return 'Message must be at least 10 characters long';
                        }
                        return null;
                      },
                    ),
                    const SizedBox(height: 20),
                    SizedBox(
                      width: double.infinity,
                      height: 50,
                      child: ElevatedButton(
                        onPressed: _submitForm,
                        style: ElevatedButton.styleFrom(
                          backgroundColor: const Color(0xFFA89284),
                          foregroundColor: Colors.white,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(8),
                          ),
                        ),
                        child: const Text(
                          'Send Message',
                          style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),

            // Contact Information Section
            Container(
              margin: const EdgeInsets.all(16.0),
              padding: const EdgeInsets.all(20.0),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(12),
                boxShadow: [
                  BoxShadow(
                    color: Colors.grey.withOpacity(0.1),
                    spreadRadius: 1,
                    blurRadius: 10,
                    offset: const Offset(0, 3),
                  ),
                ],
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _buildSectionTitle('Contact Information'),
                  _buildContactInfo(
                    Icons.location_on,
                    'Address',
                    'Rodi, Homa-Bay, Kenya',
                    onTap: _openMaps,
                  ),
                  _buildContactInfo(
                    Icons.phone,
                    'Phone',
                    '+254 753 755 016',
                    onTap: () => _launchUrl('tel:+254753755016'),
                  ),
                  _buildContactInfo(
                    Icons.email,
                    'Email',
                    'millidengroupltd@gmail.com',
                    onTap: () => _launchUrl('mailto:millidengroupltd@gmail.com'),
                  ),
                ],
              ),
            ),

            // Map Section
            Container(
              margin: const EdgeInsets.all(16.0),
              padding: const EdgeInsets.all(20.0),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(12),
                boxShadow: [
                  BoxShadow(
                    color: Colors.grey.withOpacity(0.1),
                    spreadRadius: 1,
                    blurRadius: 10,
                    offset: const Offset(0, 3),
                  ),
                ],
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _buildSectionTitle('Find Us'),
                  const Text(
                    'Visit us at our location in Rodi, Homa-Bay, Kenya. Tap the map below or use the directions button to navigate to Milliden Gardens.',
                    style: TextStyle(
                      fontSize: 16,
                      color: Colors.black87,
                      height: 1.6,
                    ),
                  ),
                  const SizedBox(height: 16),
                  GestureDetector(
                    onTap: _openMaps,
                    child: Container(
                      height: 250,
                      width: double.infinity,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(12),
                        border: Border.all(color: Colors.grey.shade300),
                        color: const Color(0xFFA89284).withOpacity(0.05),
                      ),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Container(
                            padding: const EdgeInsets.all(16),
                            decoration: BoxDecoration(
                              color: const Color(0xFFA89284).withOpacity(0.1),
                              borderRadius: BorderRadius.circular(50),
                            ),
                            child: const Icon(
                              Icons.location_on,
                              size: 48,
                              color: Color(0xFFA89284),
                            ),
                          ),
                          const SizedBox(height: 16),
                          const Text(
                            'Milliden Gardens Location',
                            style: TextStyle(
                              fontSize: 20,
                              fontWeight: FontWeight.bold,
                              color: Color(0xFFA89284),
                            ),
                          ),
                          const SizedBox(height: 8),
                          const Text(
                            'Rodi, Homa-Bay, Kenya',
                            style: TextStyle(
                              fontSize: 16,
                              color: Colors.black87,
                            ),
                          ),
                          const SizedBox(height: 16),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                            decoration: BoxDecoration(
                              color: const Color(0xFFA89284),
                              borderRadius: BorderRadius.circular(20),
                            ),
                            child: const Text(
                              'Tap to Open Maps',
                              style: TextStyle(
                                color: Colors.white,
                                fontWeight: FontWeight.bold,
                                fontSize: 14,
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(height: 16),
                  Row(
                    children: [
                      Expanded(
                        child: ElevatedButton.icon(
                          onPressed: _openMaps,
                          icon: const Icon(Icons.directions, size: 20),
                          label: const Text('Get Directions'),
                          style: ElevatedButton.styleFrom(
                            backgroundColor: const Color(0xFFA89284),
                            foregroundColor: Colors.white,
                            shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(8),
                            ),
                            padding: const EdgeInsets.symmetric(vertical: 12),
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),

            // Business Hours Section
            Container(
              margin: const EdgeInsets.all(16.0),
              padding: const EdgeInsets.all(20.0),
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(12),
                boxShadow: [
                  BoxShadow(
                    color: Colors.grey.withOpacity(0.1),
                    spreadRadius: 1,
                    blurRadius: 10,
                    offset: const Offset(0, 3),
                  ),
                ],
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  _buildSectionTitle('Business Hours'),
                  _buildBusinessHours('Sunday - Wednesday:', '9:00 AM - 10:30 PM'),
                  _buildBusinessHours('Thursday - Saturday:', '9:00 AM - 12:30 AM'),
                  const SizedBox(height: 20),
                  const Text(
                    'Follow Us On Social Media',
                    style: TextStyle(
                      fontSize: 16,
                      fontWeight: FontWeight.bold,
                      color: Color(0xFFA89284),
                    ),
                  ),
                  const SizedBox(height: 12),
                  Row(
                    children: [
                      IconButton(
                        icon: const FaIcon(FontAwesomeIcons.instagram),
                        color: const Color(0xFFA89284),
                        onPressed: () => _launchUrl('https://www.instagram.com/milliden_gardens?igsh=NTc4MTIwNjQ2YQ=='),
                        tooltip: 'Follow us on Instagram',
                      ),
                      IconButton(
                        icon: const FaIcon(FontAwesomeIcons.facebook),
                        color: const Color(0xFFA89284),
                        onPressed: () => _launchUrl("https://www.facebook.com/p/Milliden-Gardens-61555924461081/"),
                        tooltip: 'Like us on Facebook',
                      ),
                      IconButton(
                        icon: const FaIcon(FontAwesomeIcons.tiktok),
                        color: const Color(0xFFA89284),
                        onPressed: () => _launchUrl("https://www.tiktok.com/@millidengardens"),
                        tooltip: 'Follow us on TikTok',
                      ),
                      IconButton(
                        icon: const FaIcon(FontAwesomeIcons.whatsapp),
                        color: const Color(0xFFA89284),
                        onPressed: () => _launchUrl("https://wa.me/254753755016"),
                        tooltip: 'Chat with us on WhatsApp',
                      ),
                    ],
                  ),
                ],
              ),
            ),
            const SizedBox(height: 20),
            // CustomFooter()
          ],
        ),
      ),
    );
  }
}