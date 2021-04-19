import {Action, AppState} from './state';

export default function rootReducer(state: AppState = [], action: Action): AppState {
    switch (action.type) {
        case 'ONLOAD':
            console.log('ONLOAD');
            console.log(action.payload);
            return (action.payload as AppState);
        case 'ADD':
            return [...state, {
                id: new Date().getTime(),
                title: (action.payload as string),
                completed: false
            }];
        case 'DEL':
            return [...(state.filter((el) => el.id !== Number(action.payload)))];
        case 'CHANGE':
            return [...(state.map((el) => {
                if (el.id === Number(action.payload)) el.completed = !el.completed;
                return el;
            }))];
    }
    return state;
}
