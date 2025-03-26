import React from 'react';
import Sec1 from "./navigation/home.js";
import Sec2 from "./navigation/login.js";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{ 
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'cyan',
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: '#000000',
          tabBarActiveBackgroundColor: 'black',
          tabBarInactiveBackgroundColor: '#050545',
        }}>
        <Tab.Screen 
          name="Login" 
          component={Sec2}
          options={{ 
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="clover" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen name="Home" component={Sec1} 
          options={{ 
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="heart" color={color} size={26} />
            ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}