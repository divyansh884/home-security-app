import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import Page5 from '../pages/Page5';

// HomeScreen with TouchableOpacity buttons for each box
const HomeScreen = ({ navigation }) => {
  const [isOn, setIsOn] = useState(false); // State for ON/OFF toggle

  // Toggle function
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
            console.log("Box 2 Pressed"); // Debugging log
            navigation.navigate('Page2');
          }}
        >
          <Text style={styles.boxText}>Box 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            console.log("Box 3 Pressed"); // Debugging log
            navigation.navigate('Page3');
          }}
        >
          <Text style={styles.boxText}>Box 3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            console.log("Box 4 Pressed"); // Debugging log
            navigation.navigate('Page4');
          }}
        >
          <Text style={styles.boxText}>Box 4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            console.log("Box 5 Pressed"); // Debugging log
            navigation.navigate('Page5');
          }}
        >
          <Text style={styles.boxText}>Box 5</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Home = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Page2" component={Page2} />
      <Stack.Screen name="Page3" component={Page3} />
      <Stack.Screen name="Page4" component={Page4} />
      <Stack.Screen name="Page5" component={Page5} />
    </Stack.Navigator>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  mainBox: {
    flex: 1,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridContainer: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '50%',
    height: '50%',
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#fff',
  },
  boxText: {
    color: '#fff',
    fontSize: 18,
  },
  toggleButton: {
    marginTop: 10,
    // paddingVertical: 50,
    // paddingHorizontal: 50,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 99,
    height: 130,
    width:130
  },
  onButton: {
    backgroundColor: 'blue',
  },
  offButton: {
    backgroundColor: '#DC3545',
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export default Home;
