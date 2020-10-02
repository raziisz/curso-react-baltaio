import React, { createContext } from 'react';
import { Todo } from '../models/Todo';
import { TodoContextType } from './TodoContextType';

export const TodoContext = createContext<TodoContextType>({
  todos: [
    { id: 1, title: 'Ir ao supermercado', done: false},
    { id: 2, title: 'Ir a academia', done: false},
  ],
  addTodo: () => {},
  removeTodo: () => {},
  toggle: () => {}
});

const TodoProvider = (props: any) => {
  const todos: Todo[] = [
    { id: 1, title: 'Ir ao supermercado', done: false},
    { id: 2, title: 'Ir a academia', done: false},
  ]
  const addTodo = (title: string) => {
    console.log('adicionou', title);
  }
  const removeTodo = (todo: Todo) => {
    console.log('removeu', todo.title);
  }
  const toggle = (todo: Todo) => {
    console.log('alterou', todo.title);
  }
  
  return (
    <TodoContext.Provider value={{
      todos,
      addTodo,
      removeTodo,
      toggle
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}


export default TodoProvider;