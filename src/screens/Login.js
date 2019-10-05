import React from 'react';
import {
  Button, TextInput, View, StyleSheet, Image, Text,
} from 'react-native';

const logo = require('../Assets/images/melogo.png');

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

const Login = () => (
  <View style={ styles.container }>
    <Image style={ { width: 50, height: 50 } } source={ logo } />
    <TextInput
      placeholder="Username"
      style={ styles.input }
    />
    <TextInput
      placeholder="Password"
      secureTextEntry
      style={ styles.input }
    />
    <Button
      title="Login"
      style={ styles.input }
    />
    <Text>────────  Configuration  ────────</Text>
  </View>
);

export default Login;
