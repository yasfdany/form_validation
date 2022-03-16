import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UsersScreen from '../ui/screens/users/UsersScreen';
import CreateUserScreen from '../ui/screens/create_user/CreateUserScreen';

const Stack = createNativeStackNavigator();
const noToolbar = {
  headerShown: false,
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UsersScreen">
        <Stack.Screen
          options={noToolbar}
          name="UsersScreen"
          component={UsersScreen}
        />
        <Stack.Screen
          options={noToolbar}
          name="CreateUserScreen"
          component={CreateUserScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
