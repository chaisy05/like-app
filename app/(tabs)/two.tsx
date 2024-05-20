import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';

const TwoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Two</Text>
      <View style={styles.separator} />
      <EditScreenInfo path="/screens/TwoScreen.js" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default TwoScreen;
