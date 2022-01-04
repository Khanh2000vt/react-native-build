import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AgendaStack from './Agenda/stacks/AgendaStack';
import ManageStack from './Manage/stacks/ManageStack';
import TestStack from './Test/stacks/TestStack';
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Test"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName = 'home';
            size = 16;
            if (route.name === 'Agenda') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'Manage') {
              iconName = focused ? 'people' : 'people-outline';
            } else if (route.name === 'Test') {
              iconName = focused ? 'flask' : 'flask-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen name="Agenda" component={AgendaStack} />
        <Tab.Screen name="Manage" component={ManageStack} />
        <Tab.Screen name="Test" component={TestStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
