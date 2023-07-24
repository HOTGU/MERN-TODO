import axios from "axios";

const fetchTodos = () => async (dispatch) => {
  const request = () => {
    return { type: "TODO_FETCH_REQUEST" };
  };

  const success = (result) => {
    return { type: "TODO_FETCH_SUCCESS", result };
  };

  const error = (error) => {
    return { type: "TODO_FETCH_ERROR", error };
  };

  dispatch(request());

  axios
    .get("/api/fetch")
    .then((result) => {
      dispatch(success(result));
    })
    .catch((err) => {
      dispatch(error(err));
    });
};

const createTodo = (content) => async (dispatch) => {
  const request = () => {
    return { type: "TODO_CREATE_REQUEST" };
  };

  const success = (result) => {
    return { type: "TODO_CREATE_SUCCESS", result };
  };

  const error = (error) => {
    return { type: "TODO_CREATE_ERROR", error };
  };

  dispatch(request());

  axios
    .post("/api/create", { content })
    .then((result) => {
      dispatch(success(result));
    })
    .catch((err) => {
      dispatch(error(err));
    });
};

const deleteTodo = (id) => async (dispatch) => {
  const request = () => {
    return { type: "TODO_DELETE_REQUEST" };
  };

  const success = (result) => {
    return { type: "TODO_DELETE_SUCCESS", result };
  };

  const error = (error) => {
    return { type: "TODO_DELETE_ERROR", error };
  };

  dispatch(request());

  axios
    .post("/api/delete", { id })
    .then((result) => {
      dispatch(success(result));
    })
    .catch((err) => {
      dispatch(error(err));
    });
};

const updateTodo = (id, content) => async (dispatch) => {
  const request = () => {
    return { type: "TODO_UPDATE_REQUEST" };
  };

  const success = (result) => {
    return { type: "TODO_UPDATE_SUCCESS", result };
  };

  const error = (error) => {
    return { type: "TODO_UPDATE_ERROR", error };
  };

  dispatch(request());

  axios
    .post("/api/update", { id, content })
    .then((result) => {
      dispatch(success(result));
    })
    .catch((err) => {
      dispatch(error(err));
    });
};

const filterTodo = (term) => async (dispatch) => {
  const request = () => {
    return { type: "TODO_FILTER_REQUEST" };
  };

  const success = (result) => {
    return { type: "TODO_FILTER_SUCCESS", result };
  };

  const error = (error) => {
    return { type: "TODO_FILTER_ERROR", error };
  };

  dispatch(request());

  axios
    .post("/api/filter", { term })
    .then((result) => {
      dispatch(success(result));
    })
    .catch((err) => {
      dispatch(error(err));
    });
};

const updateStartTodo = (todo) => {
  return { type: "TODO_UPDATE_START", target: todo };
};

const updateEndTodo = () => {
  return { type: "TODO_UPDATE_END" };
};

export const todoActions = {
  fetchTodos,
  createTodo,
  deleteTodo,
  updateTodo,
  filterTodo,
  updateStartTodo,
  updateEndTodo,
};
