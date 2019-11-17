import React, { Component } from 'react';
import {
  Button, TextInput, View, StyleSheet, Image, Text,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AwesomeAlert from 'react-native-awesome-alerts';
import PropTypes from 'prop-types';
import axios from 'axios';

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
  button: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  buttonConfig: {
    width: 200,
    height: 44,
    borderWidth: 1,
    borderColor: 'black',
  },
  image:
  {
    width: 207,
    height: 31,
    marginBottom: 50,
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      showAlert: false,
    };
    this.goToAnotherPage = this.goToAnotherPage.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = async () => {
    const { username, password } = this.state;
    try {
      // const value = await AsyncStorage.getItem('MatiposQRappUrlEndpoint');
      const value = await AsyncStorage.setItem('MatiposQRappUrlEndpoint', '');
      console.log(value);
      if (value !== null) {
        // We have data!!
        axios.get(value, {
          params: {
            nombreUsuario: username,
            contrasena: password,
          },
        }).then((response) => {
          if (response.data === true) {
            this.goToAnotherPage('Verification');
            console.log(response.data);
          } else {
            console.log(response);
          }
        }).catch((error) => {
          console.log(error);
        });
      } else {
        this.setState({ showAlert: true });
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  goToAnotherPage(screen) {
    const { navigation } = this.props;
    navigation.navigate(screen);
  }

  render() {
    const { username, password, showAlert } = this.state;
    return (
      <View style={ styles.container }>
        <Image style={ styles.image } source={ logo } />
        <TextInput
          placeholder="Username"
          style={ styles.input }
          value={ username }
          onChangeText={ (usernameTyped) => this.setState({ username: usernameTyped }) }
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={ styles.input }
          value={ password }
          onChangeText={ (passwordTyped) => this.setState({ password: passwordTyped }) }
        />
        <Button
          title="Login"
          style={ styles.button }
          onPress={ () => { this.handleLogin(); } }
        />
        <View style={ { flexDirection: 'row' } }>
          <Text style={ { padding: 10 } }> ──────── </Text>
          <Button
            title="Config"
            style={ styles.buttonConfig }
            onPress={ () => { this.goToAnotherPage('Configuration'); } }
          />
          <Text style={ { padding: 10 } }> ──────── </Text>
        </View>
        <AwesomeAlert
          show={ showAlert }
          showProgress={ false }
          title="AwesomeAlert"
          message="I have a message for you!"
          closeOnTouchOutside={ false }
          closeOnHardwareBackPress={ false }
          showCancelButton={ false }
          showConfirmButton
          confirmText="Yes, delete it"
          confirmButtonColor="#DD6B55"
          onConfirmPressed={ () => {
            this.setState({ showAlert: false });
          } }
        />
      </View>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
