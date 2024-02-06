import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconButton from '../components/IconButton';
import { Colors } from "../constants";
import ExpensesOutput from '../components/Expenses/ExpensesOutput';
import { DUMMY_EXPENSES } from '../data/dummydata';
import DateUnifier from '../components/DateUnifier';

export function RecentExpenses() {

    const navigation = useNavigation();
    const currentDate: Date = new Date();
    const pastDate: string = DateUnifier(currentDate, 7);
    const expensesWeekAgo = DUMMY_EXPENSES.filter(expense => {
        const expenseDate = DateUnifier(expense.date);
        return expenseDate >= pastDate
    }
    )

    function pressHandler() {
        navigation.navigate('ManageExpense' as never);
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
