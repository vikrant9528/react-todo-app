import Addtodo from "./component/AddTodo";
import Appname from "./component/AppName";
import Todoitem1 from "./component/Todoitem1";
import Todoitem2 from "./component/Addtodo2";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <Appname />
      <div className="items-container">
      <Addtodo />
      <Todoitem1 />
      <Todoitem2 />
      </div>
    </center>
  );
}

export default App;
