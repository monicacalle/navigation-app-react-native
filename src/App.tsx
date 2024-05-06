import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StackNavigator} from './routes/StackNavigator';
import {SideMenuNavigator} from './routes/SideMenuNavigator';

import {BottomTabNavigator} from './routes/BottomTabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SideMenuNavigator />

      {/* <BottomTabNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
