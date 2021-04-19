import {Todo} from '../../../store/state';
import {Button, Checkbox, List, Layout} from 'antd';
import React from 'react';
import {LoadingIcon} from '../LoadingIcon/LoadingIcon';
import './TodoList.scss';

const {Content} = Layout;

type TodoListProps = {
    data: Todo[],
    onChange: (payloads: number) => void,
    onDel: (payloads: number) => void,
    loading: boolean
}

export default function TodoList(props: TodoListProps) {
    if (props.loading) {
        return <LoadingIcon/>;
    }
    return (
        <Content>
            <List size="large" dataSource={props.data} renderItem={item => (
                <List.Item>
                    <div className="todo-item">
                        <Checkbox checked={item.completed}
                                  style={{textDecoration: item.completed ? 'line-through' : ''}}
                                  onChange={() => props.onChange(item.id)}>Completed</Checkbox>
                        <div className="todo-title">{item.title}</div>
                        <Button type="primary" danger
                                onClick={() => props.onDel(item.id)}>X</Button>
                    </div>
                </List.Item>)
            }
            />
        </Content>
    )
}
