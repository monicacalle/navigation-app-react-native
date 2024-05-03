import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../presentation/theme/theme';

interface Props {
  onPress: () => void;
  label: string;
}

export const PrimaryButton = ({onPress, label}: Props) => {
  return (
    <View>
      <Pressable onPress={() => onPress()} style={globalStyles.primaryButton}>
        <Text style={globalStyles.buttonText}>{label}</Text>
      </Pressable>
    </View>
  );
};
