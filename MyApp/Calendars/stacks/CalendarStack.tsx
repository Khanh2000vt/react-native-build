/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CalendarScreen from '../screens/CalendarScreen';
const Stack = createNativeStackNavigator();
export default function HomeStack() {
  return (
    // Tắt tên title
    <Stack.Navigator>
      <Stack.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
