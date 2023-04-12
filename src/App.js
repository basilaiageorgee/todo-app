import ToDo from "./components/ToDo";
import "./app.css";

function App() {
  return (
    <div className="todo-container">
      <div className="left">
        <h1>Todo</h1>
      </div>

      <div className="right">
        <ToDo />
      </div>
    </div>
  );
}

export default App;
