/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SecondScreen, TypeScreen} from '../components/store/indexScreen';
const Stack = createNativeStackNavigator();
export default function SecondStack() {
  return (
    // Tắt tên title
    <Stack.Navigator>
      <Stack.Screen
        name="SecondScreen"
        component={SecondScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
       name="TypeScreen"
       component={TypeScreen}
       options={{headerShown: true}}/>
    </Stack.Navigator>
  );
}
