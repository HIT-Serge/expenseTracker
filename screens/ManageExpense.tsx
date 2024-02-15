import React, { useEffect, useLayoutEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import AddExpense from '../components/Expenses/AddExpense';
import { Colors, PressStyle } from '../constants';
import { useNavigation, useRoute } from '@react-navigation/native';
import IconButton from '../components/UI/IconButton';
import Button from '../components/UI/Button';
import { ExpensesContext } from '../store/expenses-context2';
import { DUMMY_EXPENSES } from '../data/dummydata';
import ExpenseItem from '../components/Expenses/ExpenseItem';
import { ExpenseData, ExpenseContextType, ExpenseObject } from '../types/types';



export function ManageExpense() {
    const route = useRoute();
    const navigation = useNavigation();

    const thisExpense: ExpenseData | undefined = DUMMY_EXPENSES.find((expense) => expense.id === (route.params as { expenseId?: string })?.expenseId);

    const expensesCtx = useContext(ExpensesContext);
    // console.log(expenseData);

    const editedExpenseId = (route.params as { expenseId?: string })?.expenseId;
    // console.log(thisExpense, editedExpenseId);
    const isEditing: boolean = !!editedExpenseId;




    const deleteExpenseHandler = () => {
        console.log('delete expense id', editedExpenseId);
        // console.log(expensesCtx.removeExpense);
        expensesCtx.deleteExpense(editedExpenseId);
        navigation.goBack();
    }

    const cancelHandler = () => {
        navigation.goBack();
    }

    const confirmHandler = () => {
        navigation.goBack();

    }



    useLayoutEffect(() => {

        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        }), [navigation, isEditing]
    })


    return (
        <View style={{ backgroundColor: Colors.primary700, flex: 1, }}>
            {thisExpense && <ExpenseItem expense={thisExpense} largeStyle={false} />}
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', margin: 20 }}>


                <Button onPress={confirmHandler} mode='' style={PressStyle.buttonOuterContainer}>{isEditing ? 'Update' : 'Add'}</Button>
                <Button onPress={cancelHandler} mode='flat' style={PressStyle.buttonOuterContainer}>Cancel</Button>

            </View>

            <View style={{ marginHorizontal: 10, alignItems: 'center' }}>
                {isEditing && <IconButton onPressHandler={deleteExpenseHandler} icon="trash" size={36} color={Colors.error500} transparent={true} />}
            </View>
        </View>
    );
}