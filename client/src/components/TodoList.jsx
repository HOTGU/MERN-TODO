import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../actions/todo";
import axios from "axios";
import { searchActions } from "../actions/search";

const TodoList = () => {
  const dispatch = useDispatch();

  const { todos, createLoading, deleteLoading, updateLoading } = useSelector(
    (state) => state.todoReducer
  );

  const { term } = useSelector((state) => state.searchReducer);

  useEffect(() => {
    dispatch(todoActions.fetchTodos());
  }, []);

  let listData = todos ? todos : [];

  const handleDelete = async (id) => {
    dispatch(todoActions.deleteTodo(id));
  };

  const handleUpdate = async (todo) => {
    dispatch(todoActions.updateStartTodo(todo));
  };

  const handleSearchInit = () => {
    dispatch(searchActions.searchEnd());
    dispatch(todoActions.fetchTodos());
  };

  return (
    <div>
      <div className=" space-y-4 my-4">
        {term && (
          <div className="flex items-center justify-between">
            <div className=" font-bold text-gray-500">
              "{term}" 으로 검색한 결과
            </div>
            <div
              onClick={handleSearchInit}
              className=" underline cursor-pointer text-gray-400"
            >
              검색초기화
            </div>
          </div>
        )}
        {listData.map((todo) => {
          return (
            <div key={todo.id} className="flex items-center justify-between">
              <div>{todo.content}</div>
              <div className="flex gap-1">
                <div
                  className="px-2 py-1 rounded bg-sky-400 text-white cursor-pointer hover:opacity-70 transition"
                  onClick={() => handleUpdate(todo)}
                >
                  수정
                </div>
                <div
                  className="px-2 py-1 rounded bg-rose-400 text-white cursor-pointer hover:opacity-70 transition"
                  onClick={() => handleDelete(todo.id)}
                >
                  삭제
                </div>
              </div>
            </div>
          );
        })}
        {createLoading && <div>로딩중..</div>}
      </div>
    </div>
  );
};

export default TodoList;
