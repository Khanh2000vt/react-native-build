/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TestScreen from '../TestScreen';
const Stack = createNativeStackNavigator();
export default function HomeStack() {
  return (
    // Tắt tên title
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="TestScreen"
          component={TestScreen}
          options={{headerShown: false}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
