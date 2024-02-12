import React, { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';
import AddExpense from '../components/Expenses/AddExpense';
import { Colors, PressStyle } from '../constants';
import { useNavigation, useRoute } from '@react-navigation/native';
import IconButton from '../components/UI/IconButton';
import Button from '../components/UI/Button';


export function ManageExpense() {
    const route = useRoute();
    const navigation = useNavigation();

    const editedExpenseId = (route.params as { expenseId?: string })?.expenseId;
    const isEditing: boolean = !!editedExpenseId;

    const deleteExpenseHandler = () => {

    }

    const cancelHandler = () => {

    }

    const confirmHandler = () => {

    }



    useLayoutEffect(() => {

        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense',
        }), [navigation, isEditing]
    })


    return (
        <View style={{ backgroundColor: Colors.primary700, flex: 1, flexDirection: 'row', }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                <Button onPress={confirmHandler} mode='' style={PressStyle.buttonOuterContainer}>{isEditing ? 'Update' : 'Add'}</Button>
                <Button onPress={cancelHandler} mode='flat' style={PressStyle.buttonOuterContainer}>Cancel</Button>

            </View>

            <View style={{ marginHorizontal: 10 }}>
                {isEditing && <IconButton onPressHandler={deleteExpenseHandler} icon="trash" size={36} color={Colors.error500} />}
            </View>
        </View>
    );
}