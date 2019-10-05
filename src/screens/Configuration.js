import React from 'react';
import {
  Button, TextInput, View, StyleSheet, Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});

const Configuration = () => (
  <View style={ styles.container }>
    <Text>URL</Text>
    <TextInput
      placeholder="URL"
      style={ styles.input }
    />
    <Button
      title="Save"
      style={ styles.input }
    />
  </View>
);

export default Configuration;
