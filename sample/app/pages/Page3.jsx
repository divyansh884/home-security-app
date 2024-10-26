import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Page3() {
  return (
    <View style={styles.pageContainer}>
    <Text style={styles.pageText}>Welcome to Page 3</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    pageContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
      },
      pageText: {
        fontSize: 24,
        fontWeight: 'bold',
      },
})