import React, { useState, useRef } from "react";

function ExampleUseStateTodoApp() {
  const [job, setJob] = useState("");
  const [jobList, setJobList] = useState([]);

  const inputJobRef = useRef(null);

  const handleAddJob = () => {
    setJobList([...jobList, job]);
    setJob('');

    inputJobRef.current.focus();
  };
  
  const handleDeleteJob = (index) => {
    console.log('Index item: ', index);
    const newJobList = [...jobList];
    newJobList.splice(index, 1);

    setJobList([...newJobList]);
  };

  return (
    <div id="ExampleUseStateTodoApp">
      <h1>Example using useState Todo App</h1>
      <input
        type="text"
        ref={inputJobRef}
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button type="button" onClick={handleAddJob}>Add Job</button>
      <br />
      <ul>
        {jobList.map((job, index) => (
          <li key={index}>{job} <span onClick={() => handleDeleteJob(index)}>&times;</span></li>
        ))}
      </ul>
    </div>
  );
}

export default ExampleUseStateTodoApp;
