import { StatusBar } from 'expo-status-bar';
import React from 'react';
import StackScreens from './components/StackScreens';
import { stackComponents } from './data/nav';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <StackScreens stackComponents={stackComponents} />
    </>
  );
}
