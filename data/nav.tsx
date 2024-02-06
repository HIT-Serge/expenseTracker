import { RecentExpenses, AllExpenses, ManageExpense } from '../screens';
import BottomTabs from '../components/BottomTabs';
import { TabComponent, StackComponent } from '../types/types';

// bottomtabs navigation array

export const bottomTabComponents: TabComponent[] = [
    {
        component: AllExpenses,
        name: 'AllExpenses',
        title: 'All Expenses',
        icon: 'logo-euro'
    },
    {
        component: RecentExpenses,
        name: 'RecentExpenses',
        title: 'Recent Expenses',
        icon: 'archive'
    }
];

//  stacks navigation rray

export const stackComponents: StackComponent[] = [
    {
        component: BottomTabs,
        tabComponents: bottomTabComponents,
        name: 'Expenses',
        options: {
            headerShown: false,

        }
    },
    {
        component: ManageExpense,
        name: 'ManageExpense',
        options: {
            title: 'Manage Expense',

        }
    },

];


