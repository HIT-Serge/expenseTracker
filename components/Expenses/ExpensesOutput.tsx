import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './SumItem';
import type { ExpenseData } from '../../types/types';



export default function ExpensesOutput({ expenses }: { expenses: ExpenseData[] }) {


    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <ExpensesList expenses={expenses} />
            <ExpensesSummary expenses={expenses} />
        </View>
    )

}