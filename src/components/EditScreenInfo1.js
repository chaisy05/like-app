import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EditScreenInfo = ({ path }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit {path}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default EditScreenInfo;
