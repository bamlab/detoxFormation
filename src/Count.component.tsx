import { Text, View } from 'react-native';
import React, { FC, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Navigation } from './types';
import { Button } from './Components/Button.component';

export const CountPage: FC = () => {
  const { navigate } = useNavigation<Navigation<'COUNT'>>();
  const onPress = () => navigate('PROFILE');

  const [pageViewsCount, setPageViewsCount] = useState(0);
  useFocusEffect(
    React.useCallback(() => {
      setPageViewsCount(pageViewsCount => pageViewsCount + 1);
    }, []),
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>The page views count is: {pageViewsCount}</Text>
      <Button onPress={onPress} title="Go to Profile" />
    </View>
  );
};
