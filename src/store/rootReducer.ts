import {Action, AppState, Todo} from './state';

export default function rootReducer(state: AppState = [], action: Action): AppState {
    switch (action.type) {
        case 'ONLOAD':
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
                if (el.id === Number(action.payload)) {
                    const todo: Todo = {
                        id: el.id,
                        title: el.title,
                        completed: !el.completed
                    };
                    return todo;
                }
                return el;
            }))];
    }
    return state;
}
