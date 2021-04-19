import {Action, AppState} from './state';

export function mapStateToProps(state: AppState) {
    return {data: state};
}

export function mapDispatchToProps(dispatch: (arg0: Action) => any) {
    return {
        onLoad: (payload: AppState) => dispatch({type: 'ONLOAD', payload}),
        onAdd: (payload: string) => dispatch({type: 'ADD', payload}),
        onDel: (payload: number) => dispatch({type: 'DEL', payload}),
        onChange: (payload: number) => dispatch({type: 'CHANGE', payload}),
    }
}
