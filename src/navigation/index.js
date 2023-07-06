import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NavigationContainer} from '@react-navigation/native';
import NavigationService from './NavigationServices';
import screenNames from './screenNames';
import {SCREENS} from '../constant';

export const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer
      ref={NavigationService.navigationRef}
      independent={true}>
      <Stack.Navigator initialRouteName={SCREENS.Splash}>
        <Stack.Screen
          name={SCREENS.Splash}
          component={screenNames.SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREENS.onBoarding}
          component={screenNames.OnRecBoarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREENS.login}
          component={screenNames.login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREENS.otp}
          component={screenNames.VerifyOtp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={SCREENS.HomeScreen}
          component={screenNames.HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
