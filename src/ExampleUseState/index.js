import React, {useState} from "react";

const oders = [100, 200, 350];

function ExampleUseState() {
  const [counter, setCounter] = useState(0); 
  const [counterTrip, setCounterTrip] = useState(0);
  
  /**
   * Call back inside useState will call only just one times when component create
   */
  const [totalState, setTotalState] = useState(() => {
    const total = oders.reduce((a, b) => a + b, 0);

    console.log('Function initial state total: ', total);

    return total;
  });

  const handleIncreaseTotal = () => {
    setTotalState(totalState + 50);
  };
  
  
  /**
   * Handle increase 1 by 1
   */
  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  
  /**
   * Handle increase triple by one click. We using this case when we need to do another logic when update state;
   */
  const handleTriple = () => {
    setCounterTrip(preState => preState + 1);
    setCounterTrip(preState => preState + 1);
    setCounterTrip(preState => preState + 1);
  };

  console.log('Check 1');
  
  return (
    <div>
      <h1 style={{color: 'red'}}>ExampleUseState</h1>
      <h2>Hook useState counter:</h2>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrease}>Increase</button>
      <hr/>
      <h2>Using hook useState with initial state by callback: </h2>
      <p>Total state: {totalState} created by function initial state</p>
      <button onClick={handleIncreaseTotal}>Increase Total</button>
      <hr/>
      <h2>Using hook useState with function setState by callback: For to do more times setState</h2>
      <p>Counter triple: {counterTrip}</p>
      <button onClick={handleTriple}>Increase Triple</button>
      {console.log('Check 2')}
    </div>
  );
}

export default ExampleUseState;
