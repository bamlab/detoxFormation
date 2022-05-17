import { Text, View } from 'react-native';
import React, { FC } from 'react';
import { useRoute } from '@react-navigation/native';
import { Route } from './types';

export const HelpPage: FC = () => {
  const { params } = useRoute<Route<'HELP'>>();
  const isVisible = params?.isHelpTextVisible || false;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Help Page</Text>
      {isVisible && <Text>Help text</Text>}
    </View>
  );
};
