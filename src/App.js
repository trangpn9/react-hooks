import './App.css';
import ExampleUseState from './ExampleUseState';
import ExampleUseMemo from './ExampleUseMemo';
import ExampleUseStateTodoApp from './ExampleUseStateTodoApp';
import ExampleUseReducerTodoApp from './ExampleUseReducerTodoApp';
import ExampleTwoWayBinding from './ExampleTwoWayBinding';

function App() {
  return (
    <div className="App">
      <ExampleUseState />
      <hr/>
      <ExampleTwoWayBinding />
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
