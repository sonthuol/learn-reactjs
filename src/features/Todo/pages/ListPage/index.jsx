import queryString from "query-string";
import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList";
ListPage.propTypes = {};

function ListPage(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Code",
      status: "completed",
    },
    {
      id: 3,
      title: "Sleep",
      status: "new",
    },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilteredStatus] = useState(() => {
    const param = queryString.parse(location.search);
    return param.status || "all";
  });

  useEffect(() => {
    const param = queryString.parse(location.search);
    setFilteredStatus(param.status || "all");
  }, [location.search]);

  const handleOnTodoList = (todo, index) => {
    //clone array
    const newTodoList = [...todoList];
    //change toggle
    newTodoList[index] = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };
    //set todolist
    setTodoList(newTodoList);
  };

  const handleShowAllClick = () => {
    // setFilteredStatus("all");
    const queryParams = { status: "all" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowCompletedClick = () => {
    // setFilteredStatus("completed");
    const queryParams = { status: "completed" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };
  const handleShowNewClick = () => {
    // setFilteredStatus("new");
    const queryParams = { status: "new" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParams),
    });
  };

  const renderedTodoList = useMemo(() => {
    return todoList.filter(
      (todo) => filteredStatus === "all" || filteredStatus === todo.status
    );
  }, [todoList, filteredStatus]);

  const handleTodoFormSubmit = (value) => {
    console.log("form submit", value);
    const newTodo = {
      id: todoList.length + 1,
      title: value.title,
      status: "new",
    };

    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h3>Todo From</h3>
      <TodoForm onSubmit={handleTodoFormSubmit} />
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoList={handleOnTodoList} />
      <div>
        <button onClick={handleShowAllClick}>Show All</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default ListPage;
