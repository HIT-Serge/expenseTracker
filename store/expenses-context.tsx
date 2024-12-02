import React, { createContext, PropsWithChildren, useState, useReducer } from "react";
// je hebt de contextcrator nodig om context te maken, de waarde nodig om die waarde mee te geven en dit exporteer je dan als een functie die je kunt gebruiken om data beschikbaar te maken overal in de app
// import { DUMMY_EXPENSES } from "../data/dummydata";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 59.99,
        date: new Date('2021-12-19'),
    },
    {
        id: 'e2',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2022-01-05'),
    },
    {
        id: 'e3',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2024-2-01'),
    },
    {
        id: 'e4',
        description: 'A book',
        amount: 14.99,
        date: new Date('2022-02-19'),
    },
    {
        id: 'e5',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2024-2-5'),
    },
    {
        id: 'e6',
        description: 'A pair of trousers',
        amount: 89.29,
        date: new Date('2022-01-05'),
    },
    {
        id: 'e7',
        description: 'Some bananas',
        amount: 5.99,
        date: new Date('2021-12-01'),
    },
    {
        id: 'e8',
        description: 'A book',
        amount: 14.99,
        date: new Date('2024-02-19'),
    },
    {
        id: 'e9',
        description: 'Another book',
        amount: 18.59,
        date: new Date('2022-02-18'),
    },
    {
        id: 'e10',
        description: 'Sweater',
        amount: 40.99,
        date: new Date('2022-03-18'),
    },
    {
        id: 'e11',
        description: 'Broom',
        amount: 7.99,
        date: new Date('2022-04-19'),
    },
];

// type
type ExpenseObject = {
    description?: string;
    amount?: number;
    date?: Date;
};


type ExpenseContextType = {
    expenses: any;
    addExpense: ({ description, amount, date }: ExpenseObject) => void;
    updateExpense: (id: string, expenseData: ExpenseObject) => void;
    removeExpense: (id: any) => void;
};

// context
export const ExpensesContext = createContext<ExpenseContextType>({
    expenses: DUMMY_EXPENSES,
    addExpense: ({ description, amount, date }) => { },
    updateExpense: (id) => { },
    removeExpense: () => { },
});

function expensesReducer(state: any, action: any) {
    switch (action.type) {
        case 'ADD':
            const id = Math.random().toString();
            return [{ ...action.payload, id: id }, ...state];
        case 'REMOVE':
            return state.filter((expense: any) => expense.id !== action.payload);
        case 'UPDATE':

            const matchedIndex = state.findIndex((expense: any) => { return expense.id === action.payload.id });
            let updatableExpense = state[matchedIndex];
            const updatedItem = { ...updatableExpense, ...action.payload.data };
            const updatedState = [...state];
            updatedState[matchedIndex] = updatedItem;

            // console.log('state', updatedState);
            // updatableExpense = updatedItem;

            return updatedState;
        // return state.map((expense: any) => { if (expense.id === action.payload.id) { expense = action.payload.data } });
        default:
        // return state;
    }
}

export default function ExpensesContextProvider({ children }: PropsWithChildren) {


    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);
    // console.log('expensesState', expensesState);

    // 3 functions
    function addExpense(expenseData: ExpenseObject) {
        dispatch({ type: 'ADD', payload: expenseData });
    }
    function updateExpense(id: string, expenseData: ExpenseObject) {
        // console.log('update', id, expenseData);
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
    }
    function removeExpense(id: any) {
        dispatch({ type: 'REMOVE', payload: id });
    }

    // waarde
    // const value: ExpenseContextType = {
    //     expenses: expensesState,
    //     addExpense: (expenseData: ExpenseObject) => addExpense(expenseData),
    //     updateExpense: (id: string, expenseData: ExpenseObject) => updateExpense(id, expenseData),
    //     removeExpense: (id: any) => removeExpense(id),
    // }

    const value: ExpenseContextType = {
        expenses: expensesState,
        addExpense: addExpense,
        removeExpense: removeExpense,
        updateExpense: updateExpense,
    };

    return (<ExpensesContext.Provider value={value}>
        {children}
    </ExpensesContext.Provider>)
}
