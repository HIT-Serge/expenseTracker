import { StatusBar } from 'expo-status-bar';
import React from 'react';
import StackScreens from './components/StackScreens';
import { stackComponents } from './data/nav';
import ExpenseContextProvider from './store/expenses-context';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <ExpenseContextProvider>
        <StackScreens stackComponents={stackComponents} />
      </ExpenseContextProvider>
    </>
  );
}
