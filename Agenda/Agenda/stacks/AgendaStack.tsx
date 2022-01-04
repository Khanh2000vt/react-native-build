/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AgendaScreen from '../screens/AgendaScreen';
import ModalAddEvent from '../screens/ModalAddEvent';
const Stack = createNativeStackNavigator();
export default function HomeStack() {
  return (
    // Tắt tên title
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="CalendarScreen"
          component={AgendaScreen}
          options={{headerShown: false}}
        />
      </Stack.Group>

      <Stack.Group>
        <Stack.Screen
          name="ModalAddEvent"
          component={ModalAddEvent}
          options={{
            headerShown: false,
            presentation: 'transparentModal',
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
