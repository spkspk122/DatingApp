import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from "@react-navigation/native";
import NavigationService from "./NavigationService";
import screenNames from './screenNames'
import { SCREENS } from "../constant";

export const HomeNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer
      ref={NavigationService.navigationRef}
      independent={true}
    >
      <Stack.Navigator>
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};
