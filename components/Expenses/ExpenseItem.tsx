import type { ExpenseData } from '../../types/types';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants';

// export default function ExpenseData({ expense: { description, amount, date } }: { expense: ExpenseData }) {
export default function ExpenseItem({ expense, largeStyle }: { expense: ExpenseData, largeStyle: boolean }) {

    const localDate = expense.date?.toLocaleDateString();
    const textStyle = largeStyle ? GlobalStyles.items.sumDescriptionText : GlobalStyles.items.itemDescriptionText;

    return (
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
    )
}
