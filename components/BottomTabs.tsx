import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalStyles } from '../constants';
import { Ionicons } from '@expo/vector-icons';
import { TabComponent } from '../types/types';

export default function BottomTabs({ tabComponents }: { tabComponents: TabComponent[] }) {

    const BottomTab = createBottomTabNavigator();

    return (
        <BottomTab.Navigator initialRouteName={tabComponents[0].name}
            screenOptions={GlobalStyles.navigatorStyle}>

            {tabComponents.map((tabComponent: TabComponent, index: number) => {
                return (
                    <BottomTab.Screen
                        key={index}
                        name={tabComponent.name}
                        component={tabComponent.component}
                        options={{
                            title: tabComponent.title,
                            tabBarIcon: ({ color }: { color: string }) => <Ionicons
                                name={tabComponent.icon}
                                size={24}
                                color={color} />
                        }} />

                )
            })}
        </BottomTab.Navigator>
    )
};

