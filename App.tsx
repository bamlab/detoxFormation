import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomePage, ProfilePage, HelpButton, HelpPage, CountPage } from './src';
import { Navigation, StackNavigatorParams } from './src/types';
import { CategoryList } from './src/Pages/CategoryList/CategoryList';
import { Text, View } from 'react-native';

const Stack = createStackNavigator<StackNavigatorParams>();

const NestedNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HOME" component={HomePage} />
      <Stack.Screen name="PROFILE" component={ProfilePage} />
      <Stack.Screen
        name="HELP"
        component={HelpPage}
        options={{ headerRight: HelpButton }}
      />
      <Stack.Screen name="COUNT" component={CountPage} />
      <Stack.Screen name="FOOD" component={CategoryList} />
    </Stack.Navigator>
  );
};

export const OtherPage: FC = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Other Page</Text>
    </View>
  );
};

const HigherStack = createStackNavigator();

export const App: FC = () => {
  return (
    <NavigationContainer>
      <HigherStack.Navigator>
        <HigherStack.Screen name="NESTED_APP" component={NestedNavigator} />
        <HigherStack.Screen name="OTHER" component={OtherPage} />
      </HigherStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
