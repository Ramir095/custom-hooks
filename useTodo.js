import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodo = () => {
  const initialState = [
    // {
    //   id: new Date().getTime(),
    //   description: 'Recolectar la piedra del alma',
    //   done: false
    // },
    // {
    //   id: new Date().getTime() + 2,
    //   description: 'Recolectar la piedra del tiempo',
    //   done: false
    // },
  ];

  const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  };

// como segundo elemento desestructurado tenemos al dispatch. Le llamamos asi porque solo tenemos un reducer. Si tuvieramos más reducers tiene otro nombre más común
  const [ todos, dispatch ] = useReducer(todoReducer, initialState, init); // como primer parametro le pasamos la referencia del Reducer sin efecutar!. useReducer lo ejecutará cuando lo tenga que hacer

  const handleNewTodo = (todo) => {
    const action = {
      type: 'ADD TODO',
      payload : todo
    };

    dispatch(action);
  };

  const handleDelete = (id) => {
    const action = {
      type: 'DELETE TODO',
      payload: id
    }

    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    console.log({id});
    dispatch({
      type: 'TOGGLE TODO',
      payload: id
    })
  }
  console.log({todos});

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos])

  return {
    todos,
    handleNewTodo,
    handleDelete,
    handleToggleTodo,
    todosCount: todos?.length,
    pendingTodosCount: todos.filter(t => !t.done).length
  };
};
