import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';
import { CountPage } from '../../Count.component';
import { ProfilePage } from '../../Profile.component';
import { StackNavigatorParams } from '../../types';

it('adds 1 to the views counter each time you go to the Count page (even after a goBack)', async () => {
  const { Navigator, Screen } = createStackNavigator<StackNavigatorParams>();
  const Page: FunctionComponent = () => (
    <NavigationContainer>
      <Navigator initialRouteName="COUNT">
        <Screen name="COUNT" component={CountPage} />
        <Screen name="PROFILE" component={ProfilePage} />
      </Navigator>
    </NavigationContainer>
  );
  const { getByText, findByText } = render(<Page />);

  // Page views count is 1
  expect(getByText('The page views count is: 1')).toBeTruthy();

  // Go to Profile page
  fireEvent.press(getByText('Go to Profile'));
  // Go back to counter page
  fireEvent.press(getByText('Go back'));

  // useFocusEffect runs again & Page views count is now 2
  expect(await findByText('The page views count is: 2')).toBeTruthy();
});
