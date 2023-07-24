import CreateTodo from "./components/CreateTodo";
import FilterTodo from "./components/FilterTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className=" min-h-screen">
      <div className=" mx-auto max-w-lg bg-neutral-100 rounded p-4">
        <FilterTodo />
        <CreateTodo />
        <TodoList />
      </div>
      <div className="border-t sticky top-[100vh]">footer</div>
    </div>
  );
}

export default App;
