import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

const Home = (props) => {
  const goToAnotherPage = (screen) => {
    const { navigation } = props;
    navigation.navigate(screen, { userName: 'El NEYDER' });
  };

  return (
    <View>
      <Text>Hello Word</Text>
      <Button
        title="Go to About Screen"
        onPress={ () => { goToAnotherPage('About'); } }
      />
      <Button
        title="Login"
        onPress={ () => { goToAnotherPage('Login'); } }
      />
      <Button
        title="Verification"
        onPress={ () => { goToAnotherPage('Verification'); } }
      />
      <Button
        title="Configuration"
        onPress={ () => { goToAnotherPage('Configuration'); } }
      />
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
