import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const About = ({ navigation }) => (
  <View>
    <Text>About Page</Text>
    <Text>{navigation.getParam('userName')}</Text>
  </View>
);

About.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

export default About;
