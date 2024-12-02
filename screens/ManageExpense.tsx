import React, { useEffect, useLayoutEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import AddExpense from '../components/Expenses/AddExpense';
import { Colors, PressStyle } from '../constants';
import { useNavigation, useRoute } from '@react-navigation/native';
import IconButton from '../components/UI/IconButton';
import Button from '../components/UI/Button';
import { ExpensesContext } from '../store/expenses-context';
import { DUMMY_EXPENSES } from '../data/dummydata';
import ExpenseItem from '../components/Expenses/ExpenseItem';
import { ExpenseData, ExpenseObject } from '../types/types';




export function ManageExpense() {
    const route = useRoute();
    const navigation = useNavigation();
    const expensesCtx = useContext(ExpensesContext);
    const thisExpense: ExpenseData = expensesCtx.expenses.find((expense: ExpenseData) => expense.id === (route.params as { expenseId?: string })?.expenseId);
    const editedExpenseId = (route.params as { expenseId?: string })?.expenseId;
    const isEditing: boolean = !!editedExpenseId;
    // console.log('thisExpense', thisExpense);

    const deleteHandler = () => {
        expensesCtx.removeExpense(editedExpenseId);
        navigation.goBack();
    }

    const cancelHandler = () => {
        // console.log('cancel');
        navigation.goBack();
    }

    const confirmHandler = ({ description, amount, date }: any) => {
        // console.log('date', date);
        let newDate: Date = new Date(date);
        // console.log('newDate', newDate);



        if (isEditing) {
            // if (date) {
            // const parts = date.split('-');

            // newDate = new Date(`${parts[2]}-${+parts[1]}-${+parts[0]}`)
            // console.log('parts', parts);
            // console.log('newDate', newDate);


            // }
            expensesCtx.updateExpense(thisExpense.id, { description: description, amount: amount, date: date });
        } else {
            expensesCtx.addExpense({ description, amount, date: date });
        }
        navigation.goBack();
    }

    useLayoutEffect(() => {

        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        }), [navigation, isEditing]
    })


    return (
        <View style={{ backgroundColor: Colors.primary700, flex: 1, }}>
            {thisExpense ? <ExpenseItem expense={thisExpense} largeStyle={false} editable={true}
                onCancel={cancelHandler} onConfirm={(expense) => confirmHandler(expense)} /> : <AddExpense onCancel={cancelHandler} onConfirm={(expense) => confirmHandler(expense)} />}

            <View style={{ marginHorizontal: 10, alignItems: 'center' }}>
                {isEditing && <IconButton onPressHandler={deleteHandler} icon="trash" size={36} color={Colors.error500} transparent={true} />}
            </View>


        </View>
    );
}