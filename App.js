import React from 'react';
import Sec1 from "./navigation/home.js";
import Sec2 from "./navigation/login.js";
import Sec3 from "./navigation/feed.js";
import Counter from "./navigation/counter.js";
import Product from './navigation/Product.js';
import Signin from './navigation/signin.js';
import addProduct from './navigation/addProduct.js';
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
        <BottomTab.Screen name="Counter" component={Counter} 
          options={{ 
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="calculator" color={color} size={26} />
            ),
        }}/>
        <BottomTab.Screen name="Product" component={Product} 
          options={{ 
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="box" color={color} size={26} />
            ),
        }}/>
        <BottomTab.Screen name="Adicioar Produto" component={addProduct} 
          options={{ 
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="box" color={color} size={26} />
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
        <Stack.Screen options={{headerShown: false}} name='Login' component={Sec2}/>
        <Stack.Screen options={{headerShown: false}} name='HomeTab' component={BottomTabs}/>
        <Stack.Screen options={{headerShown: false}} name='Cadastro' component={Signin}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}