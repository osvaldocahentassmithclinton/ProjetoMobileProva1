import React from 'react';
import Sec1 from "./navigation/home.js";
import Sec2 from "./navigation/login.js";
import Sec3 from "./navigation/feed.js";
import Sec4 from "./navigation/counter.js";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


function BottomTabs() {
  const BottomTab = createBottomTabNavigator();
  return (
      <BottomTab.Navigator 
        initialRouteName='Home'
        screenOptions={{ 
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'cyan',
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: '#000000',
          tabBarActiveBackgroundColor: 'black',
          tabBarInactiveBackgroundColor: '#050545',
        }}>
        <BottomTab.Screen name="Home" component={Sec1} 
          options={{ 
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="heart" color={color} size={26} />
            ),
          }}/>
        <BottomTab.Screen name="Feed" component={Sec3} 
          options={{ 
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="card" color={color} size={26} />
            ),
        }}/>
        <BottomTab.Screen name="Counter" component={Sec4} 
          options={{ 
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="calculator" color={color} size={26} />
            ),
        }}/>
      </BottomTab.Navigator>
 
  );
}





export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Sec2}/>
        <Stack.Screen options={{headerShown: false}} name='HomeTab' component={BottomTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}