import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StackNavigator} from './routes/StackNavigator';
import {SideMenuNavigator} from './routes/SideMenuNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <SideMenuNavigator />
      {/* <StackNavigator /> */}
    </NavigationContainer>
  );
};

export default App;
