import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

// Sample JSON data with modes and detections
const cameraData = {
  cameraID: "CAM01",
  location: "Main Entrance",
  date: "2024-10-26",
  modes: {
    homeMode: true,
    sleepMode: false,
    weekendMode: false,
    awayMode: false
  },
  detections: [
    {
      timestamp: "14:35:22",
      place: "Living Room",
      detectedPerson: {
        id: "P001",
        name: "John Doe",
        type: "common"
      }
    },
    {
      timestamp: "14:36:15",
      place: "Hall",
      detectedPerson: {
        id: "U001",
        type: "uncommon"
      }
    },
    {
      timestamp: "14:37:05",
      place: "Main Entrance",
      detectedPerson: {
        id: "P003",
        name: "Alice Johnson",
        type: "common"
      }
    },
    {
      timestamp: "14:38:40",
      place: "Back Entrance",
      detectedPerson: {
        id: "U002",
        type: "uncommon"
      }
    }
  ]
};

const Page5 = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    filterNotifications();
  }, []);

  const filterNotifications = () => {
    let filteredNotifications = [];

    // Check modes; filter based on Home Mode for this example
    if (cameraData.modes.homeMode) {
      filteredNotifications = cameraData.detections;
    }

    setNotifications(filteredNotifications);
  };

  const handleApproval = (detectionId, isApproved) => {
    Alert.alert(
      isApproved ? "Approved" : "Disapproved",
      `${isApproved ? "Approval" : "Disapproval"} for ${
        notifications.find((d) => d.detectedPerson.id === detectionId).detectedPerson.type === "common"
          ? notifications.find((d) => d.detectedPerson.id === detectionId).detectedPerson.name
          : "Unknown Person"
      } has been ${isApproved ? "granted" : "declined"}.`,
      [{ text: "OK" }]
    );

    // Remove the detection from notifications
    const updatedNotifications = notifications.filter(
      (detection) => detection.detectedPerson.id !== detectionId
    );
    setNotifications(updatedNotifications);
  };

  const renderNotification = ({ item }) => (
    <View style={styles.notificationCard}>
      <Text style={styles.timestamp}>Time: {item.timestamp}</Text>
      <Text style={styles.place}>Place: {item.place}</Text>
      <Text style={styles.person}>
        {item.detectedPerson.type === "common"
          ? `Name: ${item.detectedPerson.name}`
          : "Unknown Person"}
      </Text>
      <Text style={styles.type}>Type: {item.detectedPerson.type}</Text>

      {/* Approve/Disapprove Buttons */}
      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.approveButton}
          onPress={() => handleApproval(item.detectedPerson.id, true)}
        >
          <Text style={styles.buttonText}>Approve</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.disapproveButton}
          onPress={() => handleApproval(item.detectedPerson.id, false)}
        >
          <Text style={styles.buttonText}>Disapprove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={renderNotification}
        keyExtractor={(item) => item.detectedPerson.id}
        ListEmptyComponent={<Text style={styles.emptyText}>No notifications available</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f2f2f2',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  notificationCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 2,
  },
  timestamp: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  place: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  person: {
    fontSize: 14,
    color: '#007bff',
    marginBottom: 5,
  },
  type: {
    fontSize: 14,
    color: '#888',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  approveButton: {
    backgroundColor: '#28a745',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  disapproveButton: {
    backgroundColor: '#dc3545',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#999',
    marginVertical: 20,
  },
});

export default Page5;



