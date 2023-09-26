import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';

import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList, SafeAreaView } from 'react-native';


import { useState, } from 'react';
import SingleItem from './src/components/SingleItem.js'
import ItemInput from './src/components/ItemInput.js'
import Colors from './colors/Colors'

import HomeScreen from './src/screens/HomeScreen.js';
import MyListScreen from './src/screens/MyListScreen.js';
import AddItemScreen from './src/screens/AddItemScreen.js';
import DetailScreen from './src/screens/DetailScreen.js';
import MoreInfoScreen from './src/screens/MoreInfoScreen.js';
import FavoritesContextProvider from './src/storage/MyContext.js';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <FavoritesContextProvider>

  
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name = "Home" component={HomeScreen}
          options={
            {title: 'Home'}
          }
        />
        <Stack.Screen name = "Detail" component={DetailScreen}
        />
        <Stack.Screen name='MyList' component={MyListScreen}
        />
        <Stack.Screen name='AddItem' component={AddItemScreen}
        />
        <Stack.Screen name='MoreInfoScreen' component={MoreInfoScreen} />

      </Stack.Navigator>

    </NavigationContainer>
    </FavoritesContextProvider>
    </>

  );
}
