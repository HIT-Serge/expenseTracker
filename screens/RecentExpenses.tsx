import React, { useLayoutEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconButton from '../components/UI/IconButton';
import { Colors } from "../constants";
import ExpensesOutput from '../components/Expenses/ExpensesOutput';
import { DUMMY_EXPENSES } from '../data/dummydata';
import DateUnifier from '../util/getFormattedDate';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    ManageExpense: undefined;
    // Add other screen names and their respective params here
};

export function RecentExpenses() {

    const navigation: NativeStackNavigationProp<RootStackParamList> = useNavigation();
    const currentDate: Date = new Date();
    const pastDate: string = DateUnifier(currentDate, 7);
    const expensesWeekAgo = DUMMY_EXPENSES.filter(expense => {
        const expenseDate = DateUnifier(expense.date);
        return expenseDate >= pastDate;
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
