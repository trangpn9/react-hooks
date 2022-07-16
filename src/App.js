import "./App.css";
import { useLayoutEffect, useState } from "react";
import ExampleUseState from "./ExampleUseState";
import ExampleUseMemo from "./ExampleUseMemo";
import ExampleUseStateTodoApp from "./ExampleUseStateTodoApp";
import ExampleUseReducerTodoApp from "./ExampleUseReducerTodoApp";
import ExampleTwoWayBinding from "./ExampleTwoWayBinding";
import ExampleProgressBarSVG from "./ExampleProgressBarSVG";
import ExampleCircularProgress from "./ExampleCircularProgress";
import ExampleChartJS from "./ExampleChartJS";
import ExampleMyExercise from "./ExampleMyExercise";
import ExampleButtonHexagon from "./ExampleButtonHexagon";

const categoriesChartJS = [
  {
    category: "moon",
    labels: [
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
    ],
    datasets: [
      {
        label: "Dataset moon 1",
        data: [35, 516, 134, -150, 90, -735, 100, 20, 350, 10, 30, -250],
        borderColor: "#FFCC21",
        backgroundColor: "#FFCC21",
      },
      {
        label: "Dataset moon 2",
        data: [135, -216, 254, -250, 190, 435, -100, 120, -150, 200, -130, 250],
        borderColor: "#8FE9D0",
        backgroundColor: "#8FE9D0",
      },
    ],
  },
  {
    category: "day",
    labels: [
      "1日",
      "2日",
      "3日",
      "4日",
      "5日",
      "6日",
      "7日",
      "8日",
      "9日",
      "10日",
    ],
    datasets: [
      {
        label: "Dataset day 1",
        data: [10, 250, -150, 550, 90, -335, -100, 20, 350, 10],
        borderColor: "#FFCC21",
        backgroundColor: "#FFCC21",
      },
      {
        label: "Dataset day 2",
        data: [5, -116, 354, -280, 290, 35, -90, 130, -150, 200],
        borderColor: "#8FE9D0",
        backgroundColor: "#8FE9D0",
      },
    ],
  },
  {
    category: "week",
    labels: ["1週", "2週", "3週", "4週"],
    datasets: [
      {
        label: "Dataset week 1",
        data: [550, 90, -335, -100],
        borderColor: "#FFCC21",
        backgroundColor: "#FFCC21",
      },
      {
        label: "Dataset week 2",
        data: [-280, 290, -90, -150],
        borderColor: "#8FE9D0",
        backgroundColor: "#8FE9D0",
      },
    ],
  },
  {
    category: "year",
    labels: ["2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Dataset year 1",
        data: [10, 250, -150, 550, 90],
        borderColor: "#FFCC21",
        backgroundColor: "#FFCC21",
      },
      {
        label: "Dataset year 2",
        data: [130, 290, 35, -90, -230],
        borderColor: "#8FE9D0",
        backgroundColor: "#8FE9D0",
      },
    ],
  },
];

const buttonsChartJS = [
  {
    id: "day",
    name: "日",
  },
  {
    id: "week",
    name: "週",
  },
  {
    id: "moon",
    name: "月",
  },
  {
    id: "year",
    name: "年",
  },
];

function App() {
  const [dataChartJS, setDataChartJS] = useState({
    category: "",
    labels: [],
    datasets: [],
  });

  const handleChangeCateActive = (categoryActive) => {
    categoriesChartJS.forEach((item) => {
      if (item.category === categoryActive) {
        setDataChartJS(item);
      }
    });
  };

  useLayoutEffect(() => {
    handleChangeCateActive("moon");
  }, []);

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
      <hr />
      <ExampleCircularProgress
        size={250}
        strokeWidth={20}
        percentage={50}
        color="blue"
      />
      <hr />
      <div style={{ backgroundColor: "#414141" }}>
        <div className="titleSection">
          <span className="mainTitle">BODY RECORD</span>
          <span className="subTitle">2021.05.21</span>
        </div>

        <ExampleChartJS
          labels={dataChartJS.labels}
          datasets={dataChartJS.datasets}
        />

        {buttonsChartJS.map((button) => (
          <button
            type="button"
            id={button.id}
            className={
              dataChartJS.category === button.id ? "btnCus active" : "btnCus"
            }
            key={button.id}
            onClick={() => handleChangeCateActive(button.id)}
          >
            {button.name}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ backgroundColor: "#414141" }}>
        <div className="titleSection">
          <span className="mainTitle">MY EXERCISE</span>
          <span className="subTitle">2021.05.21</span>
        </div>
        <ul style={{margin: "10px"}}>
          <ExampleMyExercise />
        </ul>
      </div>
      <hr />
      <ExampleButtonHexagon />
    </div>
  );
}

export default App;
