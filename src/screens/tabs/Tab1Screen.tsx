import {Text, View} from 'react-native';
import {HamburguerMenu} from '../../components/shared/HamburguerMenu';

import {IonIcon} from '../../components/shared/IonIcon';

// const myIcon;

export const Tab1Screen = () => {
  return (
    <View>
      <HamburguerMenu />
      <IonIcon name="rocket-outline" size={25} color="rgb(104, 76, 76)" />
      <Text>Tab1Screen</Text>
    </View>
  );
};
