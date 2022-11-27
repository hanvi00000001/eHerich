import React, {useContext} from 'react';
import {AuthStack} from './authStack';
import { NavigationContainer } from '@react-navigation/native';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
