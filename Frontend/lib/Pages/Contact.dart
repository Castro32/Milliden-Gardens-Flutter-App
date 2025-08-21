// import 'package:flutter/material.dart';
// import 'package:milliden_app/component/navbar.dart';
// import 'package:font_awesome_flutter/font_awesome_flutter.dart';
// import 'package:url_launcher/url_launcher.dart';

// class Contact extends StatelessWidget {
//   const Contact({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: CustomAppBar(),
//       endDrawer: const CustomDrawer(),
//       body: SingleChildScrollView(
//         child: Column(
//           children: [
//             // Container(
//             //   child: Image.asset(
//             //     "lib/assets/images/lawn1.jpeg",
//             //     width: double.infinity,
//             //     height: 300,
//             //     fit: BoxFit.cover,
//             //   ),
//             // ),
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
//                     color: const Color.fromRGBO(0, 0, 0, 1).withOpacity(0.5),
//                     child: Column(
//                       mainAxisAlignment: MainAxisAlignment.center,
//                       children: [
//                         Text(
//                           'Contact Us',
//                           style: TextStyle(
//                             color: Colors.white,
//                             fontWeight: FontWeight.bold,
//                             fontSize: 22.0,
//                           ),
//                         ),
//                         SizedBox(height: 10),
//                         Text(
//                           'Need Assistance? Contact Our Support Team',
//                           style: TextStyle(
//                             color: Colors.white,
//                             fontWeight: FontWeight.bold,
//                             fontSize: 18.0,
//                           ),
//                         ),
//                       ],
//                     ),
//                   )
//                 ],
//               ),
//             ),
//             Padding(
//               padding: const EdgeInsets.all(16.0),
//               child: Column(
//                 crossAxisAlignment: CrossAxisAlignment.start,
//                 children: [
//                   Text(
//                     'Get In Touch With Milliden Gardens',
//                     style: TextStyle(
//                       color: Color(0xFFA89284),
//                       fontWeight: FontWeight.bold,
//                       fontSize: 22.0,
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
//                   SizedBox(height: 8.0),
//                   Text(
//                     'We are here to answer any questions you may have about our gardens, services, or events. Whether youre planning a visit, interested in our landscaping services, or looking to host an event, our friendly team is ready to assist you. Reach out through any of the methods below or fill out our contact form, and we will get back to you as soon as possible.',
//                     style: TextStyle(
//                       fontSize: 18,
//                       color: Colors.black87,
//                       height: 1.5, 
//                     ),
//                     textAlign: TextAlign.left,
//                   ),
//                   SizedBox(height: 16.0),
//                 ],
//               ),
//             ),
//             SizedBox(
//               child: Container(
//                 padding: const EdgeInsets.all(16.0),
//                 color: Color.fromRGBO(255, 255, 255, 1),
//                 child: Padding(
//                   padding: const EdgeInsets.all(8.0),
//                   child: Column(
//                     crossAxisAlignment: CrossAxisAlignment.start,
//                     children: [
//                       Text(
//                         'Contact Form',
//                         style: TextStyle(
//                           fontSize: 20,
//                           fontWeight: FontWeight.bold,
//                           color: Color(0xFFA89284),
//                         ),
//                       ),
//                       SizedBox(
//                         width: MediaQuery.of(context).size.width / 2,
//                         child: Divider(
//                           color: Color.fromARGB(255, 235, 187, 157),
//                           thickness: 4,
//                           endIndent: 16,
                           
//                         ),
//                       ),
//                       SizedBox(height: 16.0),
//                       Container(
//                         padding: const EdgeInsets.all(8.0),
//                         child: Row(
//                         mainAxisSize: MainAxisSize.min,
//                         children: [
//                           Icon(
//                             Icons.location_on,
//                             size: 30,
//                             color: Color(0xFF393937),
//                           ),
//                           Column(
//                             children: [
//                               Text(
//                                 'Address:              ',
//                                 style: TextStyle(
//                                   fontSize: 20,
//                                   fontWeight: FontWeight.bold,
//                                   color: Color(0xFFA89284),
//                                 ),
//                                 textAlign: TextAlign.start,
//                               ),
//                               Text(
//                             '   Rodi, Homa-Bay, Kenya',
//                             style: TextStyle(
//                               fontSize: 16,
//                               color: Colors.black87,
//                             ),
//                           ),
//                             ],
//                           ),
//                         ],
//                       ),  
//                       ),
//                       Container(
//                         padding: const EdgeInsets.all(8.0),
//                         child: Row(
//                         mainAxisSize: MainAxisSize.min,
//                         children: [
//                           Icon(
//                             Icons.phone,
//                             size: 30,
//                             color: Color(0xFF393937),
//                           ),
//                           Column(
//                             children: [
//                               Text(
//                                 ' Phone:            ',
//                                 style: TextStyle(
//                                   fontSize: 20,
//                                   fontWeight: FontWeight.bold,
//                                   color: Color(0xFFA89284),
//                                 ),
//                                 textAlign: TextAlign.start,
//                               ),
//                               Text(
//                             '   +254 753 755 016',
//                             style: TextStyle(
//                               fontSize: 16,
//                               color: Colors.black87,
//                             ),
//                           ),
//                             ],
//                           ),
//                         ],
//                       ),
//                       ),
//                       Container(
//                         padding: const EdgeInsets.all(8.0),
//                         child: Row(
//                         mainAxisSize: MainAxisSize.min,
//                         children: [
//                           Icon(
//                             Icons.email,
//                             size: 30,
//                             color: Color(0xFF393937),
//                           ),
//                           Column(
//                             children: [
//                               Text(
//                                 'Email:                         ',
//                                 style: TextStyle(
//                                   fontSize: 20,
//                                   fontWeight: FontWeight.bold,
//                                   color: Color(0xFFA89284),
//                                 ),
//                                 textAlign: TextAlign.start,
//                               ),
//                               Text(
//                             '   millidengroupltd@gmail.com',
//                             style: TextStyle(
//                               fontSize: 16,
//                               color: Colors.black87,
//                             ),
//                           ),
//                             ],
//                           ),
//                         ],
//                       ),
//                       ),
//                       SizedBox(height: 16.0),
//                     ],
                    
//                   ),
                  
//                 ),
                
//               ),
              
//             ),
//             SizedBox(
//               child: Container(
//                 padding: const EdgeInsets.all(16.0),
//                 color: Color.fromRGBO(255, 255, 255, 1),
//                 child: Padding(
//                   padding: const EdgeInsets.all(8.0),
//                   child: Column(
//                     crossAxisAlignment: CrossAxisAlignment.start,
//                     children: [
//                       Text(
//                         'Business Hours',
//                         style: TextStyle(
//                           fontSize: 20,
//                           fontWeight: FontWeight.bold,
//                           color: Color(0xFFA89284),
//                         ),
//                       ),
//                       SizedBox(
//                         width: MediaQuery.of(context).size.width / 2,
//                         child: Divider(
//                           color: Color.fromARGB(255, 235, 187, 157),
//                           thickness: 4,
//                           endIndent: 16,
                           
//                         ),
//                       ),
//                       SizedBox(height: 16.0),
//                       Container(
//                         padding: const EdgeInsets.all(8.0),
//                         child: Row(
//                         mainAxisSize: MainAxisSize.min,
//                         children: [
//                           Row(
//                             children: [
//                               Text(
//                                 'Sunday - Wednesday:',
//                                 style: TextStyle(
//                                   fontSize: 16,
//                                   fontWeight: FontWeight.bold,
//                                   color: Color(0xFFA89284),
//                                 ),
//                                 textAlign: TextAlign.start,
//                               ),
//                               Text(
//                             ' 9:00 AM - 10:30 PM',
//                             style: TextStyle(
//                               fontSize: 16,
//                               color: Colors.black87,
//                             ),
//                           ),
//                             ],
//                           ),
//                         ],
//                       ),  
//                       ),
//                       Container(
//                         padding: const EdgeInsets.all(8.0),
//                         child: Row(
//                         mainAxisSize: MainAxisSize.min,
//                         children: [
//                           Row(
//                             children: [
//                               Text(
//                                 'Thursday, Friday, Saturday:',
//                                 style: TextStyle(
//                                   fontSize: 15,
//                                   fontWeight: FontWeight.bold,
//                                   color: Color(0xFFA89284),
//                                 ),
//                                 textAlign: TextAlign.start,
//                               ),
//                               Text(
//                             '9:00 AM - 12:30 AM',
//                             style: TextStyle(
//                               fontSize: 16,
//                               color: Colors.black87,
//                             ),
//                           ),
//                             ],
//                           ),
//                         ],
                        
//                       ),
                      
//                       ),
//                       Container(
//                         padding: const EdgeInsets.all(8.0),
//                         child: Row(
//                         mainAxisSize: MainAxisSize.min,
//                         children: [
//                           Row(
//                             children: [
//                               IconButton(
//                                 icon: FaIcon(FontAwesomeIcons.instagram), 
//                                 onPressed: () async {
//                                   final Uri url = Uri.parse('https://www.instagram.com/milliden_gardens?igsh=NTc4MTIwNjQ2YQ==');
//                                   if (!await launchUrl(url)) {
//                                     throw 'Could not launch $url';
//                                   }
//                                 },  
//                               ),
//                               IconButton(
//                                 icon: FaIcon(FontAwesomeIcons.facebook), 
//                                 onPressed: () async {
//                                   final Uri url = Uri.parse("https://www.facebook.com/p/Milliden-Gardens-61555924461081/");
//                                   if (!await launchUrl(url)) {
//                                     throw 'Could not launch $url';
//                                   }
//                                 },
//                               ),
//                               IconButton(
//                                 icon: FaIcon(FontAwesomeIcons.tiktok), 
//                                 onPressed: () async {
//                                   final Uri url = Uri.parse("https://www.tiktok.com/@millidengardens");
//                                   if (!await launchUrl(url)) {
//                                     throw 'Could not launch $url';
//                                   }
//                                 },
//                               ),
//                               IconButton(
//                                 icon: FaIcon(FontAwesomeIcons.whatsapp), 
//                                 onPressed: () async {
//                                   final Uri url = Uri.parse("https://wa.me/254753755016");
//                                   if (!await launchUrl(url)) {
//                                     throw 'Could not launch $url';
//                                   }
//                                 }
//                               ),
//                             ],
//                           ),
                      
//                     ],
//                   ),
//                 ),
//                     ],
//               ),
//             ),
//           )
//         ),
//       ]
//       ),
//       ),
//     );
//   }
// }
import 'package:flutter/material.dart';
import 'package:milliden_app/component/navbar.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

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
    if (!await launchUrl(uri)) {
      throw 'Could not launch $url';
    }
  }

  void _submitForm() {
    if (_formKey.currentState!.validate()) {
      // Handle form submission here
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text('Message sent successfully!'),
          backgroundColor: Color(0xFFA89284),
        ),
      );
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

  Widget _buildContactInfo(IconData icon, String label, String info) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
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
                  style: const TextStyle(
                    fontSize: 16,
                    color: Colors.black87,
                  ),
                ),
              ],
            ),
          ),
        ],
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
                        if (value == null || value.isEmpty) {
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
                        if (value == null || value.isEmpty) {
                          return 'Please enter your email';
                        }
                        if (!RegExp(r'^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$').hasMatch(value)) {
                          return 'Please enter a valid email';
                        }
                        return null;
                      },
                    ),
                    _buildFormField(
                        controller: _subjectController,
                        label: 'Subject',
                        hint: 'Enter your subject',
                        icon: Icons.message,
                        maxLines: 4,
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return 'Please enter the subject of your message';
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
                    _buildFormField(
                      controller: _messageController,
                      label: 'Message',
                      hint: 'Enter your message',
                      icon: Icons.message,
                      maxLines: 4,
                      validator: (value) {
                        if (value == null || value.isEmpty) {
                          return 'Please enter your message';
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
                  ),
                  _buildContactInfo(
                    Icons.phone,
                    'Phone',
                    '+254 753 755 016',
                  ),
                  _buildContactInfo(
                    Icons.email,
                    'Email',
                    'millidengroupltd@gmail.com',
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
                      ),
                      IconButton(
                        icon: const FaIcon(FontAwesomeIcons.facebook),
                        color: const Color(0xFFA89284),
                        onPressed: () => _launchUrl("https://www.facebook.com/p/Milliden-Gardens-61555924461081/"),
                      ),
                      IconButton(
                        icon: const FaIcon(FontAwesomeIcons.tiktok),
                        color: const Color(0xFFA89284),
                        onPressed: () => _launchUrl("https://www.tiktok.com/@millidengardens"),
                      ),
                      IconButton(
                        icon: const FaIcon(FontAwesomeIcons.whatsapp),
                        color: const Color(0xFFA89284),
                        onPressed: () => _launchUrl("https://wa.me/254753755016"),
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