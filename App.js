import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as Screens from '@@Screens';
import {PersistGate} from 'redux-persist/integration/react';
import Store from '@@Store';
import {Provider} from 'react-redux';

const Stack = createStackNavigator();

const {store, persistor} = Store();

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Users" component={Screens.Users} />
            <Stack.Screen
              name="User"
              options={({route}) => ({title: route?.params?.name})}
              component={Screens.User}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
