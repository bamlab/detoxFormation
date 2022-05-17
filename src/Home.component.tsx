import { Text, View } from 'react-native';
import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Navigation } from './types';
import { Button } from './Components/Button.component';

export const HomePage: FC = () => {
  const { navigate } = useNavigation<Navigation<'HOME'>>();
  const goToProfile = () => navigate('PROFILE');
  const goToHelp = () => navigate('HELP');
  const goToCount = () => navigate('COUNT');
  const goToFood = () => navigate('FOOD');

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Page</Text>
      <Button onPress={goToProfile} title="Go to profile" testID="profile-id" />
      <Button onPress={goToHelp} title="Go to help page" />
      <Button onPress={goToCount} title="Go to count page" />
      <Button onPress={goToFood} title="Go to Food page" />
    </View>
  );
};
