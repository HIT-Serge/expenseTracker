import React from "react";
import { View, Text, StyleSheet, Pressable, Platform, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Colors, PressStyle } from "../constants";

export default function IconButton(props: { onPressHandler: () => void, icon: keyof typeof Ionicons.glyphMap, size: number, color: string }) {

    return (
        <View style={PressStyle.outerContainer}>
            <Pressable
                style={({ pressed }) => pressed ? [PressStyle.pressableContainer, PressStyle.pressed] : PressStyle.pressableContainer}
                android_ripple={{ color: Colors.primary200 }}
                onPress={props.onPressHandler}
            >
                <View style={PressStyle.innerContainer}>
                    <Ionicons
                        name={props.icon}
                        size={props.size}
                        color={props.color} />
                </View>
            </Pressable>
        </View>
    )

}
