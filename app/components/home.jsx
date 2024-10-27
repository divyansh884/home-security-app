import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Icon from 'react-native-vector-icons/FontAwesome';
import Profile from '../pages/Profile';
import Logs from '../pages/Logs';
import Notification from '../pages/Notification';
import LiveFeed from '../pages/LIveFeed';
const HomeScreen = ({ navigation }) => {
  const [isOn, setIsOn] = useState(false); 

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {/* Main Box with On/Off Button */}
      <View style={styles.mainBox}>
        {/* <Text style={styles.boxText}>Box 1</Text> */}
        <TouchableOpacity
          style={[styles.toggleButton, isOn ? styles.onButton : styles.offButton]}
          onPress={toggleSwitch}
        >
          <Text style={styles.toggleButtonText}>{isOn ? 'ON' : 'OFF'}</Text>
        </TouchableOpacity>
      </View>

      {/* Grid with Other Boxes */}
      <View style={styles.gridContainer}>

        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            navigation.navigate('Live Feed');
          }}
        >
          <Icon name="video-camera" size={30} color="#000" />
          <Text style={styles.boxText}>Live Feed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            navigation.navigate('Profile');
          }}
        >
          <Icon name="user" size={30} color="#000" />
          <Text style={styles.boxText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            navigation.navigate('Logs');
          }}
        >
          <Icon name="file-text" size={30} color="#000" />
          <Text style={styles.boxText}>Logs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            console.log("Box 5 Pressed"); // Debugging log
            navigation.navigate('Notification');
          }}
        >
           <Icon name="bell" size={30} color="#000" />
          <Text style={styles.boxText}>Notification</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Home = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Live Feed" component={LiveFeed} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Logs" component={Logs} />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  mainBox: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 3,
    margin:15,
    justifyContent: 'center',
  },
  gridContainer: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor:'#f8f9fa',
    alignItems:'center',
    justifyContent:'center',
  },
  box: {
    width: '45%',
    height: '45%',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius:10,
    justifyContent: 'center',
    borderWidth: 1,
    elevation:3,
    bound:'white',
    margin:5,
    borderColor: '#fff',
  },
  boxText: {
    color: 'black',
    fontSize: 18,

  },
  toggleButton: {
    marginTop: 10,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 99,
    height: 120,
    width:120
  },
  onButton: {
    backgroundColor: 'blue',
  },
  offButton: {
    backgroundColor: '#DC3545',
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;
