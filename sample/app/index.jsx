import { View, Text } from 'react-native'
import React from 'react'
import Profile from './(tabs)/profile';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sleep from './(tabs)/Sleep';
import Weekend from './(tabs)/Weekend';
import HomeScreen from './(tabs)/HomeScreen';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Sleep" component={Sleep} />
      <Tab.Screen name="Weekend" component={Weekend} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
const Index = () => {
  return (
    <MyTabs />
  )
}

export default Index