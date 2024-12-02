import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import type { ExpenseData } from '../../types/types';
import ExpenseItem from './ExpenseItem';
import HITFlatListWEB from '@hit/hitflatlistweb';

export default function ExpensesList({ expenses }: { expenses: ExpenseData[] }) {

    // console.log('expenses', expenses);

    return (
        <View style={{
            flex: 1,
            flexGrow: 1
        }}>

            <FlatList
                data={expenses}
                keyExtractor={(item, index) => item.id}
                renderItem={(itemData) => { return (<ExpenseItem expense={itemData.item} largeStyle={false} editable={false} />) }}
            />
        </View>
    )
}
