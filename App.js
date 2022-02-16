/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Header from './Components/Header';
import StartGame from './screens/StartGame';

const App = () => {

  return (
    <View style={styles.screen}>
      <Header headerTitle="Guess A Number" />
      <StartGame />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex:1
  }
});

export default App;
