import React, { useLayoutEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconButton from '../components/IconButton';
import { Colors } from "../constants";
import ExpensesOutput from '../components/Expenses/ExpensesOutput';
import { DUMMY_EXPENSES } from '../data/dummydata';





export function AllExpenses() {

    const navigation = useNavigation();
    const expensesSortedArray = DUMMY_EXPENSES.sort((a, b) => {
        if (b.date && a.date) {
            return b.date.getTime() - a.date.getTime();
        }
        return 0;
    });

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
            <ExpensesOutput expenses={expensesSortedArray} />
        </View>

    );
}