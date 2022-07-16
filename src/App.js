import "./App.css";
import ExampleUseState from "./ExampleUseState";
import ExampleUseMemo from "./ExampleUseMemo";
import ExampleUseStateTodoApp from "./ExampleUseStateTodoApp";
import ExampleUseReducerTodoApp from "./ExampleUseReducerTodoApp";
import ExampleTwoWayBinding from "./ExampleTwoWayBinding";
import ExampleProgressBarSVG from "./ExampleProgressBarSVG";

function App() {
  return (
    <div className="App">
      <ExampleUseState />
      <hr />
      <ExampleTwoWayBinding />
      <hr />
      <ExampleUseMemo />
      <hr />
      <ExampleUseStateTodoApp />
      <hr />
      <ExampleUseReducerTodoApp />
      <hr />
      <ExampleProgressBarSVG
        size={181}
        strokeWidth={4}
        percentage={75}
        color="#ffffff"
      />
    </div>
  );
}

export default App;
