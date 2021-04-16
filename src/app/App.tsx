import React, {useState} from 'react';
import {Input, Layout, List, Button, Checkbox} from 'antd';
import './App.css';
import {connect} from 'react-redux'

const {Header, Footer, Content} = Layout;

export interface TodoItem {
    id: number;
    title: string;
    completed: boolean
}

interface Props {
    data: TodoItem[];
    onAdd: (text: string) => (type: string, text: string) => {};
    onDel: (text: string) => (type: string, text: string) => {};
    onChange: (text: string) => (type: string, text: string) => {};
}

export function App(props: Props) {
    const [inputTodo, setInput] = useState('');
    const addTodo = () => {
        props.onAdd(inputTodo);
        setInput('');
    }
    return (
        <Layout>
            <Header>Todo-list</Header>
            <Content>
                <List
                    size="large"
                    dataSource={props.data}
                    renderItem={item => (
                        <List.Item>
                            <div className="todo-item">
                                <Checkbox checked={item.completed}
                                          style={{textDecoration: item.completed ? 'line-through' : ''}}
                                          onChange={() => props.onChange(item.id.toString())}>Completed</Checkbox>
                                <div className="todo-title">{item.title}</div>
                                <Button type="primary" danger
                                        onClick={() => props.onDel(item.id.toString())}>
                                    X
                                </Button>
                            </div>
                        </List.Item>)
                    }
                />
            </Content>
            <Footer>
                <Input placeholder="Add Todo" value={inputTodo}
                       onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                           setInput(() => (e.target as HTMLInputElement).value);
                       }}
                       onKeyDown={(e: React.KeyboardEvent) => {
                           if (e.key === 'Enter') addTodo();
                       }}
                />
                <Button type="primary" onClick={addTodo}>Add
                    Todo</Button>
            </Footer>
        </Layout>
    );
}

function mapStateToProps(state: TodoItem[]) {
    return {data: state};
}

function mapDispatchToProps(dispatch: (arg0: { type: string; text: string }) => any) {
    return {
        onAdd: (text: string) => dispatch({type: 'ADD', text}),
        onDel: (text: string) => dispatch({type: 'DEL', text}),
        onChange: (text: string) => dispatch({type: 'CNG', text}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
