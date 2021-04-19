import {Button, Input, Layout} from 'antd';
import React from 'react';
import './AddNewTodo.scss';

const {Footer} = Layout;

type AddNewTodoProps = {
    inputTodo: string;
    setInput: (arg0: () => string) => void;
    addTodo: () => void
}

export default function AddNewTodo(props: AddNewTodoProps) {
    return (
        <Footer>
            <Input placeholder="Add Todo"
                   value={props.inputTodo}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                       props.setInput(() => (e.target as HTMLInputElement).value);
                   }}
                   onKeyDown={(e: React.KeyboardEvent) => {
                       if (e.key === 'Enter') props.addTodo();
                   }}/>
            <Button type="primary" onClick={props.addTodo}>Add Todo</Button>
        </Footer>
    );
}
