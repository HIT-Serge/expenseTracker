import { Colors } from "./colors";
export const GlobalStyles: any = {

    screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
    },
    navigatorStyle: {

        headerStyle: { backgroundColor: Colors.primary800 },
        headerTintColor: Colors.accent500,
        tabBarActiveTintColor: Colors.primary800,
        tabBarInactiveTintColor: Colors.error50,
        tabBarActiveBackgroundColor: Colors.accent500,
        tabBarInactiveBackgroundColor: Colors.primary800,
        tabBarLabelStyle: { fontSize: 12 },
    },
    items: {
        mainContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 6,
            marginLeft: 15,
            marginRight: 10,
            backgroundColor: Colors.primary400,
            padding: 10,
            borderRadius: 10,
        },
        descriptionContainer: {
            backgroundColor: Colors.primary400,
            flex: 4,
            paddingLeft: 10,
            paddingVertical: 4,
            justifyContent: 'center',

        },
        itemDescriptionText: {
            color: Colors.error50,
        },
        sumDescriptionText: {
            fontSize: 20,
            fontWeight: 'bold',
            color: Colors.accent500,
        },

        amountText: {
            fontWeight: 'bold'
        },

        AmountContainer: {
            backgroundColor: Colors.accent500,
            paddingHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            flex: 2,

        },

        sumAmountText: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black'

        },
    }
}



