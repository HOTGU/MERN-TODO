export const todoReducer = (state = {}, action) => {
  switch (action.type) {
    case "TODO_FETCH_REQUEST":
      return { fetchLoading: true };
    case "TODO_FETCH_SUCCESS":
      return { todos: action.result["data"] };
    case "TODO_FETCH_ERROR":
      return { error: action.error };

    case "TODO_CREATE_REQUEST":
      return { createLoading: true, todos: state.todos };
    case "TODO_CREATE_SUCCESS":
      return { todos: [...state.todos, action.result["data"]] };
    case "TODO_CREATE_ERROR":
      return { error: action.error };

    case "TODO_DELETE_REQUEST":
      return { deleteLoading: true, todos: state.todos };
    case "TODO_DELETE_SUCCESS":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.result["data"]),
      };
    case "TODO_DELETE_ERROR":
      return { error: action.error };

    case "TODO_FILTER_REQUEST":
      return { filterLoading: true };
    case "TODO_FILTER_SUCCESS":
      return {
        todos: action.result["data"],
      };
    case "TODO_FILTER_ERROR":
      return { error: action.error };

    case "TODO_UPDATE_START":
      return { isUpdate: true, todos: state.todos, target: action.target };
    case "TODO_UPDATE_REQUEST":
      return { updateLoading: true, todos: state.todos };
    case "TODO_UPDATE_SUCCESS":
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.result["data"]["id"]) {
            return {
              id: todo.id,
              content: action.result["data"]["content"],
            };
          }
          return todo;
        }),
      };
    case "TODO_UPDATE_END":
      return { isUpdate: false, todos: state.todos };
    case "TODO_UPDATE_ERROR":
      return { error: action.error };
    default:
      return state;
  }
};
