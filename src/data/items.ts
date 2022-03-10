import { Item } from '../types/Item'

export const items: Item[] = [
    {
        date: new Date(2021, 9, 9), 
        category: 'food', 
        title: 'McDonalds',
        value: 32.12
    },
    {
        date: new Date(2021, 9, 5), 
        category: 'food', 
        title: 'Burger King',
        value: 28
    },
    {
        date: new Date(2021, 9, 15), 
        category: 'rend', 
        title: 'Aluguel Apt',
        value: 2300
    },
    {
        date: new Date(2021, 10, 18), 
        category: 'salary', 
        title: 'Salario Acme',
        value: 4000
    },
];