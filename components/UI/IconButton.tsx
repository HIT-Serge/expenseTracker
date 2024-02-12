import React from "react";
import { View, Text, StyleSheet, Pressable, Platform, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Colors, PressStyle } from "../../constants";

interface IconProps {
    onPressHandler: () => void;
    icon: keyof typeof Ionicons.glyphMap;
    size: number;
    color: string;
}

export default function IconButton({ onPressHandler, icon = 'add-circle-sharp', size = 20, color = Colors.primary700 }: IconProps) {

    return (
        <View style={PressStyle.outerContainer}>
            <Pressable
                style={({ pressed }) => pressed ? [PressStyle.pressableContainer, PressStyle.pressed] : PressStyle.pressableContainer}
                android_ripple={{ color: Colors.primary200 }}
                onPress={onPressHandler}
            >
                <View style={PressStyle.innerContainer}>
                    <Ionicons
                        name={icon}
                        size={size}
                        color={color} />
                </View>
            </Pressable>
        </View>
    )

}
