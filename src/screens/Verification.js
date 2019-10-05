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

const Verification = () => (
  <View style={ styles.container }>
    <Text>Code</Text>
    <TextInput
      placeholder="Code"
      style={ styles.input }
    />
    <Button
      title="Verify"
      style={ styles.input }
    />
  </View>
);

export default Verification;
