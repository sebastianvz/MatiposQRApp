import React, { Component } from 'react';
import {
  Button, TextInput, View, StyleSheet, Text, AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';

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

class Configuration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
    };
    this.handleUrl = this.handleUrl.bind(this);
  }

  handleUrl = async () => {
    const { url } = this.state;
    try {
      await AsyncStorage.setItem('MatiposQRappUrlEndpoint', url);
      console.log(url);
    } catch (error) {
      // Error saving data
    }
  }

  goToAnotherPage(screen) {
    const { navigation } = this.props;
    navigation.navigate(screen);
  }

  render() {
    const { url } = this.state;
    return (
      <View style={ styles.container }>
        <Text>URL</Text>
        <TextInput
          placeholder="URL"
          style={ styles.input }
          value={ url }
          onChangeText={ (urlTyped) => this.setState({ url: urlTyped }) }
        />
        <Button
          title="Save"
          style={ styles.input }
          onPress={ () => { this.handleUrl(); this.goToAnotherPage('Login'); } }
        />
      </View>
    );
  }
}

Configuration.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Configuration;
