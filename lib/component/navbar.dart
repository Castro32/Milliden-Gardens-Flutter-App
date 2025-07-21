import 'package:flutter/material.dart';
import 'package:milliden_app/Pages/About.dart';
import 'package:milliden_app/Pages/Contact.dart';
import 'package:milliden_app/Pages/Gallery.dart';
import 'package:milliden_app/Pages/Rooms.dart';
import 'package:milliden_app/Pages/home.dart';
import 'package:milliden_app/component/main_layout.dart';

class CustomAppBar extends StatelessWidget implements PreferredSizeWidget {
  final void Function()? onTap;
  const CustomAppBar({super.key, this.onTap});

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);

  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: const Color.fromARGB(255, 79, 79, 71),
      title: Row(
        children: [
          SizedBox(
            width: 50,
            child: Image.asset(
              "lib/assets/images/Logo.jpeg",
              width: 200,
              height: 200,
              fit: BoxFit.contain,
            ),
          ),
          const SizedBox(width: 10), 
          const Expanded(
            child: Text(
              "The Milliden Gardens",
              style: TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
                color: Color(0xFFE6E5E3)
              ),
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
            ),
          ),
        ],
      ),
      // drawer opening in appbar
      actions: [
        Builder(
          builder: (context) => IconButton(
            icon: const Icon(Icons.menu, color: Color(0xFFE6E5E3)),
            onPressed: () => Scaffold.of(context).openEndDrawer(),
          ),
        ),
      ],
    );
  }
}


class CustomDrawer extends StatelessWidget {
  const CustomDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    return Drawer(
      backgroundColor: const Color.fromARGB(255, 79, 79, 71),
      child: ListView(
        padding: EdgeInsets.zero,
        children: [
          const DrawerHeader(
            decoration: BoxDecoration(
              color: Color.fromARGB(255, 224, 224, 223),
            ),
            margin: EdgeInsets.zero,
            padding: EdgeInsets.zero,
            child: SizedBox(
              height: 50,
              child: Center(
                child: Text(
                  'Milliden Gardens',
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.bold,
                  ),
                ),
              ),
            ),
          ),
          ListTile(
            leading: const Icon(Icons.home, color: Color.fromARGB(255, 206, 37, 37)),
            title: const Text(
              'Home',
              style: TextStyle(color: Color(0xFFE6E5E3)),
            ),
            onTap: () {
              Navigator.of(context).pop();
              Navigator.pushReplacement(
                context, 
                MaterialPageRoute(builder: (context) => const Home())
              );
            },
          ),
          ListTile(
            leading: const Icon(Icons.book, color: Color.fromARGB(255, 206, 37, 37)),
            title: const Text(
              'About Us',
              style: TextStyle(color: Color(0xFFE6E5E3)),
            ),
            onTap: () {
              Navigator.of(context).pop();
              Navigator.pushReplacement(
                context, 
                MaterialPageRoute(builder: (context) => const AboutUs())
              );
            },
          ),
          ListTile(
            leading: const Icon(Icons.phone, color: Color.fromARGB(255, 206, 37, 37)),
            title: const Text(
              'Contact Us',
              style: TextStyle(color: Color(0xFFE6E5E3)),
            ),
            onTap: () {
              Navigator.of(context).pop();
              Navigator.pushReplacement(
                context, 
                MaterialPageRoute(builder: (context) => const Contact())
              );
            },
          ),
          ListTile(
            leading: const Icon(Icons.camera, color: Color.fromARGB(255, 206, 37, 37)),
            title: const Text(
              'Gallery',
              style: TextStyle(color: Color(0xFFE6E5E3)),
            ),
            onTap: () {
              Navigator.of(context).pop();
              
              Navigator.pushReplacement(
                context, 
                MaterialPageRoute(builder: (context) => const Gallery())
              );
            },
          ),
          ListTile(
            leading: const Icon(Icons.room, color: Color.fromARGB(255, 206, 37, 37)),
            title: const Text(
              'Rooms',
              style: TextStyle(color: Color(0xFFE6E5E3)),
            ),
            onTap: () {
              Navigator.of(context).pop();
              Navigator.pushReplacement(
                context, 
                MaterialPageRoute(builder: (context) => const Rooms())
              );
            },
          ),
        ],
      ),
    );
  }
}