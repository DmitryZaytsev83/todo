const initialState = [
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

export default function rootReducer(state = initialState, action: { type: string, text: string }) {
    switch (action.type) {
        case 'ADD':
            return [...state, {
                id: new Date().getTime(),
                title: action.text,
                completed: false
            }];
        case 'DEL':
            return [...(state.filter((el, idx) => el.id !== +action.text))];
        case 'CNG':
            return [...(state.map((el, idx) => {
                if (el.id === +action.text) el.completed = !el.completed;
                return el;
            }))];
    }
    return state;
}
