import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { GlobalStyles } from '../../constants';



export default function AddExpense() {

    type ExpenseData = {
        description: string;
        amount: number;
        date: string;
    };

    const localDate = new Date().toLocaleDateString();
    const number = 123.475;
    const [expense, setExpense] = useState<ExpenseData>({ description: '', amount: 0.00, date: '' });
    console.log(expense);



    const handleChange = (value: string) => {
        console.log(value);
        const amount = parseFloat(value);
        // const decimalValue = Number(value).toFixed(2);
        // console.log(decimalValue);
        // setExpense({ ...expense, amount: amount })
    }
    // const formattedText = parseFloat(text).toFixed(2);
    // setValue(formattedText);


    return (
        <View style={GlobalStyles.items.mainContainer}>
            {/* <View style={GlobalStyles.items.descriptionContainer}>
                <View>
                    <Text style={styles.description}>Describe the expense</Text>
                </View>
                <View>
                    <TextInput style={styles.inputfield} keyboardType='default' value={expense.description} onChangeText={(text) => setExpense({ ...expense, description: text })}></TextInput>
                </View>
            </View>
            <View>
                <View>
                    <Text style={styles.description}>{localDate}</Text>
                </View>
            </View> */}

            <View>
                <TextInput style={styles.inputfield} autoCapitalize='none' keyboardType='number-pad' placeholder="0.00" value={expense.amount.toString()} onChangeText={(text) => setExpense({ ...expense, amount: parseFloat(text) })}></TextInput>
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


