export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export type AppState = Todo[];

export type Action =
    { type: string; payload: string | number | AppState; }

export const initialState: AppState = [
    {
        id: 0,
        title: 'Racing car sprays burning fuel into crowd.',
        completed: false
    },
    {
        id: 1,
        title: 'Japanese princess to wed commoner.',
        completed: true
    },
    {
        id: 2,
        title: 'Australian walks 100km after outback crash.',
        completed: false
    },
    {
        id: 3,
        title: 'Man charged over missing wedding girl.',
        completed: false
    },
    {
        id: 4,
        title: 'Los Angeles battles huge wildfires',
        completed: true
    },
];
