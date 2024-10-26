import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

// Sample JSON data
const cameraData = {
  cameraID: "CAM01",
  location: "Main Entrance",
  date: "2024-10-26",
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

const Page4 = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [filteredDetections, setFilteredDetections] = useState([]);
  const [showCalendar, setShowCalendar] = useState(true);

  const handleDateSelect = (day) => {
    setSelectedDate(day.dateString);
    const detectionsForDate = day.dateString === cameraData.date
      ? cameraData.detections
      : [];
    setFilteredDetections(detectionsForDate);
    setShowCalendar(false); // Hide calendar after date is selected
  };

  const renderDetection = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.place}>{item.place}</Text>
      <Text style={styles.timestamp}>Time: {item.timestamp}</Text>
      <Text style={styles.person}>
        {item.detectedPerson.type === "common"
          ? `Name: ${item.detectedPerson.name}`
          : "Unknown Person"}
      </Text>
      <Text style={styles.type}>Type: {item.detectedPerson.type}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {showCalendar && (
        <Calendar
          onDayPress={handleDateSelect}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#00adf5' }
          }}
        />
      )}
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setShowCalendar(!showCalendar)}
      >
        <Text style={styles.toggleButtonText}>
          {showCalendar ? "Hide Calendar" : "Select Another Date"}
        </Text>
      </TouchableOpacity>
      <Text style={styles.headerText}>
        Detections for: {selectedDate || 'Select a Date'}
      </Text>
      <FlatList
        data={filteredDetections}
        renderItem={renderDetection}
        keyExtractor={(item) => item.detectedPerson.id}
        ListEmptyComponent={<Text style={styles.emptyText}>No detections on this date</Text>}
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
  toggleButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 2,
  },
  place: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  timestamp: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  person: {
    fontSize: 14,
    color: '#007bff',
  },
  type: {
    fontSize: 14,
    color: '#888',
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#999',
    marginVertical: 20,
  },
});

export default Page4;

