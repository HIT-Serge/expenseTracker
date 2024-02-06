import { Platform } from "react-native";
import { Colors } from "./colors";

export const PressStyle: any = {
    outerContainer: {
        height: 36,
        width: 36,
        borderRadius: 36,
        elevation: 14,
        backgroundColor: Colors.accent500,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        marginHorizontal: 10,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 36,
    },
    pressableContainer: {
        flex: 1,
    },
    pressed: {
        opacity: 0.75,
    },
}