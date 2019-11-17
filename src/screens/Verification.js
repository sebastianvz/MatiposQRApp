import React, { Component } from 'react';
import {
  Button, TextInput, View, StyleSheet, Text, AsyncStorage,
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

class Verification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '',
    };
    this.handleUrl = this.handleCode.bind(this);
  }

  handleCode = async () => {
    const { code } = this.state;
    try {
      const url = await AsyncStorage.getItem('MatiposQRappUrlEndpoint');
      console.log(code, url);
    } catch (error) {
      // Error saving data
    }
  }

  render() {
    const { code } = this.state;
    return (
      <View style={ styles.container }>
        <Text>Code</Text>
        <TextInput
          placeholder="Code"
          style={ styles.input }
          value={ code }
          onChangeText={ (urlTyped) => this.setState({ code: urlTyped }) }
        />
        <Button
          title="Verify"
          style={ styles.input }
          onPress={ () => { this.handleCode(); } }
        />
      </View>
    );
  }
}

export default Verification;
