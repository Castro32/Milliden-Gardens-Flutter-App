// import 'package:flutter/material.dart';
// import 'package:milliden_app/component/navbar.dart';

// class Rooms extends StatelessWidget {
//   const Rooms({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: CustomAppBar(),
//       endDrawer: const CustomDrawer(),
//       body: Stack(
//         children: [
//           Container(
//             child: Image.asset(
//               "lib/assets/images/r1.png",
//               width: double.infinity,
//               height: 300,
//               fit: BoxFit.cover,
//             ),
//           ),
//           Container(
//             alignment: Alignment.center,
//             height: 300,
//             child: Text(
//               'Rooms',
//               style: TextStyle(color: Colors.white,
//                   fontWeight: FontWeight.bold,
//                   fontSize: 22.0),
//             )
//           ),
//           Container(
//             alignment: Alignment.center,
//             height: 350,
//             child: Text(
//               'Explore Our Comfortable Rooms',
//               style: TextStyle(color: Colors.white,
//                   fontWeight: FontWeight.bold,
//                   fontSize: 18.0),
//             )
//           ),
//         ],
//       )
//     );
//   }
// }
import 'package:flutter/material.dart';
import 'package:milliden_app/component/navbar.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class Room {
  final String id;
  final String name;
  final String description;
  final double price;
  final int capacity;
  final List<String> imageUrls;
  final List<String> amenities;
  final String status;
  final DateTime? startDate;
  final DateTime? endDate;

  Room({
    required this.id,
    required this.name,
    required this.description,
    required this.price,
    required this.capacity,
    required this.imageUrls,
    required this.amenities,
    required this.status,
    this.startDate,
    this.endDate,
  });

  // Get the first image URL for display
  String get primaryImageUrl => imageUrls.isNotEmpty ? imageUrls.first : '';

  factory Room.fromJson(Map<String, dynamic> json) {
    // Handle amenities field
    List<String> amenitiesList = [];
    if (json['amenities'] != null && json['amenities'] is List) {
      amenitiesList = List<String>.from(json['amenities']);
    }

    // Handle image array
    List<String> imageList = [];
    if (json['image'] != null && json['image'] is List) {
      imageList = List<String>.from(json['image']);
      // Convert relative paths to full URLs
      imageList = imageList.map((imagePath) {
        if (imagePath.startsWith('/uploads/')) {
          return 'https://milliden-gardens-1.onrender.com$imagePath';
        }
        return imagePath;
      }).toList();
    }

    // Parse dates
    DateTime? startDate;
    DateTime? endDate;
    try {
      if (json['startDate'] != null) {
        startDate = DateTime.parse(json['startDate']);
      }
      if (json['endDate'] != null) {
        endDate = DateTime.parse(json['endDate']);
      }
    } catch (e) {
      print('Error parsing dates: $e');
    }

    return Room(
      id: json['id']?.toString() ?? '',
      name: json['name']?.toString() ?? '',
      description: json['description']?.toString() ?? '',
      price: _parsePrice(json['price']),
      capacity: json['capacity']?.toInt() ?? 1,
      imageUrls: imageList,
      amenities: amenitiesList,
      status: json['status']?.toString() ?? 'unknown',
      startDate: startDate,
      endDate: endDate,
    );
  }

  static double _parsePrice(dynamic price) {
    if (price == null) return 0.0;
    if (price is double) return price;
    if (price is int) return price.toDouble();
    if (price is String) {
      return double.tryParse(price) ?? 0.0;
    }
    return 0.0;
  }
}

class Rooms extends StatefulWidget {
  const Rooms({super.key});

  @override
  State<Rooms> createState() => _RoomsState();
}

class _RoomsState extends State<Rooms> {
  List<Room> rooms = [];
  bool isLoading = true;
  String errorMessage = '';

  @override
  void initState() {
    super.initState();
    fetchRooms();
  }

  Future<void> fetchRooms() async {
    try {
      setState(() {
        isLoading = true;
        errorMessage = '';
      });

      final response = await http.get(
        Uri.parse('https://milliden-gardens-1.onrender.com/api/rooms'),
        headers: {
          'Content-Type': 'application/json',
        },
      );

      if (response.statusCode == 200) {
        final data = json.decode(response.body);
        List<Room> fetchedRooms = [];
        
        // Handle the specific API response structure
        if (data is Map<String, dynamic> && 
            data['success'] == true && 
            data['data'] != null && 
            data['data'] is List) {
          
          fetchedRooms = (data['data'] as List).map((roomJson) {
            try {
              return Room.fromJson(roomJson as Map<String, dynamic>);
            } catch (e) {
              print('Error parsing room: $e');
              print('Room data: $roomJson');
              return null;
            }
          }).where((room) => room != null).cast<Room>().toList();
        }

        setState(() {
          rooms = fetchedRooms;
          isLoading = false;
        });
      } else {
        setState(() {
          errorMessage = 'Failed to load rooms: ${response.statusCode}';
          isLoading = false;
        });
      }
    } catch (e) {
      setState(() {
        errorMessage = 'Error fetching rooms: $e';
        isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(),
      endDrawer: const CustomDrawer(),
      body: Column(
        children: [
          // Header section with background image
          Stack(
            children: [
              Container(
                child: Image.asset(
                  "lib/assets/images/r1.png",
                  width: double.infinity,
                  height: 250,
                  fit: BoxFit.cover,
                ),
              ),
              Container(
                alignment: Alignment.center,
                height: 200,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text(
                      'Rooms',
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.bold,
                        fontSize: 28.0,
                        shadows: [
                          Shadow(
                            offset: Offset(1.0, 1.0),
                            blurRadius: 3.0,
                            color: Colors.black.withOpacity(0.7),
                          ),
                        ],
                      ),
                    ),
                    SizedBox(height: 8),
                    Text(
                      'Explore Our Comfortable Rooms',
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w500,
                        fontSize: 16.0,
                        shadows: [
                          Shadow(
                            offset: Offset(1.0, 1.0),
                            blurRadius: 3.0,
                            color: Colors.black.withOpacity(0.7),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
          
          // Rooms list section
          Expanded(
            child: Container(
              padding: EdgeInsets.all(16.0),
              child: _buildRoomsContent(),
            ),
          ),
          // CustomFooter(),
        ],
      ),
    );
  }

  Widget _buildRoomsContent() {
    if (isLoading) {
      return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CircularProgressIndicator(),
            SizedBox(height: 16),
            Text('Loading rooms...'),
          ],
        ),
      );
    }

    if (errorMessage.isNotEmpty) {
      return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.error_outline, size: 64, color: Colors.red),
            SizedBox(height: 16),
            Text(
              errorMessage,
              textAlign: TextAlign.center,
              style: TextStyle(color: Colors.red),
            ),
            SizedBox(height: 16),
            ElevatedButton(
              onPressed: fetchRooms,
              child: Text('Retry'),
            ),
          ],
        ),
      );
    }

    if (rooms.isEmpty) {
      return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.hotel_outlined, size: 64, color: Colors.grey),
            SizedBox(height: 16),
            Text(
              'No rooms available',
              style: TextStyle(fontSize: 18, color: Colors.grey),
            ),
          ],
        ),
      );
    }

    return RefreshIndicator(
      onRefresh: fetchRooms,
      child: ListView.builder(
        itemCount: rooms.length,
        itemBuilder: (context, index) {
          final room = rooms[index];
          return Card(
            margin: EdgeInsets.only(bottom: 16),
            elevation: 4,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(12),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                // Room image
                ClipRRect(
                  borderRadius: BorderRadius.vertical(top: Radius.circular(12)),
                  child: room.primaryImageUrl.isNotEmpty
                      ? Image.network(
                          room.primaryImageUrl,
                          width: double.infinity,
                          height: 200,
                          fit: BoxFit.cover,
                          errorBuilder: (context, error, stackTrace) {
                            return Container(
                              height: 200,
                              color: Colors.grey[300],
                              child: Icon(
                                Icons.hotel,
                                size: 64,
                                color: Colors.grey[600],
                              ),
                            );
                          },
                        )
                      : Container(
                          height: 200,
                          color: Colors.grey[300],
                          child: Icon(
                            Icons.hotel,
                            size: 64,
                            color: Colors.grey[600],
                          ),
                        ),
                ),
                
                // Room details
                Padding(
                  padding: EdgeInsets.all(16),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        room.name,
                        style: TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                      SizedBox(height: 8),
                      Text(
                        room.description,
                        style: TextStyle(
                          fontSize: 14,
                          color: Colors.grey[600],
                        ),
                      ),
                      SizedBox(height: 12),
                      Row(
                        children: [
                          Icon(Icons.people, size: 16, color: Colors.grey[600]),
                          SizedBox(width: 4),
                          Text(
                            'Capacity: ${room.capacity} ${room.capacity == 1 ? 'person' : 'people'}',
                            style: TextStyle(
                              fontSize: 14,
                              color: Colors.grey[600],
                            ),
                          ),
                          Spacer(),
                          Container(
                            padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                            decoration: BoxDecoration(
                              color: room.status == 'available' ? Colors.green[100] : Colors.red[100],
                              borderRadius: BorderRadius.circular(12),
                            ),
                            child: Text(
                              room.status.toUpperCase(),
                              style: TextStyle(
                                fontSize: 12,
                                fontWeight: FontWeight.w600,
                                color: room.status == 'available' ? Colors.green[700] : Colors.red[700],
                              ),
                            ),
                          ),
                        ],
                      ),
                      SizedBox(height: 12),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            'KSh ${room.price.toStringAsFixed(0)}/night',
                            style: TextStyle(
                              fontSize: 18,
                              fontWeight: FontWeight.bold,
                              color: Colors.green[700],
                            ),
                          ),
                          ElevatedButton(
                            onPressed: () {
                              // Handle room booking or details view
                              _showRoomDetails(room);
                            },
                            child: Text('View Details'),
                          ),
                        ],
                      ),
                      if (room.amenities.isNotEmpty) ...[
                        SizedBox(height: 12),
                        Text(
                          'Amenities:',
                          style: TextStyle(
                            fontWeight: FontWeight.w600,
                            fontSize: 14,
                          ),
                        ),
                        SizedBox(height: 4),
                        Wrap(
                          spacing: 6,
                          runSpacing: 4,
                          children: room.amenities
                              .map((amenity) => Chip(
                                    label: Text(
                                      amenity,
                                      style: TextStyle(fontSize: 12),
                                    ),
                                    backgroundColor: Colors.blue[50],
                                  ))
                              .toList(),
                        ),
                      ],
                    ],
                  ),
                ),
              ],
            ),
          );
        },
      ),
    );
  }

  void _showRoomDetails(Room room) {
    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: Text(room.name),
          content: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisSize: MainAxisSize.min,
              children: [
                // Image gallery
                if (room.imageUrls.isNotEmpty)
                  SizedBox(
                    height: 200,
                    child: PageView.builder(
                      itemCount: room.imageUrls.length,
                      itemBuilder: (context, index) {
                        return ClipRRect(
                          borderRadius: BorderRadius.circular(8),
                          child: Image.network(
                            room.imageUrls[index],
                            width: double.infinity,
                            height: 200,
                            fit: BoxFit.cover,
                            errorBuilder: (context, error, stackTrace) {
                              return Container(
                                height: 200,
                                color: Colors.grey[300],
                                child: Icon(Icons.hotel, size: 64, color: Colors.grey[600]),
                              );
                            },
                          ),
                        );
                      },
                    ),
                  ),
                if (room.imageUrls.length > 1) ...[
                  SizedBox(height: 8),
                  Center(
                    child: Text(
                      'Swipe to see more images (${room.imageUrls.length} total)',
                      style: TextStyle(fontSize: 12, color: Colors.grey[600]),
                    ),
                  ),
                ],
                SizedBox(height: 16),
                Text(
                  'Description:',
                  style: TextStyle(fontWeight: FontWeight.bold),
                ),
                SizedBox(height: 4),
                Text(room.description),
                SizedBox(height: 12),
                Row(
                  children: [
                    Icon(Icons.people, size: 16, color: Colors.grey[600]),
                    SizedBox(width: 4),
                    Text('Capacity: ${room.capacity} ${room.capacity == 1 ? 'person' : 'people'}'),
                  ],
                ),
                SizedBox(height: 8),
                Row(
                  children: [
                    Icon(Icons.info_outline, size: 16, color: Colors.grey[600]),
                    SizedBox(width: 4),
                    Text('Status: '),
                    Container(
                      padding: EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                      decoration: BoxDecoration(
                        color: room.status == 'available' ? Colors.green[100] : Colors.red[100],
                        borderRadius: BorderRadius.circular(8),
                      ),
                      child: Text(
                        room.status.toUpperCase(),
                        style: TextStyle(
                          fontSize: 11,
                          fontWeight: FontWeight.w600,
                          color: room.status == 'available' ? Colors.green[700] : Colors.red[700],
                        ),
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 12),
                Text(
                  'Price: KSh ${room.price.toStringAsFixed(0)}/night',
                  style: TextStyle(
                    fontWeight: FontWeight.bold,
                    fontSize: 16,
                    color: Colors.green[700],
                  ),
                ),
                if (room.amenities.isNotEmpty) ...[
                  SizedBox(height: 12),
                  Text(
                    'Amenities:',
                    style: TextStyle(fontWeight: FontWeight.bold),
                  ),
                  SizedBox(height: 4),
                  ...room.amenities.map((amenity) => Text('• $amenity')),
                ],
                if (room.startDate != null && room.endDate != null) ...[
                  SizedBox(height: 12),
                  Text(
                    'Available Period:',
                    style: TextStyle(fontWeight: FontWeight.bold),
                  ),
                  Text('${_formatDate(room.startDate!)} - ${_formatDate(room.endDate!)}'),
                ],
              ],
            ),
          ),
          actions: [
            TextButton(
              onPressed: () => Navigator.of(context).pop(),
              child: Text('Close'),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pop();
                // Handle booking logic here
                ScaffoldMessenger.of(context).showSnackBar(
                  SnackBar(content: Text('Booking ${room.name}...')),
                );
              },
              child: Text('Book Now'),
            ),
          ],
        );
      },
    );
  }

  String _formatDate(DateTime date) {
    return '${date.day}/${date.month}/${date.year}';
  }
}