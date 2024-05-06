import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  size?: number;
  color?: string;
  name: string;
}

export const IonIcon = ({name, size = 20, color = 'black'}: Props) => {
  return <Icon name={name} size={size} color={color} />;
};
