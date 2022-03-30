import './App.css';
import ExampleUseMemo from './ExampleUseMemo';
import ExampleUseStateTodoApp from './ExampleUseStateTodoApp';
import ExampleUseReducerTodoApp from './ExampleUseReducerTodoApp';


function App() {
  return (
    <div className="App">
      <hr/>
      <ExampleUseMemo />
      <hr/>
      <ExampleUseStateTodoApp />
      <hr />
      <ExampleUseReducerTodoApp />
    </div>
  );
}

export default App;
