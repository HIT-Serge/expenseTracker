import React, { useLayoutEffect, useContext } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconButton from '../components/UI/IconButton';
import { Colors } from "../constants";
import ExpensesOutput from '../components/Expenses/ExpensesOutput';
import { DUMMY_EXPENSES } from '../data/dummydata';
import DateUnifier from '../util/getFormattedDate';
import { ExpensesContext } from '../store/expenses-context';
import { ExpenseObject } from '../types/types';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    ManageExpense: undefined;
    // Add other screen names and their respective params here
};



export function RecentExpenses() {

    const navigation: NativeStackNavigationProp<RootStackParamList> = useNavigation();
    const currentDate: Date = new Date();
    const pastDate: string = DateUnifier(currentDate, 7);
    // console.log(pastDate);
    const expensesCtx = useContext(ExpensesContext);
    // console.log('expensesCtx', expensesCtx.expenses);


    const expensesWeekAgo = expensesCtx.expenses.filter((expense: ExpenseObject) => {
        const expenseDate = DateUnifier(expense.date);
        if (new Date(expenseDate) >= new Date(pastDate)) {
            // console.log(expenseDate, pastDate, 'true')
        }
        return new Date(expenseDate) >= new Date(pastDate);
    }
    )
    function pressHandler() {
        navigation.navigate('ManageExpense' as any,)
    }

    useLayoutEffect(() => {

        navigation.setOptions({
            headerRight: () => {
                return <IconButton
                    onPressHandler={pressHandler}
                    size={20}
                    color={Colors.primary700}
                    icon='add-circle-sharp' />
            }
        }), [navigation, IconButton]
    })


    return (
        <View style={{ backgroundColor: Colors.primary700, flex: 1 }}>
            <ExpensesOutput expenses={expensesWeekAgo} />
        </View>

    );

}
