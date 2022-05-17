import { Text, View } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Navigation } from './types';
import { Button } from './Components/Button.component';

export const ProfilePage: FC = () => {
  const { goBack } = useNavigation<Navigation<'PROFILE'>>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Page</Text>
      <Button onPress={goBack} title="Go back" />
    </View>
  );
};
