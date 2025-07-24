import 'package:flutter/material.dart';
import 'package:milliden_app/component/navbar.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';


class Contact extends StatelessWidget {
  const Contact({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(),
      endDrawer: const CustomDrawer(),
      body: SingleChildScrollView(
        child: Column(
          children: [
            // Container(
            //   child: Image.asset(
            //     "lib/assets/images/lawn1.jpeg",
            //     width: double.infinity,
            //     height: 300,
            //     fit: BoxFit.cover,
            //   ),
            // ),
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
                    color: const Color.fromRGBO(0, 0, 0, 1).withOpacity(0.5),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(
                          'Contact Us',
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.bold,
                            fontSize: 22.0,
                          ),
                        ),
                        SizedBox(height: 10),
                        Text(
                          'Need Assistance? Contact Our Support Team',
                          style: TextStyle(
                            color: Colors.white,
                            fontWeight: FontWeight.bold,
                            fontSize: 18.0,
                          ),
                        ),
                      ],
                    ),
                  )
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Get In Touch With Milliden Gardens',
                    style: TextStyle(
                      color: Color(0xFFA89284),
                      fontWeight: FontWeight.bold,
                      fontSize: 22.0,
                    ),
                  ),
                  SizedBox(
                    width: MediaQuery.of(context).size.width / 1,
                    child: Divider(
                      color: Color(0xFFA89284),
                      thickness: 4,
                      endIndent: 16,
                       
                    ),
                  ),
                  SizedBox(height: 8.0),
                  Text(
                    'We are here to answer any questions you may have about our gardens, services, or events. Whether youre planning a visit, interested in our landscaping services, or looking to host an event, our friendly team is ready to assist you. Reach out through any of the methods below or fill out our contact form, and we will get back to you as soon as possible.',
                    style: TextStyle(
                      fontSize: 18,
                      color: Colors.black87,
                      height: 1.5, 
                    ),
                    textAlign: TextAlign.left,
                  ),
                  SizedBox(height: 16.0),
                ],
              ),
            ),
            SizedBox(
              child: Container(
                padding: const EdgeInsets.all(16.0),
                color: Color.fromRGBO(255, 255, 255, 1),
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Contact Form',
                        style: TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                          color: Color(0xFFA89284),
                        ),
                      ),
                      SizedBox(
                        width: MediaQuery.of(context).size.width / 2,
                        child: Divider(
                          color: Color.fromARGB(255, 235, 187, 157),
                          thickness: 4,
                          endIndent: 16,
                           
                        ),
                      ),
                      SizedBox(height: 16.0),
                      Container(
                        padding: const EdgeInsets.all(8.0),
                        child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(
                            Icons.location_on,
                            size: 30,
                            color: Color(0xFF393937),
                          ),
                          Column(
                            children: [
                              Text(
                                'Address:              ',
                                style: TextStyle(
                                  fontSize: 20,
                                  fontWeight: FontWeight.bold,
                                  color: Color(0xFFA89284),
                                ),
                                textAlign: TextAlign.start,
                              ),
                              Text(
                            '   Rodi, Homa-Bay, Kenya',
                            style: TextStyle(
                              fontSize: 16,
                              color: Colors.black87,
                            ),
                          ),
                            ],
                          ),
                        ],
                      ),  
                      ),
                      Container(
                        padding: const EdgeInsets.all(8.0),
                        child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(
                            Icons.phone,
                            size: 30,
                            color: Color(0xFF393937),
                          ),
                          Column(
                            children: [
                              Text(
                                ' Phone:            ',
                                style: TextStyle(
                                  fontSize: 20,
                                  fontWeight: FontWeight.bold,
                                  color: Color(0xFFA89284),
                                ),
                                textAlign: TextAlign.start,
                              ),
                              Text(
                            '   +254 753 755 016',
                            style: TextStyle(
                              fontSize: 16,
                              color: Colors.black87,
                            ),
                          ),
                            ],
                          ),
                        ],
                      ),
                      ),
                      Container(
                        padding: const EdgeInsets.all(8.0),
                        child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Icon(
                            Icons.email,
                            size: 30,
                            color: Color(0xFF393937),
                          ),
                          Column(
                            children: [
                              Text(
                                'Email:                         ',
                                style: TextStyle(
                                  fontSize: 20,
                                  fontWeight: FontWeight.bold,
                                  color: Color(0xFFA89284),
                                ),
                                textAlign: TextAlign.start,
                              ),
                              Text(
                            '   millidengroupltd@gmail.com',
                            style: TextStyle(
                              fontSize: 16,
                              color: Colors.black87,
                            ),
                          ),
                            ],
                          ),
                        ],
                      ),
                      ),
                      SizedBox(height: 16.0),
                    ],
                    
                  ),
                  
                ),
                
              ),
              
            ),
            SizedBox(
              child: Container(
                padding: const EdgeInsets.all(16.0),
                color: Color.fromRGBO(255, 255, 255, 1),
                child: Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Business Hours',
                        style: TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                          color: Color(0xFFA89284),
                        ),
                      ),
                      SizedBox(
                        width: MediaQuery.of(context).size.width / 2,
                        child: Divider(
                          color: Color.fromARGB(255, 235, 187, 157),
                          thickness: 4,
                          endIndent: 16,
                           
                        ),
                      ),
                      SizedBox(height: 16.0),
                      Container(
                        padding: const EdgeInsets.all(8.0),
                        child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Row(
                            children: [
                              Text(
                                'Sunday - Wednesday:',
                                style: TextStyle(
                                  fontSize: 16,
                                  fontWeight: FontWeight.bold,
                                  color: Color(0xFFA89284),
                                ),
                                textAlign: TextAlign.start,
                              ),
                              Text(
                            ' 9:00 AM - 10:30 PM',
                            style: TextStyle(
                              fontSize: 16,
                              color: Colors.black87,
                            ),
                          ),
                            ],
                          ),
                        ],
                      ),  
                      ),
                      Container(
                        padding: const EdgeInsets.all(8.0),
                        child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Row(
                            children: [
                              Text(
                                'Thursday, Friday, Saturday:',
                                style: TextStyle(
                                  fontSize: 15,
                                  fontWeight: FontWeight.bold,
                                  color: Color(0xFFA89284),
                                ),
                                textAlign: TextAlign.start,
                              ),
                              Text(
                            '9:00 AM - 12:30 AM',
                            style: TextStyle(
                              fontSize: 16,
                              color: Colors.black87,
                            ),
                          ),
                            ],
                          ),
                        ],
                        
                      ),
                      
                      ),
                      Container(
                        padding: const EdgeInsets.all(8.0),
                        child: Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Row(
                            children: [
                              IconButton(
                                // Use the FaIcon Widget + FontAwesomeIcons class for the IconData
                                icon: FaIcon(FontAwesomeIcons.instagram), 
                                onPressed: () { print("Pressed"); }
                              ),
                              IconButton(
                                // Use the FaIcon Widget + FontAwesomeIcons class for the IconData
                                icon: FaIcon(FontAwesomeIcons.facebook), 
                                onPressed: () { print("Pressed"); }
                              ),
                              IconButton(
                                // Use the FaIcon Widget + FontAwesomeIcons class for the IconData
                                icon: FaIcon(FontAwesomeIcons.tiktok), 
                                onPressed: () { print("Pressed"); }
                              ),
                              IconButton(
                                // Use the FaIcon Widget + FontAwesomeIcons class for the IconData
                                icon: FaIcon(FontAwesomeIcons.whatsapp), 
                                onPressed: () { print("Pressed"); }
                              ),
                            ],
                          ),
                      
                    ],
                  ),
                ),
                    ],
              ),
            ),
          )
        ),
      ]
      ),
      ),
    );
  }
}