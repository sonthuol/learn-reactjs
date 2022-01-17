import React from "react";
import PropTypes from "prop-types";
import classnames from "classname";
import "./style.scss";
TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoList: PropTypes.func,
};

TodoList.defauleProps = {
  todoList: [],
  onTodoList: null,
};

function TodoList(props) {
  const { todoList, onTodoList } = props;

  const handleOnTodoList = (todo, index) => {
    if (!onTodoList) {
      return;
    }
    onTodoList(todo, index);
  };

  return (
    <ul className="todo-list">
      {todoList.map((todo, index) => (
        <li
          key={todo.id}
          className={classnames({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          onClick={() => handleOnTodoList(todo, index)}
        >
          {todo.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
