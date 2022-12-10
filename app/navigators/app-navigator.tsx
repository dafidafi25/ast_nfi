import React, {Fragment} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef, useBackButtonHandler} from './navigation-utilities';
import Home from '@screens/Home/Home';
import AddScreen from '@screens/AddScreen/AddScreen';

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
        animation: 'simple_push',
      }}
      initialRouteName="home">
      {getCurrentRoutes()}
    </Stack.Navigator>
  );
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  useBackButtonHandler(canExit);

  console.log(props);

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={DefaultTheme}
      // {...props} // To Persist Navigation
    >
      <AppStack />
    </NavigationContainer>
  );
};

AppNavigator.displayName = 'AppNavigator';

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ['home'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
