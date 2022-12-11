import React, {Fragment} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './navigation-utilities';
import Home from '@screens/Home/Home';
import AddScreen from '@screens/AddScreen/AddScreen';
import {StatusBar} from 'react-native';
import {colors} from '@theme/colors';

export type NavigatorParamList = {
  home: undefined;
  addScreen: undefined;
};
// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<NavigatorParamList>();

const AppStack = () => {
  const Route = (
    <Fragment>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="addScreen" component={AddScreen} />
    </Fragment>
  );

  const getCurrentRoutes = () => {
    return Route;
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
      initialRouteName="home">
      {getCurrentRoutes()}
    </Stack.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={DefaultTheme}

      // {...props} // To Persist Navigation
    >
      <StatusBar backgroundColor={colors.blue1} />
      <AppStack />
    </NavigationContainer>
  );
};

AppNavigator.displayName = 'AppNavigator';
