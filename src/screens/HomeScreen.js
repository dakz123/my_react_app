import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import COLORS from "../constants/Colors";

const HomeScreen=()=> {
  return (
    <View style={styles.container}>
      
    
      <Text>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.BASIC_BACKGROUND,
   
  },
});
export default HomeScreen;