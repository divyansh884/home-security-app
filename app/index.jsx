import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Sleep from './(tabs)/Sleep';
import Weekend from './(tabs)/Weekend';
import HomeScreen from './(tabs)/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home';
        } else if (route.name === 'Sleep') {
          iconName = 'bed';
        } else if (route.name === 'Weekend') {
          iconName = 'calendar';
        }

        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'blue',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Sleep" component={Sleep} />
      <Tab.Screen name="Weekend" component={Weekend} />
    </Tab.Navigator>
  );
}
const Index = () => {
  return (
    <MyTabs />
  )
}

export default Index