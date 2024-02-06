import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { bottomTabComponents } from '../data/nav';
import { NavigationContainer } from '@react-navigation/native';
import { StackComponent } from '../types/types';
import { GlobalStyles } from '../constants';

export default function StackScreens({ stackComponents }: { stackComponents: StackComponent[] }) {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName={stackComponents[0].name} screenOptions={GlobalStyles.navigatorStyle}>
                {
                    stackComponents.map((stackComponent: StackComponent, index: number) => {
                        return (
                            <Stack.Screen
                                key={index}
                                name={stackComponent.name}
                                options={stackComponent.options}
                            >
                                {() => <stackComponent.component tabComponents={bottomTabComponents} />}
                            </Stack.Screen>
                        )
                    })
                }
            </Stack.Navigator>
        </NavigationContainer >
    )

}