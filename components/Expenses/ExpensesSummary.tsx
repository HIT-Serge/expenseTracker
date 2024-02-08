import type { ExpenseData } from '../../types/types';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants';
import ExpenseItem from './ExpenseItem';


export default function ExpensesSummary({ expenses }: { expenses: ExpenseData[] }) {
    let rawAmount: number = expenses.reduce((acc, expense) => acc + expense.amount, 0);
    let amount: number = parseFloat(rawAmount.toFixed(2));

    const expense = {
        id: 'Sum',
        description: 'Sum',
        amount: amount,
        date: undefined,
    }


    return (
        <ExpenseItem expense={expense} largeStyle={true} />
    )
}
