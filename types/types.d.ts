import { Ionicons } from '@expo/vector-icons';

export type TabComponent = {
    component: React.ComponentType<any>;
    name: string;
    title: string;
    icon: keyof typeof Ionicons.glyphMap;
};

export type StackComponent = {
    component: React.ComponentType<any>;
    tabComponents?: any;
    name: string;
    options?: {
        title?: string,
        headerShown?: boolean,
    };

};

export type ExpenseData =
    {
        id: string
        description: string
        amount: number
        date?: any
    }
export type ExpenseContextType = {
    expenses: string[];
    addExpense: ({ description, amount, date }: ExpenseObject) => void;
    updateExpense: (id: string, expenseData: ExpenseObject) => void;
    removeExpense: (id: string, { description, amount, date }: { description: string, amount: number, date: Date }) => void;
};

export type ExpenseObject = {
    description: string;
    amount: number;
    date: Date;
};
