import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RecentExpenses, AllExpenses, ManageExpense } from './screens';
import { GlobalStyles } from './constants';



export default function App() {

  const Stack = createNativeStackNavigator();

  return (

    <>
      <StatusBar style="auto" />
      <NavigationContainer >
        <Stack.Navigator initialRouteName='AllExpenses' screenOptions={
          {
            headerStyle: { backgroundColor: GlobalStyles.colors.primary800 },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: GlobalStyles.colors.primary800, padding: 20, flex: 1, alignItems: 'center',

            },
          }
        }>
          <Stack.Screen name="AllExpenses" component={AllExpenses} />
          <Stack.Screen name="RecentExpenses" component={RecentExpenses} />
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
        </Stack.Navigator>

      </NavigationContainer >

    </>
  );
}

