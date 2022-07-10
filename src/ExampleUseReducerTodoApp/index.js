import React, { useRef, useReducer } from 'react'
import reducer, { initState } from './reducer';
import {setJob, addJob, deleteJob} from './actions';

function ExampleUseReducerTodoApp() {
  const [state, dispatch] = useReducer(reducer, initState);
  const {job, jobs} = state;

  const inputJobRef = useRef(null);

  const handleAddJob = () => {
    dispatch(addJob(job));
    dispatch(setJob(''));

    inputJobRef.current.focus();
  }

  return (
    <div id="ExampleUseReducerTodoApp">
      <h1 style={{color: 'red'}}>Example using useReducer Todo App</h1>
      <input
        type="text"
        ref={inputJobRef}
        value={job}
        onChange={(e) => {dispatch(setJob(e.target.value))}}
      />
      <button type="button" onClick={handleAddJob}>Add Job</button>
      <br />
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job} <span onClick={() => dispatch(deleteJob(index))}>&times;</span></li>
        ))}
      </ul>
    </div>
  )
}

export default ExampleUseReducerTodoApp