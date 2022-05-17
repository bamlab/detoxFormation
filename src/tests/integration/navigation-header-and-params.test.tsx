import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { HelpButton } from '../../HelpButton.component';
import { fireEvent, render } from '@testing-library/react-native';
import { HelpPage } from '../../Help.component';
import { StackNavigatorParams } from '../../types';

it('displays help text when you click on help button in header', async () => {
  const { Navigator, Screen } = createStackNavigator<StackNavigatorParams>();
  const PageAndHeader: FunctionComponent = () => (
    <NavigationContainer>
      <Navigator initialRouteName="HELP">
        <Screen
          name="HELP"
          component={HelpPage}
          options={{ headerRight: HelpButton }}
        />
      </Navigator>
    </NavigationContainer>
  );
  const { queryByText, getByA11yRole, findByText } = render(<PageAndHeader />);

  // Help text should be hidden
  expect(queryByText('Help text')).toBeFalsy();

  // Press on Help button in header
  fireEvent.press(getByA11yRole('button'));

  // Help text should now be visible
  expect(await findByText('Help text')).toBeTruthy();
});
