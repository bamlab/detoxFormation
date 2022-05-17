import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomePage } from '../../Home.component';
import { ProfilePage } from '../../Profile.component';
import { fireEvent, render } from '@testing-library/react-native';
import { StackNavigatorParams } from '../../types';

it('navigates to profile page on button press', async () => {
  const { Navigator, Screen } = createStackNavigator<StackNavigatorParams>();
  const HomeAndProfile = () => (
    <NavigationContainer>
      <Navigator initialRouteName="HOME">
        <Screen name="HOME" component={HomePage} />
        <Screen name="PROFILE" component={ProfilePage} />
      </Navigator>
    </NavigationContainer>
  );
  const { getByText, queryByText, findByText } = render(<HomeAndProfile />);

  expect(getByText('Home Page')).toBeTruthy();
  expect(queryByText('Profile Page')).toBeFalsy();

  fireEvent.press(getByText('Go to profile')); // Maybe wrap with act() if your Button press starts asynchronous operations -> rerender

  expect(await findByText('Profile Page')).toBeTruthy();
});
