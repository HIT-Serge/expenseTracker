import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { GlobalStyles } from '../../constants';
import { useRoute } from '@react-navigation/native';



export default function AddExpense() {


    type ExpenseData = {
        description: string;
        amount: number;
        date: string;
    };

    type RouteParams = {
        newExpense?: any;
        key: string;
        name: string;
        params?: any; // Add the 'params' property to the type
    };

    const localDate = new Date().toLocaleDateString();
    const [expense, setExpense] = useState<ExpenseData>({ description: '', amount: 0.00, date: '' });
    const route = useRoute<RouteParams>();
    console.log('route.params', route.params);
    // const newExpense = route.params?.newExpense;

    const handleChange = (value: string) => {

    }



    return (
        <View style={GlobalStyles.items.mainContainer}>
            <View style={GlobalStyles.items.descriptionContainer}>
                <View>
                    <Text style={styles.description}>Describe the expense</Text>
                </View>
                <View>
                    <TextInput style={styles.inputfield} keyboardType='default' value={expense.description} onChangeText={(text) => setExpense({ ...expense, description: text })}></TextInput>
                </View>
                <View>
                    <TextInput style={styles.description}>{localDate}</TextInput>
                </View>

            </View>
            <View>

            </View>

            <View style={GlobalStyles.items.AmountContainer}>
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


