import { Text, TouchableOpacity } from 'react-native';
import React, { FC } from 'react';

export const Button: FC<{
  onPress: () => void;
  title: string;
  testID?: string;
}> = ({ onPress, title, testID }) => (
  <TouchableOpacity
    onPress={onPress}
    testID={testID}
    accessibilityRole="button"
  >
    <Text style={{ color: 'blue' }}>{title}</Text>
  </TouchableOpacity>
);
