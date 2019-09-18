import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

const Home = (props) => {
  const goToAnotherPage = () => {
    const { navigation } = props;
    navigation.navigate('About');
  };

  return (
    <View>
      <Text>Hello Word</Text>
      <Button
        title="Go to About Screen"
        onPress={ goToAnotherPage }
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
