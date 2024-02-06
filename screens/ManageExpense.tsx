import React from 'react';
import { View, Text } from 'react-native';
import AddExpense from '../components/Expenses/AddExpense';
import { Colors } from '../constants';


export function ManageExpense() {
    // Your code here
    return (
        <View style={{ backgroundColor: Colors.primary700, flex: 1 }}>
            <AddExpense />
        </View>
    );
}