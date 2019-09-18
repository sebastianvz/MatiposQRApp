import React from 'react';
import { StatusBar } from 'react-native';

import AppNavigator from './AppNavigator';

const App = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <AppNavigator />
  </>
);

export default App;
