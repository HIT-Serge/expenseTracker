import { Platform } from "react-native";
import { Colors } from "./colors";

export const PressStyle: any = {

    buttonOuterContainer: {
        height: 36,
        // width: 100,
        borderRadius: 8,
        elevation: 14,
        backgroundColor: Colors.accent500,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

        marginVertical: 3,
        marginHorizontal: 20,
    },
    buttonInnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: 20,
    },
    flat: {
        backgroundColor: 'transparent',
    },
    flatText: {
        color: Colors.primary200,
    },
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
        margin: 20,
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