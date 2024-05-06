import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/tabs/Tab1Screen';
import {globalColors} from '../presentation/theme/theme';
import {Text} from 'react-native';
import {TopTabNavigator} from './TopTabNavigator';
import {StackNavigator} from './StackNavigator';
import {IonIcon} from '../components/shared/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: globalColors.primary,
        tabBarStyle: {
          borderTopColor: globalColors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
      })}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: '1',
          tabBarIcon: ({color}) => (
            <Text style={{color}}>
              {<IonIcon name="accessibility-outline" />}
            </Text>
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: '2',
          tabBarIcon: ({color}) => (
            <Text style={{color}}> {<IonIcon name="brush-outline" />}</Text>
          ),
        }}
        component={TopTabNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: '3',
          tabBarIcon: ({color}) => <IonIcon name="apps-outline" />,
        }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
