/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


function App() {

  return (
   <View style={styles.screen}>
    <Text>Hello World</Text>
   </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
