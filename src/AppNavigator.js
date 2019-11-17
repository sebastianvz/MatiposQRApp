import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/Home';
import About from './screens/About';
import Login from './screens/Login';
import Configuration from './screens/Configuration';
import Verification from './screens/Verification';


const AppNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    About: { screen: About },
    Login: {
      screen: Login,
    },
    Configuration: { screen: Configuration },
    Verification: { screen: Verification },
    // More routes
  },
  {
    initialRouteName: 'Login',
  },
);

export default createAppContainer(AppNavigator);
