import React, { FC } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Navigation } from './types';
import { Button } from './Components/Button.component';

export const HelpButton: FC<{ tintColor?: string | undefined }> = () => {
  const { setParams } = useNavigation<Navigation<'HELP'>>();
  const onPress = () => setParams({ isHelpTextVisible: true });

  return <Button onPress={onPress} title={'HelpButton'} />;
};
