import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screens from '@@Screens';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Users" component={Screens.Users} />
        <Stack.Screen name="User" component={Screens.User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
