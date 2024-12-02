import type { ExpenseData } from '../../types/types';
import { useNavigation, useRoute, } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { GlobalStyles, PressStyle, Colors } from '../../constants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Button from '../UI/Button';
import { ExpenseObject } from '../../types/types';
import { isoDate } from '../../util/getFormattedDate';


type RootStackParamList = {
    ManageExpense: undefined;
    // Add other screen names and their respective params here
};
// export default function ExpenseData({ expense: { description, amount, date } }: { expense: ExpenseData }) {

export default function ExpenseItem({ expense, largeStyle, editable, onCancel, onConfirm }: { expense: ExpenseData, largeStyle: boolean, editable?: boolean, pressable?: boolean, onCancel?: () => void, onConfirm?: (expense: any) => void }) {

    // { onCancel, onConfirm }: { onCancel: () => void, onConfirm: (expense: ExpenseObject) => void }

    const textStyle = largeStyle ? GlobalStyles.items.sumDescriptionText : GlobalStyles.items.itemDescriptionText;
    const navigation: NativeStackNavigationProp<RootStackParamList> = useNavigation();
    // const [description, setDescription] = useState(expense.description);
    // console.log('expenseDate', expense.date);
    const [input, setInput] = useState<any>({
        description: expense.description,
        amount: expense.amount,
        date: expense.date ? isoDate(expense.date) : ''
    });
    // console.log('date', input.date);
    // const localDate: any = input.date?.toLocaleDateString('nl-NL') || '';
    // dynamische toewijzing van het inputveld je geeft een inputIdentifier mee kloont het state object en verandert de waarde van de inputIdentifier
    const inputChangeHandler = (inputIdentifier: string, inputValue: string | number) => {
        setInput((current: ExpenseData) => { return { ...current, [inputIdentifier]: inputValue } });
    }

    const submitHandler = () => {

        const dateParts = input.date.split('-');
        const newDate = new Date(`${dateParts[2]}-${+dateParts[1]}-${+dateParts[0]}`)

        const updatedInput = {
            ...input,
            date: newDate
        };

        const descriptionValid = expense.description.trim().length > 0;
        const amountValid = expense.amount > 0 && !isNaN(expense.amount);
        const dateValid = expense.date instanceof Date;

        if (!descriptionValid || !amountValid || !dateValid) {
            Alert.alert('Invalid input', 'Please make sure to enter a valid date, description and amount.');
            return;
        } else if (onConfirm) {
            onConfirm(updatedInput);
        }

    }


    function expenseHandler() {
        navigation.navigate('ManageExpense' as any, { expenseId: expense.id });
    }
    return (
        <Pressable style={({ pressed }) => pressed && PressStyle.pressed}
            android_ripple={{ color: Colors.primary200 }}
            onPress={expenseHandler}>
            <View style={GlobalStyles.items.mainContainer}>
                <View style={GlobalStyles.items.descriptionContainer}>
                    <View>
                        {editable ? (
                            <TextInput
                                id='description'
                                onChangeText={(text) => {
                                    inputChangeHandler('description', text)
                                }}
                                style={[textStyle, { backgroundColor: 'white', color: 'black', margin: 10, borderRadius: 5 }]}
                                value={input.description}
                            />
                        ) : (
                            <Text style={[textStyle]}>{expense.description}</Text>
                        )}
                    </View>
                    {!largeStyle && <View>
                        {input.date && (editable ? (
                            <TextInput
                                id='date'
                                style={[textStyle, { backgroundColor: 'white', color: 'black', margin: 10, borderRadius: 5 }]}
                                onChangeText={(text) => {
                                    inputChangeHandler('date', text)
                                }}
                                value={input.date}
                            />
                        ) : (
                            <Text style={textStyle}>{input.date}</Text>
                        ))}
                    </View>
                    }
                </View>
                <View style={GlobalStyles.items.AmountContainer}>
                    {editable ? (
                        <TextInput
                            id='amount'
                            style={[textStyle, { backgroundColor: 'white', color: 'black', padding: 10, borderRadius: 5 }]}
                            keyboardType={'decimal-pad'}
                            onChangeText={(text) => {
                                inputChangeHandler('amount', parseFloat(text))
                            }}
                            value={`€ ${input.amount}`}
                        />
                    ) : (
                        <Text style={[textStyle, { color: 'black' }]}>
                            € {expense.amount}
                        </Text>
                    )}
                </View>
                {editable && <View>
                    <Button onPress={submitHandler} mode='' style={PressStyle.buttonOuterContainer}>{'Change'}</Button>
                    <Button onPress={onCancel as () => void} mode='flat' style={PressStyle.buttonOuterContainer}>Cancel</Button>
                </View>}
            </View>
        </Pressable>
    )
}

