import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';
import { TodoContextType } from '../contexts/TodoContextType';
import { Todo } from '../models/Todo';

interface TodoListItemProps {
  todo: Todo
}

const TodoListItem = (props: TodoListItemProps) => {
  const { todo } = props;
  const { removeTodo, toggle } = useContext<TodoContextType>(TodoContext)
  const onRemove = (todo: Todo) => {
    removeTodo(todo);
  }
  const handleChange = () => {
    toggle(todo);
  }
  return (
    <tr className="uk-animation-slide-bottom-medium">
      <td className="uk-width-auto">
        <label htmlFor="">
          <input 
            type="checkbox" 
            className="uk-checkbox" 
            checked={todo.done}
            onChange={handleChange}
           />
        </label>
      </td>
      <td className="uk-width-expand">{todo.title}</td>
      <td className="uk-width-auto">
        <button 
          className="uk-icon-button uk-button-danger" 
          uk-icon="trash"
          onClick={() => onRemove(todo)}
        >

        </button>
      </td>
    </tr>
  );
}

export default TodoListItem;