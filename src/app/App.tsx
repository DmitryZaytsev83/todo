import React, {useEffect, useState} from 'react';
import {Layout} from 'antd';
import './App.scss';
import {Todo, Action, initialState, AppState} from '../store/state';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from '../store/connect';
import TodoList from './components/TodoList/TodoList';
import AddNewTodo from './components/AddNewTodo/AddNewTodo';

const {Header} = Layout;

interface AppProps {
    data: Todo[];
    onLoad: (payload: AppState) => (arg: Action) => {};
    onAdd: (payload: string) => (arg: Action) => {};
    onDel: (payload: number) => (arg: Action) => {};
    onChange: (payload: number) => (arg: Action) => {};
}

export function App(props: AppProps) {
    const [loading, setLoading] = useState(true);
    const [inputTodo, setInput] = useState('');
    const addTodo = () => {
        if (inputTodo) {
            props.onAdd(inputTodo);
            setInput('');
        }
    }
    useEffect(() => {
        if (loading) {
            new Promise(resolve => {
                return setTimeout(() => {
                    setLoading(false);
                    resolve(props.onLoad(initialState));
                }, 1500);
            })
        }
    });
    return (
        <Layout>
            <Header>Todo-list</Header>
            <TodoList data={props.data}
                      onChange={props.onChange}
                      onDel={props.onDel}
                      loading={loading}
            />
            <AddNewTodo inputTodo={inputTodo}
                        setInput={setInput}
                        addTodo={addTodo}/>
        </Layout>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
