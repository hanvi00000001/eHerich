import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import SignInWelcomScreen from '../screens/authScreen/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreen/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import RootClientTabs from './ClientTabs';
import DrawerNavigator from './DrawerNavigator';

const Auth = createStackNavigator();

export function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SignInWelcomeScreen"
        component={SignInWelcomScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />

      <Auth.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
    </Auth.Navigator>
  );
}
