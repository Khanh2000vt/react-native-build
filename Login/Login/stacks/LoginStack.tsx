/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import EnterPhoneScreen from '../screens/EnterPhoneScreen';
import OTPScreen from '../screens/OTPScreen';
import RegisterScreen from '../screens/RegisterScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import WorkingStacks from '../../Working/stacks/WorkingStacks';
const Stack = createNativeStackNavigator();
export default function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EnterPhoneScreen"
        component={EnterPhoneScreen}
        options={{
          title: 'Enter Phone',
        }}
      />
      <Stack.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{
          title: 'OTP',
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register',
        }}
      />
      <Stack.Screen
        name="NewPasswordScreen"
        component={NewPasswordScreen}
        options={{
          title: 'New Password',
        }}
      />
      <Stack.Screen
        name="WorkingStacks"
        component={WorkingStacks}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
