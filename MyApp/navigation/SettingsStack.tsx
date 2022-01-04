/* eslint-disable prettier/prettier */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SettingsScreen, TypeScreen, RepeatScreen} from '../components/store/indexScreen';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
export default function SettingsStack({navigation, route = '1223'}: {navigation: any, route: any}) {
  const tabHiddenRoutes = ['TypeScreen', 'RepeatScreen', 'AboutScreen'];
  if (tabHiddenRoutes.includes(getFocusedRouteNameFromRoute(route))) {
    navigation.setOptions({tabBarStyle: {display: 'none'}});
  } else {
    navigation.setOptions({tabBarStyle: {display: 'flex'}});
  }
  return (
    // Tắt tên title
    <Stack.Navigator
      initialRouteName="SettingsScreen">
      <Stack.Group>
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{headerShown: false}} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="TypeScreen" component={TypeScreen}
        options={{
          title: 'Type',
          presentation: 'modal'}} />
        <Stack.Screen name="RepeatScreen" component={RepeatScreen}
          options={{
            headerShown: false,
            presentation: 'transparentModal',
            }}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}



