import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../actions/todo";

const CreateTodo = () => {
  const [content, setContent] = useState("");
  const { target, isUpdate } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isUpdate && target) {
      setContent(target["content"]);
    } else {
      setContent("");
    }
  }, [isUpdate, target]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!content) return null;
      if (isUpdate) {
        dispatch(todoActions.updateTodo(target.id, content));
      } else {
        dispatch(todoActions.createTodo(content));
      }
      setContent("");
    } catch (error) {}
  };

  const handleCancelUpdate = () => {
    dispatch(todoActions.updateEndTodo());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          className="px-4 py-2 rounded w-full"
          placeholder="할일"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {isUpdate && target && (
          <div
            onClick={handleCancelUpdate}
            className="absolute right-0 bg-red-200 top-0 h-full flex items-center justify-center px-2 cursor-pointer transition hover:opacity-70"
          >
            수정취소
          </div>
        )}
      </div>
    </form>
  );
};

export default CreateTodo;
