import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const dummyData = {
  photoUrl: "https://via.placeholder.com/150",
  name: "Jane Doe",
  email: "janedoe@example.com",
  phone: "+987654321",
  dob: "12/12/1995",
  otherDetails: "This is a demo user's details for testing purposes."
};

const Profile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Picture */}
      <View style={styles.profileImageContainer}>
        <Image
          source={{ uri: dummyData.photoUrl }} // Use photo from dummy data
          style={styles.profileImage}
        />
      </View>

      {/* User Information */}
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}><Icon name="user" size={16} /> Name: {dummyData.name}</Text>
        <Text style={styles.infoText}><Icon name="envelope" size={16} /> Email: {dummyData.email}</Text>
        <Text style={styles.infoText}><Icon name="phone" size={16} /> Phone: {dummyData.phone}</Text>
        <Text style={styles.infoText}><Icon name="birthday-cake" size={16} /> DOB: {dummyData.dob}</Text>
        <Text style={styles.infoText}><Icon name="info-circle" size={16} /> Other Detail: {dummyData.otherDetails}</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.buttonText}><Icon name="plus" size={16} /> Add Family Member</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.removeButton]}>
          <Text style={styles.buttonText}><Icon name="minus" size={16} /> Remove Family Member</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  profileImageContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  actionContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: '#28a745',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  removeButton: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
