import { View, StyleSheet, Text, TouchableOpacity, Animated,Image} from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import {icons} from '../../constants'
import Home from '../components/home'
const TabIcon = ({icon,color,name,focused})=>{
  return(
    <View style={{alignItems:'center',justifyContent:'center'}}>
    <Image
      source={icon}
      resizeMode="contain"
      tintColor={color}
      style={{width:16,height:16}}
      color={color}
    />
    <Text
      style={{fontFamily:`${focused ? "font-psemibold" : "font-pregular"}` }}
      color={color}
    >
      {name}
    </Text>
  </View>
  )
}
const TabsLayout = () => {
  return (
   <>
   <Tabs
   screenOptions={{
    tabBarShowLabel: false
   }}
   >
    <Tabs.Screen name='home'
    options={{
      title:'Home',
      headerShown: false,
      tabBarIcon:({color,focused})=>(
        <TabIcon 
        icon={icons.home}
        color={color}
        name="Home"
        focused={focused}
        />
      )
    }}
    />
    <Tabs.Screen name='bookmark'
    options={{
      title:'Bookmark',
      headerShown: false,
      tabBarIcon:({color,focused})=>(
        <TabIcon 
        icon={icons.bookmark}
        color={color}
        name="Bookmark"
        focused={focused}
        />
      )
    }}/>
    <Tabs.Screen name='create'
    options={{
      title:'Create',
      headerShown: false,
      tabBarIcon:({color,focused})=>(
        <TabIcon 
        icon={icons.upload}
        color={color}
        name="Create"
        focused={focused}
        />
      )
    }}/>
    <Tabs.Screen name='profile'
    options={{
      title:'Profile',
      headerShown: false,
      tabBarIcon:({color,focused})=>(
        <TabIcon 
        icon={icons.profile}
        color={color}
        name="Profile"
        focused={focused}
        />
      )
    }}/>
   </Tabs>
   </>
  )
}
export default TabsLayout