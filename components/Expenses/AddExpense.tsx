import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { GlobalStyles } from '../../constants';
import Button from '../../components/UI/Button';
import { Colors, PressStyle } from '../../constants';
import { ExpensesContext } from '../../store/expenses-context';
import { useNavigation, useRoute } from '@react-navigation/native';
// import { ExpenseData, ExpenseObject } from '../../types/types';

type ExpenseObject = {
    description: string;
    amount: number;
    date: string | Date;
};

type RouteParams = {
    newExpense?: any;
    key: string;
    name: string;
    params?: any; // Add the 'params' property to the type
};


export default function AddExpense({ onCancel, onConfirm }: { onCancel: () => void, onConfirm: (expense: ExpenseObject) => void }) {


    const navigation = useNavigation();
    const localDate = new Date().toLocaleDateString('nl-NL');
    const [expense, setExpense] = useState<ExpenseObject>({ description: '', amount: 0.00, date: '' });

    // const expensesCtx = useContext(ExpensesContext)
    // console.log(expense);
    // console.log(expensesCtx)

    const submitHandler = () => {
        const descriptionValid = expense.description.trim().length > 0;
        const amountValid = expense.amount > 0 && !isNaN(expense.amount);
        const dateValid = expense.date instanceof Date;

        if (!descriptionValid || !amountValid || !dateValid) {
            Alert.alert('Invalid input', 'Please make sure to enter a valid date, description and amount.');
            return;
        } else {
            onConfirm(expense);
        }

    }
    const dateHandler = (text: string) => {

        const parts = text.split('-');
        const date = new Date(`${parts[2]}-${+parts[1]}-${+parts[0]}`);

        // console.log('textDate', date);
        // console.log(localDate);
        setExpense({ ...expense, date: date });
    }

    return (
        <View style={GlobalStyles.items.mainContainer}>
            <View style={GlobalStyles.items.descriptionContainer}>
                <View>
                    <Text style={styles.description}>Describe the expense</Text>
                </View>
                <View>
                    <TextInput style={styles.inputfield}
                        keyboardType='default'
                        value={expense.description}
                        multiline={true}
                        autoCorrect={false}
                        autoCapitalize='sentences'
                        onChangeText={(text) => setExpense({ ...expense, description: text })}></TextInput>
                </View>
                <View>
                    <TextInput onChangeText={(dateHandler)}
                        style={styles.description}
                        placeholder='DD-MM-YYYY'
                        keyboardType='number-pad'
                        maxLength={10}
                    ></TextInput>
                </View>

            </View>


            <View style={GlobalStyles.items.AmountContainer}>
                <TextInput style={styles.inputfield}
                    autoCapitalize='none'
                    keyboardType='decimal-pad'
                    placeholder="0.00"
                    // value={expense.amount.toString()} 
                    onChangeText={(text) => setExpense({ ...expense, amount: +text })}></TextInput>
            </View>

            <View>

                <Button onPress={submitHandler} mode='' style={PressStyle.buttonOuterContainer}>{'Add'}</Button>
                {/* <Button onPress={() => confirmHandler()} mode='' style={PressStyle.buttonOuterContainer}>{isEditing ? 'Update' : 'Add'}</Button> */}

                <Button onPress={onCancel} mode='flat' style={PressStyle.buttonOuterContainer}>Cancel</Button>


            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    description: {
        fontWeight: 'bold',
        color: 'white'
    },
    inputfield: {
        backgroundColor: 'white'
    }
})


// const isValid = /^(0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[01])\/(19|20)\d{2}$/.test(text);

// if (!isValid) {
//     Alert.alert('Invalid input', 'Please enter a valid date in the format MM/DD/YYYY.');
//     return;
// }