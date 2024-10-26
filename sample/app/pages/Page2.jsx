import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// Sample JSON data
const cameraData = [
  {
    cameraID: "CAM01",
    location: "Main Entrance",
    date: "2024-10-26",
    time: "14:35:22",
    videoURL: "https://example.com/video/cam01/2024-10-26-143522.mp4",
    duration: "00:05:30"
  },
  {
    cameraID: "CAM02",
    location: "Parking Lot",
    date: "2024-10-26",
    time: "14:37:10",
    videoURL: "https://example.com/video/cam02/2024-10-26-143710.mp4",
    duration: "00:02:45"
  },
  {
    cameraID: "CAM03",
    location: "Lobby",
    date: "2024-10-26",
    time: "14:40:05",
    videoURL: "https://example.com/video/cam03/2024-10-26-144005.mp4",
    duration: "00:07:15"
  },
  {
    cameraID: "CAM04",
    location: "Back Entrance",
    date: "2024-10-26",
    time: "14:42:30",
    videoURL: "https://example.com/video/cam04/2024-10-26-144230.mp4",
    duration: "00:04:20"
  },
  {
    cameraID: "CAM05",
    location: "Hallway",
    date: "2024-10-26",
    time: "14:45:00",
    videoURL: "https://example.com/video/cam05/2024-10-26-144500.mp4",
    duration: "00:03:10"
  }
];

const Page2 = () => {
  // Render each recording as a grid item
  const renderRecording = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => alert(`Play video from ${item.location}`)}>
      <Text style={styles.cameraID}>{item.cameraID}</Text>
      <Text style={styles.location}>{item.location}</Text>
      <Text style={styles.dateTime}>{`${item.date} ${item.time}`}</Text>
      <Text style={styles.duration}>Duration: {item.duration}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={cameraData}
      renderItem={renderRecording}
      keyExtractor={(item) => item.cameraID}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  card: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 15,
    margin: 5,
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
  },
  cameraID: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  location: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  dateTime: {
    fontSize: 12,
    color: '#777',
  },
  duration: {
    fontSize: 12,
    color: '#007bff',
    marginTop: 5,
  },
});

export default Page2;
