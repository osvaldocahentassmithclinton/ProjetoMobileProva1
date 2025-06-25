import React from 'react';
import login from "./projeto/login.js";
import SignIn from './projeto/signin.js';
import Travels from './projeto/Travels.js';
import cadastroViagens from './projeto/addTravels.js';
import removerViagens from './projeto/removeTravels.js';
import alterarViagens from './projeto/changeTravels.js';
import AddAdmin from './projeto/addAdmin.js';
import RemoveAdmin from './projeto/removeAdmin.js';
import Agendamentos from './projeto/Agendamentos.js';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ProviderCart } from './projeto/ProviderCart.js';

function BottomTabs({ isAdmin }) {
  const BottomTab = createBottomTabNavigator();
  return (
      <BottomTab.Navigator 
        initialRouteName='Home' 
        screenOptions={{ 
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'cyan',
          
          tabBarActiveTintColor: '#FFFFFF', 
          tabBarInactiveTintColor: '#BBBBBB', 
          tabBarActiveBackgroundColor: '#008080', 
          tabBarInactiveBackgroundColor: '#282828', 
          tabBarStyle: { 
            backgroundColor: '#282828', 
            borderTopColor: '#3A3A3A', 
            borderTopWidth: 1,
          },

          headerShown: false,
        }}>
        <BottomTab.Screen name="Home" component={() => <Travels isAdmin={isAdmin} />}
          options={{ 
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="plane" color={color} size={26} />
            ),
        }}/>
        <BottomTab.Screen name="Agendamentos" component={Agendamentos}
          options={{ 
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="calendar-check" color={color} size={26} />
            ),
        }}/>
      </BottomTab.Navigator>
  );
}

function ADM() {
  const BottomTab = createBottomTabNavigator();
  return (
      <BottomTab.Navigator 
        initialRouteName='Travels'
        screenOptions={{ 
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'cyan',
          
          
          tabBarActiveTintColor: '#FFFFFF', 
          tabBarInactiveTintColor: '#BBBBBB', 
          tabBarActiveBackgroundColor: '#008080', 
          tabBarInactiveBackgroundColor: '#282828', 
          tabBarStyle: { 
            backgroundColor: '#282828', 
            borderTopColor: '#3A3A3A', 
            borderTopWidth: 1,
          },

          headerShown: false,
        }}>
        <BottomTab.Screen name="Travels" component={() => <Travels isAdmin={true} />}
          options={{ 
            tabBarIcon: ({ color }) => (
              <FontAwesome name="plane" size={26} color={color} />
            ),
        }}/>
        <BottomTab.Screen name="AddTravels" component={cadastroViagens} 
          options={{ 
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="airplane-plus" size={26} color={color} />
            ),
        }}/>
        <BottomTab.Screen name="RemoveTravels" component={removerViagens} 
          options={{ 
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="airplane-remove" size={26} color={color} />
            ),
        }}/>
        <BottomTab.Screen name="ChangeTravels" component={alterarViagens} 
          options={{ 
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="reload" color={color} size={26} />
            ),
        }}/>
        <BottomTab.Screen name="AddAdmin" component={AddAdmin}
          options={{ 
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-plus" color={color} size={26} />
            ),
          }}
        />
        <BottomTab.Screen name="RemoveAdmin" component={RemoveAdmin}
          options={{ 
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-remove" color={color} size={26} />
            ),
          }}
        />
      </BottomTab.Navigator>
  );
}

export default function App() {
  const Stack = createStackNavigator();
  return (
    <ProviderCart>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name='Login' component={login}/>
          <Stack.Screen options={{headerShown: false}} name='HomeTab' component={() => <BottomTabs isAdmin={false} />}/>
          <Stack.Screen options={{headerShown: false}} name='AdminDashboard' component={ADM}/>
          <Stack.Screen options={{headerShown: false}} name='Cadastro' component={SignIn}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ProviderCart>
  );
}