import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "../actions/todo";
import { searchActions } from "../actions/search";

const FilterTodo = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("1")
    dispatch(todoActions.filterTodo(term));
    dispatch(searchActions.searchStart(term));
    setTerm("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center mb-2">
      <div>🔍 </div>
      <input
        value={term}
        className="px-2 py-1 rounded"
        placeholder="검색어"
        onChange={(e) => setTerm(e.target.value)}
      />
    </form>
  );
};

export default FilterTodo;
