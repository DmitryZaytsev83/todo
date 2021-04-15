import React, {useState} from 'react';
import {Input, Layout, List, Button, Checkbox} from 'antd';
import './App.css';

const {Header, Footer, Content} = Layout;

export interface TodoItem {
  id: number;
  title: string;
  completed: boolean
}

const data: TodoItem[] = [
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


function App() {
  const [items, setItems] = useState(data);
  const [inputTodo, setInput] = useState('');

  const addTodo = () => {
    if (inputTodo.trim() !== '') {
      setItems(() => [...items, {
        id: new Date().getTime(),
        title: inputTodo,
        completed: false
      }]);
      setInput('');
    }
  };
  return (
      <Layout>
        <Header>Todo-list</Header>
        <Content>
          <List
              size="large"
              dataSource={items}
              renderItem={item => (
                  <List.Item>
                    <div className="todo-item">
                      <Checkbox checked={item.completed}
                                style={{textDecoration: item.completed ? 'line-through' : ''}}
                                onChange={() => {
                                  item.completed = !item.completed;
                                  setItems(() => [...items]);
                                }
                                }>Completed</Checkbox>
                      <div className="todo-title">{item.title}</div>
                      <Button type="primary" danger
                              onClick={() => {
                                const idx = items.indexOf(item);
                                setItems(() => items.filter((el, i) => i !== idx));
                              }}>
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
          <Button type="primary" onClick={addTodo}>Add Todo</Button>
        </Footer>
      </Layout>
  );
}

export default App;
