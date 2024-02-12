import React, { PropsWithChildren } from 'react';
import { View, Text, StyleSheet, Pressable, Platform, Image } from "react-native";
import { PressStyle, Colors, GlobalStyles } from '../../constants';

interface ButtonProps {
    onPress: () => void,
    children: string,
    mode: string,
    style: any,
}

const Button: React.FC<ButtonProps> = ({ children, onPress, mode, style }) => {

    return (
        <View style={[style, mode === 'flat' && PressStyle.flat]}>
            <Pressable
                style={({ pressed }) => pressed ? [PressStyle.pressableContainer, PressStyle.pressed] : PressStyle.pressableContainer}
                android_ripple={{ color: Colors.primary200 }}
                onPress={onPress}
            >
                <View style={[PressStyle.buttonInnerContainer]}>
                    <Text style={mode === 'flat' && PressStyle.flatText}>{children}</Text>
                </View>
            </Pressable>
        </View>

    );
};

export default Button;
