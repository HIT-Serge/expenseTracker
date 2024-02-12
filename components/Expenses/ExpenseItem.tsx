import type { ExpenseData } from '../../types/types';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { GlobalStyles, PressStyle, Colors } from '../../constants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type RootStackParamList = {
    ManageExpense: undefined;
    // Add other screen names and their respective params here
};
// export default function ExpenseData({ expense: { description, amount, date } }: { expense: ExpenseData }) {

export default function ExpenseItem({ expense, largeStyle }: { expense: ExpenseData, largeStyle: boolean }) {

    const localDate: any = expense.date?.toLocaleDateString();
    const textStyle = largeStyle ? GlobalStyles.items.sumDescriptionText : GlobalStyles.items.itemDescriptionText;
    const navigation: NativeStackNavigationProp<RootStackParamList> = useNavigation();
    // expense.date = localDate;


    function expenseHandler() {

        navigation.navigate('ManageExpense' as any, { expenseId: expense.id, });
        // navigation.setParams({ newExpense: false, expense: expense });
        // navigation.setParams({ newExpense: false});
    }
    return (

        <Pressable style={({ pressed }) => pressed && PressStyle.pressed}
            android_ripple={{ color: Colors.primary200 }}
            onPress={expenseHandler}>
            <View style={GlobalStyles.items.mainContainer}>
                <View style={GlobalStyles.items.descriptionContainer}>
                    <View>
                        <Text style={[textStyle, { fontWeight: 'bold' }]}>{expense.description}</Text>
                    </View>
                    {!largeStyle && <View>
                        <Text style={textStyle}>{localDate}</Text>
                    </View>
                    }
                </View>
                <View style={GlobalStyles.items.AmountContainer}>
                    <Text style={[textStyle, { color: 'black', fontWeight: 'bold' }]}>
                        € {expense.amount}
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}
