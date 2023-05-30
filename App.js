import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.rootContainerStyle}>
      <Text style={styles.headingStyle}>App.js</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  rootContainerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingStyle: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
