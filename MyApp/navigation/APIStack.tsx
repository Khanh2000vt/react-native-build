/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {APIScreen} from '../components/store/indexScreen';
const Stack = createNativeStackNavigator();
export default function APIStack() {
  return (
    // Tắt tên title
    <Stack.Navigator>
      <Stack.Screen
        name="APIScreen"
        component={APIScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
